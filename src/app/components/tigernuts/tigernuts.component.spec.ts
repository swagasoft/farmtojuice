import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TigernutsComponent } from './tigernuts.component';

describe('TigernutsComponent', () => {
  let component: TigernutsComponent;
  let fixture: ComponentFixture<TigernutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TigernutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TigernutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
