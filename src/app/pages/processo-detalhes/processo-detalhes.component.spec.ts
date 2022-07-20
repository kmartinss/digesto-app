import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessoDetalhesComponent } from './processo-detalhes.component';

describe('ProcessoDetalhesComponent', () => {
  let component: ProcessoDetalhesComponent;
  let fixture: ComponentFixture<ProcessoDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessoDetalhesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessoDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
