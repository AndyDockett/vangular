import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GpostListComponent } from './gpost-list.component';

describe('GpostListComponent', () => {
  let component: GpostListComponent;
  let fixture: ComponentFixture<GpostListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GpostListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GpostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
