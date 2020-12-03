import { ChildComponent } from './decorator/child/child.component';
import { AuthGuardService } from './services/auth-guard.service';
import { UserInfoComponent } from './user-info/user-info.component';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

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
import { CommonModule } from '@angular/common';
import { ParentComponent } from './decorator/parent/parent.component';
import { DobDirective } from './directives/dob.directive';
import { PspComponent } from './psp/psp.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { PSPAComponent } from './pspa/pspa.component';



const appRoutes: Routes = [
  { path: '', component: SignInComponent },
  { path: 'signUp', component: SignUpComponent },
  {
    path: 'main', component: MainComponent,
    children: [
      { path: '', component: HomeComponent, canActivate: [AuthGuardService] },
      { path: 'userInfo', component: UserInfoComponent, canActivate: [AuthGuardService] },
      { path: 'about-us', component: AboutUsComponent, canActivate: [AuthGuardService] },
      { path: 'products', component: KendoGridComponent, canActivate: [AuthGuardService] },
      { path: 'crud', redirectTo: 'crud/home', pathMatch: 'full', canActivate: [AuthGuardService] },
      { path: 'crud/home', component: CrudHomeComponent, canActivate: [AuthGuardService] },
      { path: 'crud/create', component: CreateComponent, canActivate: [AuthGuardService] },
      { path: 'crud/update/:id', component: UpdateComponent, canActivate: [AuthGuardService] },
      {
        path: 'myinfo', component: ParentComponent, canActivate: [AuthGuardService]
        
      },
      { 
        path: 'mainModule', canActivate:[AuthGuardService],
        loadChildren: () => import('./modules/main-module/main-module.module').
        then(m => m.MainModuleModule) 
      },
      {
        path: 'psp', component:PspComponent, canActivate: [AuthGuardService]
      },
      {
        path: 'pspa', component:PSPAComponent, canActivate: [AuthGuardService]
      }
      
    ]
  },
  { path: '**', component: SignInComponent }]

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
    ParentComponent,
    ChildComponent,
    DobDirective,
    PspComponent,
    PSPAComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, { useHash: true }),
    GridModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


