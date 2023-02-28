import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { HomeComponent } from './components/home/home.component';
import { UserHeaderComponent } from './components/user-header/user-header.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { NowPlayingComponent } from './components/now-playing/now-playing.component';
import { ErrorComponent } from './components/error/error.component';
import { UserLogoutComponent } from './components/user-logout/user-logout.component';
import { AdminLogoutComponent } from './components/admin-logout/admin-logout.component';
import { AdminUpdateMovieComponent } from './components/admin-update-movie/admin-update-movie.component';
import { AdminCreateMovieComponent } from './components/admin-create-movie/admin-create-movie.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { SearchComponent } from './components/search/search.component';


const routes: Routes = [
  { "path": '', redirectTo: 'home', pathMatch: 'full' },
  { "path": 'home', component: HomeComponent },
  { "path": 'movies/:id', component: NowPlayingComponent },
  { "path": 'user-login', component: UserLoginComponent },
  { "path": 'user-registration', component: UserRegistrationComponent },
  { "path": "user-header", component: UserHeaderComponent },
  { "path": "admin-dashboard", component: AdminDashboardComponent },
  { "path": "admin-update-movie/:id", component: AdminUpdateMovieComponent },
  { "path": "admin-create-movie", component: AdminCreateMovieComponent },
  { "path": 'admin-login', component: AdminLoginComponent },
  { "path": 'now-playing', component: NowPlayingComponent },
  { "path": 'checkout', component: CheckoutComponent },
  { "path": 'search', component: SearchComponent },
  { "path": 'cart-details', component: CartDetailsComponent },
  { "path": "contact-us", component: ContactUsComponent },
  { "path": 'user-logout', component: UserLogoutComponent },
  { "path": 'admin-logout', component: AdminLogoutComponent },
  { "path": '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
