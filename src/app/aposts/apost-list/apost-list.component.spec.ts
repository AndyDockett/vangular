import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApostListComponent } from './apost-list.component';

describe('ApostListComponent', () => {
  let component: ApostListComponent;
  let fixture: ComponentFixture<ApostListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApostListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
