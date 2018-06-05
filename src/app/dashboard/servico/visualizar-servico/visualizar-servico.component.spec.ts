import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarServicoComponent } from './visualizar-servico.component';

describe('VisualizarServicoComponent', () => {
  let component: VisualizarServicoComponent;
  let fixture: ComponentFixture<VisualizarServicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizarServicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizarServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
