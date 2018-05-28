import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ShowHidePasswordModule } from 'ngx-show-hide-password';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { FuncionarioModule } from './funcionario/funcionario.module';
import { HomeComponent } from './home/home.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ApiService } from './api/api.service';
import { AuthInterceptor } from './api/auth-interceptor';
import { FormSharedModule } from './shared/form-shared/form-shared.module';
import { AuthGuard } from './api/auth-guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ServicoModule } from './servico/servico.module';
import { SolicitarServicoComponent } from './solicitar-servico/solicitar-servico.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PaginaNaoEncontradaComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    SolicitarServicoComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FuncionarioModule,
    ServicoModule,
    FormSharedModule,
    ShowHidePasswordModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    AuthGuard,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
