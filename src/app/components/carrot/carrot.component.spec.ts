import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrotComponent } from './carrot.component';

describe('CarrotComponent', () => {
  let component: CarrotComponent;
  let fixture: ComponentFixture<CarrotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
