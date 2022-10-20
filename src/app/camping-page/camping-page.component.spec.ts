import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampingPageComponent } from './camping-page.component';

describe('CampingPageComponent', () => {
  let component: CampingPageComponent;
  let fixture: ComponentFixture<CampingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampingPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
