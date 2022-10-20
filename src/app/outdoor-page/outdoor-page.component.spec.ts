import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutdoorPageComponent } from './outdoor-page.component';

describe('OutdoorPageComponent', () => {
  let component: OutdoorPageComponent;
  let fixture: ComponentFixture<OutdoorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutdoorPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutdoorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
