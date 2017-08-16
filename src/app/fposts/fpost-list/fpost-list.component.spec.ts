import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FpostListComponent } from './fpost-list.component';

describe('FpostListComponent', () => {
  let component: FpostListComponent;
  let fixture: ComponentFixture<FpostListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FpostListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FpostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
