import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeDayComponent } from './life-day.component';

describe('LifeDayComponent', () => {
  let component: LifeDayComponent;
  let fixture: ComponentFixture<LifeDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
