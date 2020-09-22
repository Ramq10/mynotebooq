import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicLinuxCommandsComponent } from './basic-linux-commands.component';

describe('BasicLinuxCommandsComponent', () => {
  let component: BasicLinuxCommandsComponent;
  let fixture: ComponentFixture<BasicLinuxCommandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicLinuxCommandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicLinuxCommandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
