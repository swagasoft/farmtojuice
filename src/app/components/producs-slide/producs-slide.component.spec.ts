import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducsSlideComponent } from './producs-slide.component';

describe('ProducsSlideComponent', () => {
  let component: ProducsSlideComponent;
  let fixture: ComponentFixture<ProducsSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProducsSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducsSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
