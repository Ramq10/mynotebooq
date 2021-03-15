import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerDbConnectionComponent } from './server-db-connection.component';

describe('ServerDbConnectionComponent', () => {
  let component: ServerDbConnectionComponent;
  let fixture: ComponentFixture<ServerDbConnectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerDbConnectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerDbConnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
