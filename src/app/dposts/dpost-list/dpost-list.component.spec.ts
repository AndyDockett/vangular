import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DpostListComponent } from './dpost-list.component';

describe('DpostListComponent', () => {
  let component: DpostListComponent;
  let fixture: ComponentFixture<DpostListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DpostListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DpostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
