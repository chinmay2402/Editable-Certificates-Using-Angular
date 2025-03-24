import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliceItalianComponent } from './police-italian.component';

describe('PoliceItalianComponent', () => {
  let component: PoliceItalianComponent;
  let fixture: ComponentFixture<PoliceItalianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoliceItalianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliceItalianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
