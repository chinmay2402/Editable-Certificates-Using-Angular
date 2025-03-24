import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthItalianComponent } from './birth-italian.component';

describe('BirthItalianComponent', () => {
  let component: BirthItalianComponent;
  let fixture: ComponentFixture<BirthItalianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirthItalianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BirthItalianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
