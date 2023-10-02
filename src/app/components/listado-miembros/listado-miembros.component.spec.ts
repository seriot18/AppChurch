import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoMiembrosComponent } from './listado-miembros.component';

describe('ListadoMiembrosComponent', () => {
  let component: ListadoMiembrosComponent;
  let fixture: ComponentFixture<ListadoMiembrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoMiembrosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoMiembrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
