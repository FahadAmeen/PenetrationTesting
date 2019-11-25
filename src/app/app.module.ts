import { AdminGuard } from './admin.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies/movies.component';
import { NavComponent } from './components/nav/nav.component';
import { CreateComponent } from './components/create/create.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule } from '@angular/forms';
import { RankingComponent } from './components/ranking/ranking.component';
import { StorageModule } from '@ngx-pwa/local-storage';
import { PagePermissionDirective } from '../validation-directives/page-permission.directive';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/material';
import { BnNgIdleService } from 'bn-ng-idle';
import { NavbarService } from './services/navbarService/navbar.service';
import { FileTypeValidatorDirective } from '../validation-directives/file-type-validator.directive';
import { NoWhiteSpaceValidatorDirective } from '../validation-directives/no-white-space-validator.directive';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
@NgModule({
  declarations: [AppComponent, MoviesComponent, NavComponent,
    CreateComponent, RankingComponent, PagePermissionDirective,
    ErrorComponent, LoginComponent, FileTypeValidatorDirective, NoWhiteSpaceValidatorDirective],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    StorageModule.forRoot({
      IDBNoWrap: true,
    }),
    BrowserAnimationsModule,
    MaterialModule,
    SlimLoadingBarModule
  ],
  providers: [AdminGuard, BnNgIdleService, NavbarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
