import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tela1Component } from './tela1.component';

import { MatSidenavModule } from '@angular/material/sidenav';




describe('Tela1Component', () => {
  let component: Tela1Component;
  let fixture: ComponentFixture<Tela1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tela1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tela1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
