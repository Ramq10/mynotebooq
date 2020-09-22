import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularDeploymentOnNginxComponent } from './angular-deployment-on-nginx.component';

describe('AngularDeploymentOnNginxComponent', () => {
  let component: AngularDeploymentOnNginxComponent;
  let fixture: ComponentFixture<AngularDeploymentOnNginxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularDeploymentOnNginxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularDeploymentOnNginxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
