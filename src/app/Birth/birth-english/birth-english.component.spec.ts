import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthEnglishComponent } from './birth-english.component';

describe('BirthEnglishComponent', () => {
  let component: BirthEnglishComponent;
  let fixture: ComponentFixture<BirthEnglishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirthEnglishComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BirthEnglishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
