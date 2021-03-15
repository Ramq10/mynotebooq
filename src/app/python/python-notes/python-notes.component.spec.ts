import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PythonNotesComponent } from './python-notes.component';

describe('PythonNotesComponent', () => {
  let component: PythonNotesComponent;
  let fixture: ComponentFixture<PythonNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PythonNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PythonNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
