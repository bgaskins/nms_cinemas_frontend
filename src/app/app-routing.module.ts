import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddToCartComponent } from './components/add-to-cart/add-to-cart.component';
import { AdminAddMovieComponent } from './components/admin-add-movie/admin-add-movie.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminDeleteMovieComponent } from './components/admin-delete-movie/admin-delete-movie.component';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminUpdateMovieComponent } from './components/admin-update-movie/admin-update-movie.component';
import { HomeComponent } from './components/home/home.component';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';
import { PaymentComponent } from './components/payment/payment.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { UserHeaderComponent } from './components/user-header/user-header.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { NowPlayingComponent } from './components/now-playing/now-playing.component';
import { ErrorComponent } from './components/error/error.component';
import { UserLogoutComponent } from './components/user-logout/user-logout.component';
import { AdminLogoutComponent } from './components/admin-logout/admin-logout.component';

const routes: Routes = [
  { path: '', component: UserLoginComponent },
  { "path": 'user-login', component: UserLoginComponent },
  { "path": "home", component: HomeComponent },
  { "path": "add-to-cart", component: AddToCartComponent },
  { "path": "admin-add-movie", component: AdminAddMovieComponent },
  { "path": "admin-dashboard", component: AdminDashboardComponent },
  { "path": "admin-delete-movie", component: AdminDeleteMovieComponent },
  { "path": "admin-header", component: AdminHeaderComponent },
  { "path": 'admin-login', component: AdminLoginComponent },
  { "path": "admin-update-movie", component: AdminUpdateMovieComponent },
  { "path": "home", component: HomeComponent },
  { "path": 'now-playing', component: NowPlayingComponent },
  { "path": "order-summary", component: OrderSummaryComponent },
  { "path": "payment", component: PaymentComponent },
  { "path": "user-dashboard", component: UserDashboardComponent },
  { "path": "user-header", component: UserHeaderComponent },
  { "path": 'user-registration', component: UserRegistrationComponent },
  { "path": 'user-logout', component: UserLogoutComponent },
  { "path": 'admin-logout', component: AdminLogoutComponent },
  { "path": '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
