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
import { KendoGridComponent } from './kendo-grid/kendo-grid.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




const appRoutes:Routes=[
  {path:'',component:HomeComponent},
  {path:'about-us',component:AboutUsComponent},
  {path:'home',component:HomeComponent},
  {path:'form-page',component:FormPageComponent},
  {path:'userInfo',component:UserInfoComponent,canActivate:[AuthGuardService]},
  {path:'products',component:KendoGridComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    FormPageComponent,
    AboutUsComponent,
    KendoGridComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    GridModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
