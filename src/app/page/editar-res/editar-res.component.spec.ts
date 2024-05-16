import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarResComponent } from './editar-res.component';

describe('EditarResComponent', () => {
  let component: EditarResComponent;
  let fixture: ComponentFixture<EditarResComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarResComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
