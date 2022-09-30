import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { HomeComponent } from './components/home/home.component';
import { PaymentComponent } from './components/payment/payment.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { UserHeaderComponent } from './components/user-header/user-header.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { NowPlayingComponent } from './components/now-playing/now-playing.component';
import { ErrorComponent } from './components/error/error.component';
import { UserLogoutComponent } from './components/user-logout/user-logout.component';
import { AdminLogoutComponent } from './components/admin-logout/admin-logout.component';
import { CartComponent } from './components/cart/cart.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { AdminUpdateMovieComponent } from './components/admin-update-movie/admin-update-movie.component';
import { AdminCreateMovieComponent } from './components/admin-create-movie/admin-create-movie.component';

const routes: Routes = [
  { "path": '', component: HomeComponent },
  { "path": 'user-login', component: UserLoginComponent },
  { "path": "home", component: HomeComponent },
  { "path": "cart", component: CartComponent },
  { "path": 'user-registration', component: UserRegistrationComponent },
  { "path": "user-header", component: UserHeaderComponent },
  { "path": "user-dashboard", component: UserDashboardComponent },
  { "path": "admin-dashboard", component: AdminDashboardComponent },
  { "path": "admin-update-movie/:movieId", component: AdminUpdateMovieComponent },
  { "path": "admin-create-movie", component: AdminCreateMovieComponent },
  { "path": "admin-header", component: AdminHeaderComponent },
  { "path": 'admin-login', component: AdminLoginComponent },
  { "path": 'now-playing', component: NowPlayingComponent },
  { "path": "payment", component: PaymentComponent },
  { "path": "confirmation", component: ConfirmationComponent },
  { "path": 'user-logout', component: UserLogoutComponent },
  { "path": 'admin-logout', component: AdminLogoutComponent },
  { "path": '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
