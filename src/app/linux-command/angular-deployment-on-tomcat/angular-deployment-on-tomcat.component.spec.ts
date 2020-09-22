import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularDeploymentOnTomcatComponent } from './angular-deployment-on-tomcat.component';

describe('AngularDeploymentOnTomcatComponent', () => {
  let component: AngularDeploymentOnTomcatComponent;
  let fixture: ComponentFixture<AngularDeploymentOnTomcatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularDeploymentOnTomcatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularDeploymentOnTomcatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
