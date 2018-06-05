import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhaAgendaComponent } from './minha-agenda.component';

describe('MinhaAgendaComponent', () => {
  let component: MinhaAgendaComponent;
  let fixture: ComponentFixture<MinhaAgendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinhaAgendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinhaAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
