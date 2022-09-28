import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
import { AdminAddMovieComponent } from './components/admin-add-movie/admin-add-movie.component';
import { AdminUpdateMovieComponent } from './components/admin-update-movie/admin-update-movie.component';
import { AdminDeleteMovieComponent } from './components/admin-delete-movie/admin-delete-movie.component';
import { HomeComponent } from './components/home/home.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { UserHeaderComponent } from './components/user-header/user-header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaymentComponent } from './components/payment/payment.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserLogoutComponent } from './components/user-logout/user-logout.component';
import { AdminLogoutComponent } from './components/admin-logout/admin-logout.component';
import { SearchMoviePipe } from './pipes/search-movie.pipe';
import { ErrorComponent } from './components/error/error.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { NowPlayingComponent } from './components/now-playing/now-playing.component';
import { CartComponent } from './components/cart/cart.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    AdminHeaderComponent,
    AdminAddMovieComponent,
    AdminUpdateMovieComponent,
    AdminDeleteMovieComponent,
    HomeComponent,
    UserDashboardComponent,
    UserLoginComponent,
    UserRegistrationComponent,
    UserHeaderComponent,
    PaymentComponent,
    FooterComponent,
    UserLogoutComponent,
    AdminLogoutComponent,
    SearchMoviePipe,
    ErrorComponent,
    ContactUsComponent,
    NowPlayingComponent,
    CartComponent,
    ConfirmationComponent,

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
