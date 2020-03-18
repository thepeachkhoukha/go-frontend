import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsBaseComponent } from './events-base.component';

describe('EventsBaseComponent', () => {
  let component: EventsBaseComponent;
  let fixture: ComponentFixture<EventsBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
