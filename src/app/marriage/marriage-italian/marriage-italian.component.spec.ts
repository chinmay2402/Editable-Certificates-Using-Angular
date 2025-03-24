import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarriageItalianComponent } from './marriage-italian.component';

describe('MarriageItalianComponent', () => {
  let component: MarriageItalianComponent;
  let fixture: ComponentFixture<MarriageItalianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarriageItalianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarriageItalianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
