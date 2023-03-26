import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkStarComponent } from './dark-star.component';

describe('DarkStarComponent', () => {
  let component: DarkStarComponent;
  let fixture: ComponentFixture<DarkStarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DarkStarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DarkStarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
