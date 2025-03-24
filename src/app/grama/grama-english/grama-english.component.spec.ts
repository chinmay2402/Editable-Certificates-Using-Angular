import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GramaEnglishComponent } from './grama-english.component';

describe('GramaEnglishComponent', () => {
  let component: GramaEnglishComponent;
  let fixture: ComponentFixture<GramaEnglishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GramaEnglishComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GramaEnglishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
