import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChocolatesComponent } from './chocolates.component';

describe('ChocolatesComponent', () => {
  let component: ChocolatesComponent;
  let fixture: ComponentFixture<ChocolatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChocolatesComponent]
    });
    fixture = TestBed.createComponent(ChocolatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
