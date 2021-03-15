import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbQuestionsComponent } from './db-questions.component';

describe('DbQuestionsComponent', () => {
  let component: DbQuestionsComponent;
  let fixture: ComponentFixture<DbQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
