import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinuxCommandComponent } from './linux-command.component';

describe('LinuxCommandComponent', () => {
  let component: LinuxCommandComponent;
  let fixture: ComponentFixture<LinuxCommandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinuxCommandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinuxCommandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
