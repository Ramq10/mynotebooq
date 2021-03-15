import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicQueryComponent } from './basic-query.component';

describe('BasicQueryComponent', () => {
  let component: BasicQueryComponent;
  let fixture: ComponentFixture<BasicQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
