import { Component, OnInit, OnDestroy } from '@angular/core';
import * as d3 from 'd3';
import * as topojson from 'topojson';
import { DonorInfoCardComponent } from '../donor-info-card/donor-info-card.component'
import * as DATA from './data/us-10m.v1.json';
import { __spread } from 'tslib';
import { iDonor } from "../interfaces/donor";
import { DonorService } from "../donor.service";
import { Observable } from 'rxjs';
import { tap, reduce } from 'rxjs/operators'
import { BehaviorSubject } from 'rxjs'
import { takeUntil } from 'rxjs/operators'
import { HelperService } from '../helper.service';





@Component({
  selector: 'app-map-of-donors',
  templateUrl: './map-of-donors.component.html',
  styleUrls: ['./map-of-donors.component.scss']
})

export class MapOfDonorsComponent implements OnInit {
  curDonorList: iDonor[]; 
  curTotal: number; 
  curStateId: string; 

  onDestroy$: BehaviorSubject<any> = new BehaviorSubject (null)

  config = {
    toolTipDem: {
      width: 200,
      height: 67
    }
  };

  flags = {
    stateClicked: false
  }

  constructor(private donorService: DonorService) { }

  getToolTipContents(stateId) { 
    this.donorService.filterDonorList(stateId); 
    var total = this.curDonorList.reduce((acc, el) => acc + el.amount, 0)
    return `
      <ul class="map-rollover">
        <li>Number of Donors: <span class="val">${this.curDonorList.length}</span></li>
        <li>Total Donations: <span class="val">${total}</span></li>
      </ul>
    `
  }

  toolTipTransition(el, show?){
    el.transition()		
    .duration(100)		
    .style("opacity", show ? 0.9 : 0)
  }

  ngOnDestroy() {
    this.onDestroy$.next(true);
  }

  ngOnInit() {
    this.donorService.getDonorsAsObservable().subscribe(list => {
      this.curDonorList = list
    });

    const _self = this, 
      toolTip = d3.select("body").append("div")
        .attr('class', 'tool-tip')
        .style("width", this.config.toolTipDem.width + "px")
        .style("height", this.config.toolTipDem.height + "px"), 
      us = DATA.default,
      svg = d3.select("#map-on-donors"),
      path = d3.geoPath(), 

      statesCollection = svg.append("g")
        .style("fill", "#26828C")
        .selectAll("path")
        .data(topojson.feature(us, us.objects.states).features)
        .enter().append("path")
          .attr("d", path);

    svg.append("path")
      .attr("class", "state-borders")
      .attr("d", path(topojson.mesh(us, us.objects.states, (a, b) => a !== b )));

    statesCollection.on('mouseover',  (d: any) => {
      const toolTipContents = _self.getToolTipContents(d.id);
          
      d3.select(d3.event.target).style('fill','#004677');

      _self.toolTipTransition(toolTip, true);
      
      toolTip.style("left", (d3.event.pageX) + "px")		
        .style("top", (d3.event.pageY - 56) + "px")
        .html(toolTipContents);
    });

    statesCollection.on("mouseout",  () => {
      d3.select(d3.event.target).style('fill','#26828C');
      _self.toolTipTransition(toolTip);
    })

    statesCollection.on("click", (d) => {
      _self.donorService.setClickedStateData(HelperService.deepCopy(_self.curDonorList))
      _self.flags.stateClicked = true;
    });
  }

}
