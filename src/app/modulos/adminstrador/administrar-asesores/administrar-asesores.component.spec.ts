import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrarAsesoresComponent } from './administrar-asesores.component';

describe('AdministrarAsesoresComponent', () => {
  let component: AdministrarAsesoresComponent;
  let fixture: ComponentFixture<AdministrarAsesoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministrarAsesoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrarAsesoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
