import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PythonTopicsComponent } from './python-topics.component';

describe('PythonTopicsComponent', () => {
  let component: PythonTopicsComponent;
  let fixture: ComponentFixture<PythonTopicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PythonTopicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PythonTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
