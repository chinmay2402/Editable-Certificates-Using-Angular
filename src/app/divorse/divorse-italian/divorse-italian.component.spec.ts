import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivorseItalianComponent } from './divorse-italian.component';

describe('DivorseItalianComponent', () => {
  let component: DivorseItalianComponent;
  let fixture: ComponentFixture<DivorseItalianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivorseItalianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DivorseItalianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
