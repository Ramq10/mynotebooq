import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringBootDeploymentOnTomcatComponent } from './spring-boot-deployment-on-tomcat.component';

describe('SpringBootDeploymentOnTomcatComponent', () => {
  let component: SpringBootDeploymentOnTomcatComponent;
  let fixture: ComponentFixture<SpringBootDeploymentOnTomcatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpringBootDeploymentOnTomcatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpringBootDeploymentOnTomcatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
