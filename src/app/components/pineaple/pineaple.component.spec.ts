import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PineapleComponent } from './pineaple.component';

describe('PineapleComponent', () => {
  let component: PineapleComponent;
  let fixture: ComponentFixture<PineapleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PineapleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PineapleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
