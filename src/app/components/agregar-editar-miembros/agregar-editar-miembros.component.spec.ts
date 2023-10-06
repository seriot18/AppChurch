import { ComponentFixture, TestBed } from '@angular/core/testing';

import {AgregarEditarMiembrosComponent } from './agregar-editar-miembros.component';

describe('AgregarEditarMiembrosComponent', () => {
  let component: AgregarEditarMiembrosComponent;
  let fixture: ComponentFixture<AgregarEditarMiembrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarEditarMiembrosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarEditarMiembrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
