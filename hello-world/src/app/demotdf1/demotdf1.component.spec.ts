import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demotdf1Component } from './demotdf1.component';

describe('Demotdf1Component', () => {
  let component: Demotdf1Component;
  let fixture: ComponentFixture<Demotdf1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Demotdf1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Demotdf1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
