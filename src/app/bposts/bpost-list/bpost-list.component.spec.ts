import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BpostListComponent } from './bpost-list.component';

describe('BpostListComponent', () => {
  let component: BpostListComponent;
  let fixture: ComponentFixture<BpostListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BpostListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BpostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
