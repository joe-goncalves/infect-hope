import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";
import { HelperService } from "./helper.service" 
import * as DONORLIST from './map-of-donors/data/donor-list.json';
import * as STATES from './map-of-donors/data/states.json';
import { iState } from "./interfaces/state";
import { iDonor } from "./interfaces/donor"


@Injectable ({
  providedIn: 'root'
})
export class DonorService {
  private donorListFull: iDonor[]; 
  
  private states; 
  private donorList$: BehaviorSubject<iDonor[]>  = new BehaviorSubject([]);
  private clickedStateDonors$: BehaviorSubject<iDonor[]> = new BehaviorSubject([]);
  private topDonors$: BehaviorSubject<iDonor[]> = new BehaviorSubject([]);
  
  private config = {
    startDt: "05/01/2010",
    endDt: "06/15/2010",
  }

  constructor() {
    this.states = HelperService.deepCopy(STATES).default
    this.donorListFull = HelperService.deepCopy(DONORLIST).default
      .map(donor => Object.assign(
        donor, 
        {
          amount: Math.floor(Math.random()*200),
          date: HelperService.getRandomDateInBounds(this.config.startDt, this.config.endDt)
        }
      ));
  }

  getDonorsAsObservable() {
    return this.donorList$
  }

  getTopDonorsAObs(num) {
    var td = HelperService.deepCopy(this.donorListFull)
      .sort((a,b) => {
        return a.amount - b.amount; 
      })
      .filter((d,i)  => i >= this.donorListFull.length - 3);
    
    this.topDonors$.next(td);
    return this.topDonors$.asObservable();
  }

  setClickedStateData(clickedStateDonors: iDonor[]) {
    this.clickedStateDonors$.next(clickedStateDonors);
  }

  getClickStateDonorsAsObservable() {
    return this.clickedStateDonors$.asObservable();
  }

  filterDonorList(curStateId) {
    if (curStateId < 10)
        curStateId = curStateId.split('')[1];

    const stateCode = this.states.filter(state =>  state.id === curStateId)[0].code;
    let results = HelperService.deepCopy(this.donorListFull)
      .filter(donor => donor.state === stateCode);

     this.donorList$.next(results); 
  }
}
