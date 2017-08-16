import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HpostListComponent } from './hpost-list.component';

describe('HpostListComponent', () => {
  let component: HpostListComponent;
  let fixture: ComponentFixture<HpostListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HpostListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HpostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
