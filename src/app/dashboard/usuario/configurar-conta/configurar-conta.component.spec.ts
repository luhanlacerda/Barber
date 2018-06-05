import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurarContaComponent } from './configurar-conta.component';

describe('ConfigurarContaComponent', () => {
  let component: ConfigurarContaComponent;
  let fixture: ComponentFixture<ConfigurarContaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigurarContaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurarContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
