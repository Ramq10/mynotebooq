import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PythonTutorialComponent } from './python-tutorial.component';

describe('PythonTutorialComponent', () => {
  let component: PythonTutorialComponent;
  let fixture: ComponentFixture<PythonTutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PythonTutorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PythonTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
