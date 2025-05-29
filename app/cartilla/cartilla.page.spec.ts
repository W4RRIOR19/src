import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartillaPage } from './cartilla.page';

describe('CartillaPage', () => {
  let component: CartillaPage;
  let fixture: ComponentFixture<CartillaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CartillaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
