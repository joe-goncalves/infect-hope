import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PercentOfTotalComponent } from './percent-of-total.component';

describe('PercentOfTotalComponent', () => {
  let component: PercentOfTotalComponent;
  let fixture: ComponentFixture<PercentOfTotalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PercentOfTotalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PercentOfTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
