import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceItalianComponent } from './advance-italian.component';

describe('AdvanceItalianComponent', () => {
  let component: AdvanceItalianComponent;
  let fixture: ComponentFixture<AdvanceItalianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvanceItalianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvanceItalianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
