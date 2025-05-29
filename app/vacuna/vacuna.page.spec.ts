import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VacunaPage } from './vacuna.page';

describe('VacunaPage', () => {
  let component: VacunaPage;
  let fixture: ComponentFixture<VacunaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VacunaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
