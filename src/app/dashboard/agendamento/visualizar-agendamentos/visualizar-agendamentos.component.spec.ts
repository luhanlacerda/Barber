import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarAgendamentosComponent } from './visualizar-agendamentos.component';

describe('VisualizarAgendamentosComponent', () => {
  let component: VisualizarAgendamentosComponent;
  let fixture: ComponentFixture<VisualizarAgendamentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizarAgendamentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizarAgendamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
