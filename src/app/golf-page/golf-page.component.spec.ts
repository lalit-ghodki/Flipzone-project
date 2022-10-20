import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GolfPageComponent } from './golf-page.component';

describe('GolfPageComponent', () => {
  let component: GolfPageComponent;
  let fixture: ComponentFixture<GolfPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GolfPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GolfPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
