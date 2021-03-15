import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbTopicsComponent } from './db-topics.component';

describe('DbTopicsComponent', () => {
  let component: DbTopicsComponent;
  let fixture: ComponentFixture<DbTopicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbTopicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
