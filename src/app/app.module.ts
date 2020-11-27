import { AuthGuardService } from './services/auth-guard.service';
import { UserInfoComponent } from './user-info/user-info.component';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { KendoGridComponent } from './kendo-grid/kendo-grid.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent as CrudHomeComponent } from './crud/home/home.component';

import { CreateComponent } from './crud/create/create.component';
import { UpdateComponent } from './crud/update/update.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { MainComponent } from './main/main.component';
import { NameValidatorDirective } from './directives/name-validator.directive';
import { PasswordValidatorDirective } from './directives/password-validator.directive';
import { EmailValidatorDirective } from './directives/email-validator.directive';
import { PhoneValidatorDirective } from './directives/phone-validator.directive';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommonModule } from '@angular/common'; 






const appRoutes: Routes = [
  { path: '', component: SignInComponent },
  { path: 'signUp', component: SignUpComponent },
  {
    path: 'main', component: MainComponent,canActivate: [AuthGuardService],
    children: [
      { path: '', component: HomeComponent },
      { path: 'userInfo', component: UserInfoComponent, },
      { path: 'about-us', component: AboutUsComponent },
      { path: 'products', component: KendoGridComponent },
      { path: 'crud', redirectTo: 'crud/home', pathMatch: 'full' },
      { path: 'crud/home', component: CrudHomeComponent },
      { path: 'crud/create', component: CreateComponent },
      { path: 'crud/update/:id', component: UpdateComponent },
    ]
  },
  {path:'**',component:SignInComponent,canActivate:[AuthGuardService]}]

@NgModule({
  declarations: [
    AppComponent,
    

    AboutUsComponent,
    KendoGridComponent,
    HomeComponent,
    CreateComponent,
    UpdateComponent,
    CrudHomeComponent,
    SignUpComponent,
    SignInComponent,
    UserInfoComponent,
    MainComponent,
    NameValidatorDirective,
    PasswordValidatorDirective,
    EmailValidatorDirective,
    PhoneValidatorDirective,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    RouterModule.forRoot(appRoutes,{ useHash: true }),
    GridModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


