import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoryPageComponent } from './accessory-page.component';

describe('AccessoryPageComponent', () => {
  let component: AccessoryPageComponent;
  let fixture: ComponentFixture<AccessoryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessoryPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
