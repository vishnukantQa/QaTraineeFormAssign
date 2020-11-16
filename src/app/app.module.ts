import { UserInfoComponent } from './user-info/user-info.component';
import { Routes, RouterModule } from '@angular/router';
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
  {path:'userInfo',component:UserInfoComponent}
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
