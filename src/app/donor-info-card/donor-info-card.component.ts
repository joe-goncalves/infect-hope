import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { iDonor } from '../interfaces/donor';
import { DonorService } from "../donor.service";

@Component({
  selector: 'app-donor-info-card',
  templateUrl: './donor-info-card.component.html',
  styleUrls: ['./donor-info-card.component.scss']   
})
export class DonorInfoCardComponent implements OnInit {
  flags:{canShow} = {canShow: false}
    // displayedColumns: string[] = ["id","first_name","last_name","email","gender","state","zip","address","amount","date"];
  displayedColumns: string[] = ["date", "name", "emailAddress", "address"];
  dataSource: MatTableDataSource<iDonor>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private donorService: DonorService){}
  AfterViewInit(){
    this.flags.canShow = true;
  }
  ngOnInit() {
    
    this.donorService.getClickStateDonorsAsObservable()
    .subscribe(donors => {    
      this.dataSource = new MatTableDataSource<iDonor>(donors);
      document.getElementById("donorTable-container").style.setProperty('opacity', this.dataSource.data.length > 0 ? '1' : '0'); 
      this.dataSource.paginator = this.paginator;
    });
  }
}


