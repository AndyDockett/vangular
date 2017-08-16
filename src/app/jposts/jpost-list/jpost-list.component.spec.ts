import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JpostListComponent } from './jpost-list.component';

describe('JpostListComponent', () => {
  let component: JpostListComponent;
  let fixture: ComponentFixture<JpostListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JpostListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JpostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
