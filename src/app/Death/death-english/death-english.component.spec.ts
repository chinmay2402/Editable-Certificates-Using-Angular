import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeathEnglishComponent } from './death-english.component';

describe('DeathEnglishComponent', () => {
  let component: DeathEnglishComponent;
  let fixture: ComponentFixture<DeathEnglishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeathEnglishComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeathEnglishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
