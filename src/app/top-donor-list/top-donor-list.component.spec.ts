import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopDonorListComponent } from './top-donor-list.component';

describe('TopDonorListComponent', () => {
  let component: TopDonorListComponent;
  let fixture: ComponentFixture<TopDonorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopDonorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopDonorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
