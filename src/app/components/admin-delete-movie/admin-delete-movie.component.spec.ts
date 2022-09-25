import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDeleteMovieComponent } from './admin-delete-movie.component';

describe('AdminDeleteMovieComponent', () => {
  let component: AdminDeleteMovieComponent;
  let fixture: ComponentFixture<AdminDeleteMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDeleteMovieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDeleteMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
