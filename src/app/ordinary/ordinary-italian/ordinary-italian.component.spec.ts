import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdinaryItalianComponent } from './ordinary-italian.component';

describe('OrdinaryItalianComponent', () => {
  let component: OrdinaryItalianComponent;
  let fixture: ComponentFixture<OrdinaryItalianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdinaryItalianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdinaryItalianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
