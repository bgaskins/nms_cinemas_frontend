import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUpdateMovieComponent } from './admin-update-movie.component';

describe('AdminUpdateMovieComponent', () => {
  let component: AdminUpdateMovieComponent;
  let fixture: ComponentFixture<AdminUpdateMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUpdateMovieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminUpdateMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
