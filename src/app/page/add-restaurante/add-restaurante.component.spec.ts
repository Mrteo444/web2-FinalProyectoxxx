import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRestauranteComponent } from './add-restaurante.component';

describe('AddRestauranteComponent', () => {
  let component: AddRestauranteComponent;
  let fixture: ComponentFixture<AddRestauranteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddRestauranteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddRestauranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
