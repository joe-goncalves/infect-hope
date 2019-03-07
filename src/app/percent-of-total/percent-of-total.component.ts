import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3'
import { HelperService } from '../helper.service';

@Component({
  selector: 'app-percent-of-total',
  templateUrl: './percent-of-total.component.html',
  styleUrls: ['./percent-of-total.component.scss']
})
export class PercentOfTotalComponent implements OnInit {
  today: string;
  chartData: any[] =[
      {"name":"Active", "total":10000, "outstanding":7000},
    ];
  
  constructor() { 
    this.today = new Date().toLocaleDateString();
  }

  drawChart() {
    var node = document.getElementById("current-total");
    while (node.firstChild) {
        node.removeChild(node.firstChild);
    }
    

      var data = HelperService.deepCopy(this.chartData);
      var svg = d3.select("#current-total");
      var margin = {top: 20, right: 0, bottom: 30, left: 35};
      var width = +svg.attr("width") - margin.left - margin.right;
      var height = +svg.attr("height") - margin.top - margin.bottom;
      var g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
      
      var x = d3.scaleBand()
          .rangeRound([0, width])
        
      var y = d3.scaleLinear()
          .range([height, 0])
          .nice();

      var z = d3.scaleOrdinal()
          .range(["#004677", "#26828C"]);

      var stack = d3.stack()
          .keys(["outstanding","satisfied"])
          .offset(d3.stackOffsetExpand)          
      
      var seriesNames = data.map(d => Object.keys(d).filter(key => key !== "name"))
      
      data.forEach(d => d.satisfied=d.total-d.outstanding);
      x.domain(data.map(d => d.name));
      z.domain(seriesNames);
      console.log(seriesNames);
        
      var serie = g.selectAll(".serie")
        .data(stack(data))
        .enter().append("g")
        .attr("class", "serie")
        .attr("fill", (d):any => {
          return z(d.key)
        })
        
        serie.selectAll("rect")    
          .data(d => d)
          .enter().append("rect")
            .attr("x", d => x(<string><any>d.data.name))
            .attr("y", d => y(d[1]))
            .attr("width", x.bandwidth())
            .style("opacity", 0.8)
            .transition()
            .duration(500)
            .delay(d => d[0] == 0 ? 500 : 0)
            .attr("height", d => y(d[0]) - y(d[1]))
        
        g.append("g")
          .attr("class", "axis axis--x")
          .attr("transform", "translate(0," + height + ")")
          .call(d3.axisBottom(x));
      
        g.append("g")
          .attr("class", "axis axis--y")
          .call(d3.axisLeft(y).ticks(4, "%").tickSize(0));
    
  }

  ngOnInit() {
    
    this.drawChart();
  
  }

}
