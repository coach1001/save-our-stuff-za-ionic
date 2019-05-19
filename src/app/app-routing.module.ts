import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './services/user/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule',
    canActivate: [AuthGuard],
  },
  {
    path: 'slip-create',
    loadChildren: './pages/slip-create/slip-create.module#SlipCreatePageModule',
    canActivate: [AuthGuard],
  },
  {
    path: 'slip-edit/:id',
    loadChildren: './pages/slip-edit/slip-edit.module#SlipEditPageModule',
    canActivate: [AuthGuard],
  },
  {
    path: 'slip-list',
    loadChildren: './pages/slip-list/slip-list.module#SlipListPageModule',
    canActivate: [AuthGuard],
  },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  {
    path: 'profile',
    loadChildren: './pages/profile/profile.module#ProfilePageModule',
    canActivate: [AuthGuard],
  },
  {
    path: 'reset-password',
    loadChildren: './pages/reset-password/reset-password.module#ResetPasswordPageModule',
  },
  { path: 'signup', loadChildren: './pages/signup/signup.module#SignupPageModule' },
  { path: 'not-verified', loadChildren: './not-verified/not-verified.module#NotVerifiedPageModule' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
