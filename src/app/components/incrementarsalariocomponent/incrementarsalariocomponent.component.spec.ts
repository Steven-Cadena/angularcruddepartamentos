import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncrementarsalariocomponentComponent } from './incrementarsalariocomponent.component';

describe('IncrementarsalariocomponentComponent', () => {
  let component: IncrementarsalariocomponentComponent;
  let fixture: ComponentFixture<IncrementarsalariocomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncrementarsalariocomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncrementarsalariocomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
