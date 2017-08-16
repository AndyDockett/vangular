import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpostListComponent } from './epost-list.component';

describe('EpostListComponent', () => {
  let component: EpostListComponent;
  let fixture: ComponentFixture<EpostListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpostListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
