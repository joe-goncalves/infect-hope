import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimesPipe } from './pipes/times.pipe';
import { PercentOfTotalComponent } from './percent-of-total/percent-of-total.component';
import { MapOfDonorsComponent } from './map-of-donors/map-of-donors.component';
import { DonorInfoCardComponent } from './donor-info-card/donor-info-card.component';
import { TopDonorListComponent } from './top-donor-list/top-donor-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';




@NgModule({
  declarations: [
    AppComponent,
    TimesPipe,
    PercentOfTotalComponent,
    MapOfDonorsComponent,
    DonorInfoCardComponent,
    TopDonorListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatCardModule,
    MatListModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
