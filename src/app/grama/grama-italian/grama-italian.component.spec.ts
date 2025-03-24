import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GramaItalianComponent } from './grama-italian.component';

describe('GramaItalianComponent', () => {
  let component: GramaItalianComponent;
  let fixture: ComponentFixture<GramaItalianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GramaItalianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GramaItalianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
