import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaaComponent } from './daa.component';

describe('DaaComponent', () => {
  let component: DaaComponent;
  let fixture: ComponentFixture<DaaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
