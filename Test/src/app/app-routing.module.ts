import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BloodDonationRequestFormComponent } from './pages/blood-donation-request-form/blood-donation-request-form.component';
import { BloodReceptionRequestComponent } from './pages/blood-reception-request/blood-reception-request.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AdminSigninComponent } from './pages/admin-signin/admin-signin.component';
import { UserHomeComponent } from './pages/user-home/user-home.component';
import { HospitalHomeComponent } from './pages/hospital-home/hospital-home.component';
import { AdminHomeComponent } from './pages/admin-home/admin-home.component';
import { PasswordResetComponent } from './pages/password-reset/password-reset.component';
import { DonationHistoryComponent } from './pages/donation-history/donation-history.component';
import { ReceptionHistoryComponent } from './pages/reception-history/reception-history.component';
import { DonationRequestComponent } from './pages/donation-request/donation-request.component';
import { ReceptionRequestComponent } from './pages/reception-request/reception-request.component';
import { AllDonationRequestsComponent } from './pages/all-donation-requests/all-donation-requests.component';
import { AllReceptionRequestsComponent } from './pages/all-reception-requests/all-reception-requests.component';

import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'password-reset', component: PasswordResetComponent },
  { path: 'admin/signin', component: AdminSigninComponent },
  { path: 'user/home', component: UserHomeComponent },
  { path: 'hospital/home', component: HospitalHomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'admin/home', component: AdminHomeComponent },
  { path: 'user/history', component: DonationHistoryComponent },
  { path: 'hospital/history', component: ReceptionHistoryComponent },
  { path: 'admin/donations', component: AllDonationRequestsComponent },
  { path: 'admin/receptions', component: AllReceptionRequestsComponent },
  { path: 'donation-request/:id', component: DonationRequestComponent },
  { path: 'reception-request/:id', component: ReceptionRequestComponent },
  { path: 'user/donate', component: BloodDonationRequestFormComponent, canActivate: [AuthGuard] },
  { path: 'hospital/receive', component: BloodReceptionRequestComponent, canActivate: [AuthGuard] },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
