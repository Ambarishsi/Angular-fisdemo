import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ManualcompComponent } from './manualcomponent/manualcomp.component';
import { SignupComponent } from './signup/signup.component';
import { TeamcardComponent } from './teamcard/teamcard.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AuthGaurdService } from './auth-gaurd.service';
import { CanDeactivateGuard } from './contact/can-deactivate-guard.service';
import { HttpClientModule } from '@angular/common/http'
import { HomeColorDirective } from './home/home-color.directive';
import { HomeRendererDirective } from './home/home-renderer.directive';
import { StoreModule } from "@ngrx/store"
import { contactReducer } from './contact/store/contact.reducer';
// import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    TeamcardComponent,
    ManualcompComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    HomeColorDirective,
    HomeRendererDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(contactReducer)
    // MatButtonModule
  ],
  providers: [
    AuthGaurdService,
    CanDeactivateGuard
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }

