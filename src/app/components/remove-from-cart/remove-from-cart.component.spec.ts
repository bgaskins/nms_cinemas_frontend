import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveFromCartComponent } from './remove-from-cart.component';

describe('RemoveFromCartComponent', () => {
  let component: RemoveFromCartComponent;
  let fixture: ComponentFixture<RemoveFromCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveFromCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoveFromCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
