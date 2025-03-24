import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivorseEnglishComponent } from './divorse-english.component';

describe('DivorseEnglishComponent', () => {
  let component: DivorseEnglishComponent;
  let fixture: ComponentFixture<DivorseEnglishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivorseEnglishComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DivorseEnglishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
