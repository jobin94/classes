import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { McaLeComponent } from './mca-le.component';

describe('McaLeComponent', () => {
  let component: McaLeComponent;
  let fixture: ComponentFixture<McaLeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McaLeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(McaLeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
