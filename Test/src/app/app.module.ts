import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzTableModule } from 'ng-zorro-antd/table';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyNgZorroAntdModule } from '@ngx-formly/ng-zorro-antd';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './shared/authconfig.interceptor';

import { LitreConverterPipe } from './pipes/litre';

import { DateField } from './forms/fields/date/date.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AdminSigninComponent } from './pages/admin-signin/admin-signin.component';
import { UserHomeComponent } from './pages/user-home/user-home.component';
import { HospitalHomeComponent } from './pages/hospital-home/hospital-home.component';
import { AdminHomeComponent } from './pages/admin-home/admin-home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { PasswordResetComponent } from './pages/password-reset/password-reset.component';
import { DonationRequestComponent } from './pages/donation-request/donation-request.component';
import { ReceptionRequestComponent } from './pages/reception-request/reception-request.component';
import { DonationHistoryComponent } from './pages/donation-history/donation-history.component';
import { ReceptionHistoryComponent } from './pages/reception-history/reception-history.component';
import { AllDonationRequestsComponent } from './pages/all-donation-requests/all-donation-requests.component';
import { AllReceptionRequestsComponent } from './pages/all-reception-requests/all-reception-requests.component';
import { BloodDonationRequestFormComponent } from './pages/blood-donation-request-form/blood-donation-request-form.component';
import { BloodReceptionRequestComponent } from './pages/blood-reception-request/blood-reception-request.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    DateField,
    LitreConverterPipe,
    SigninComponent,
    SignupComponent,
    ProfileComponent,
    AdminSigninComponent,
    UserHomeComponent,
    HospitalHomeComponent,
    PasswordResetComponent,
    AdminHomeComponent,
    DonationRequestComponent,
    ReceptionRequestComponent,
    DonationHistoryComponent,
    ReceptionHistoryComponent,
    AllDonationRequestsComponent,
    AllReceptionRequestsComponent,
    BloodDonationRequestFormComponent,
    BloodReceptionRequestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzFormModule,
    NzTabsModule,
    NzTableModule,
    NzButtonModule,
    NzMessageModule,
    NzDatePickerModule,
    FormlyModule.forRoot({
      types: [
        { name: 'date', component: DateField },
      ],
    }),
    FormlyNgZorroAntdModule,
    NzCardModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
