import { Component, AfterViewChecked} from '@angular/core';
import 'zone.js/dist/zone';
import 'zone.js/dist/zone-error';
import {PercentOfTotalComponent} from './percent-of-total/percent-of-total.component'
import {MapOfDonorsComponent} from './map-of-donors/map-of-donors.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewChecked{
  title = 'infect-hope';
  
  ngAfterViewChecked() {
  }

  
}

