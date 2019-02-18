import { Component, OnInit } from '@angular/core';
import { DonorService } from '../donor.service';
import { iDonor } from '../interfaces/donor';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-top-donor-list',
  templateUrl: './top-donor-list.component.html',
  styleUrls: ['./top-donor-list.component.scss']
})
export class TopDonorListComponent implements OnInit {
  topDonors$: Observable<iDonor[]>

  constructor(private donorService: DonorService) { }

  ngOnInit() {
    this.topDonors$ = this.donorService.getTopDonorsAObs(5);
  }

}
