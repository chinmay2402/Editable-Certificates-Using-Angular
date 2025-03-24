import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliceEnglishComponent } from './police-english.component';

describe('PoliceEnglishComponent', () => {
  let component: PoliceEnglishComponent;
  let fixture: ComponentFixture<PoliceEnglishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoliceEnglishComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliceEnglishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
