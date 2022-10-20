import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MountainPageComponent } from './mountain-page.component';

describe('MountainPageComponent', () => {
  let component: MountainPageComponent;
  let fixture: ComponentFixture<MountainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MountainPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MountainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
