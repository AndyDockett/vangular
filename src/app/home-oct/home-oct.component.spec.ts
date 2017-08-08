import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeOctComponent } from './home-oct.component';

describe('HomeOctComponent', () => {
  let component: HomeOctComponent;
  let fixture: ComponentFixture<HomeOctComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeOctComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeOctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
