import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PythonQuestionsComponent } from './python-questions.component';

describe('PythonQuestionsComponent', () => {
  let component: PythonQuestionsComponent;
  let fixture: ComponentFixture<PythonQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PythonQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PythonQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
