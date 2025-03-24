import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarriageEnglishComponent } from './marriage-english.component';

describe('MarriageEnglishComponent', () => {
  let component: MarriageEnglishComponent;
  let fixture: ComponentFixture<MarriageEnglishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarriageEnglishComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarriageEnglishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
