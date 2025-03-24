import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeathItalianComponent } from './death-italian.component';

describe('DeathItalianComponent', () => {
  let component: DeathItalianComponent;
  let fixture: ComponentFixture<DeathItalianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeathItalianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeathItalianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
