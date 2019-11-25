import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { CreateComponent } from './components/create/create.component';
import { MoviesComponent } from './components/movies/movies.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RankingComponent } from './components/ranking/ranking.component';
import { AdminGuard } from './admin.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'ranking', component: RankingComponent },
  { path: 'create', component: CreateComponent },
  { path: 'error', component: ErrorComponent },
  { path: 'login', component: LoginComponent }


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
