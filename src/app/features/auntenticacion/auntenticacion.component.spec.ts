import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuntenticacionComponent } from './auntenticacion.component';

describe('AuntenticacionComponent', () => {
  let component: AuntenticacionComponent;
  let fixture: ComponentFixture<AuntenticacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuntenticacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuntenticacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
