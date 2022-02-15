import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaleComponent } from './detale.component';

describe('DetaleComponent', () => {
  let component: DetaleComponent;
  let fixture: ComponentFixture<DetaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
