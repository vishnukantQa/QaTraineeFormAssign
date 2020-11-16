import { AuthGuardService } from './services/auth-guard.service';
import { UserInfoComponent } from './user-info/user-info.component';
import { Routes, RouterModule,CanActivate } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormPageComponent } from './form-page/form-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';


const appRoutes:Routes=[
  {path:'',component:HomeComponent},
  {path:'about-us',component:AboutUsComponent},
  {path:'home',component:HomeComponent},
  {path:'form-page',component:FormPageComponent},
  {path:'userInfo',component:UserInfoComponent,canActivate:[AuthGuardService]}
]

@NgModule({
  declarations: [
    AppComponent,
    FormPageComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
