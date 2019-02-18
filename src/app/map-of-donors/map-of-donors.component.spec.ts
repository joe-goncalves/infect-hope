import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapOfDonorsComponent } from './map-of-donors.component';

describe('MapOfDonorsComponent', () => {
  let component: MapOfDonorsComponent;
  let fixture: ComponentFixture<MapOfDonorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapOfDonorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapOfDonorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
