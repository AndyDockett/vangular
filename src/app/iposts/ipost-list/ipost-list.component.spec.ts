import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpostListComponent } from './ipost-list.component';

describe('IpostListComponent', () => {
  let component: IpostListComponent;
  let fixture: ComponentFixture<IpostListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpostListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
