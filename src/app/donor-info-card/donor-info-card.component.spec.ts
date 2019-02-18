import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorInfoCardComponent } from './donor-info-card.component';

describe('DonorInfoCardComponent', () => {
  let component: DonorInfoCardComponent;
  let fixture: ComponentFixture<DonorInfoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonorInfoCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonorInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
