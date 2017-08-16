import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpostListComponent } from './cpost-list.component';

describe('CpostListComponent', () => {
  let component: CpostListComponent;
  let fixture: ComponentFixture<CpostListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpostListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
