import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ShowHidePasswordModule } from 'ngx-show-hide-password';
import { NgbModule, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ApiService } from './shared/api/api.service';
import { AuthInterceptor } from './shared/interceptors/auth-interceptor';
import { FormSharedModule } from './shared/form-shared/form-shared.module';
import { AuthGuard } from './shared/guards/auth.guard';
import { DashboardModule } from './dashboard/dashboard.module';
import { ClienteGuard } from './shared/guards/cliente.guard';
import { CustomNgbDateParserFormatter } from './shared/validators/custom-ngb-date-fr-parser-formatter';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PaginaNaoEncontradaComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DashboardModule,
    FormSharedModule,
    ShowHidePasswordModule.forRoot(),
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: NgbDateParserFormatter,
      useClass: CustomNgbDateParserFormatter
    },
    AuthGuard,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
