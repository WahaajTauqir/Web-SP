import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlayComponent } from './play/play.component';
import { GamePlayScreenComponent } from './game-play-screen/game-play-screen.component';
import { UploadComponent } from './upload/upload.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './auth.guard'; 
export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    { 
        path: '',
        component: PlayComponent 
    },
    { 
        path: 'game-play', 
        component: GamePlayScreenComponent,
        canActivate: [AuthGuard] 
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'play',
        component: PlayComponent
    },
    {
        path: 'game-play-screen',
        component: GamePlayScreenComponent,
        canActivate: [AuthGuard] 
    },
    {
        path: 'profile',
        component: ProfileComponent
    },
    {
        path: 'login-signup',
        component: LoginSignupComponent
    },
    {
        path: 'upload',
        component: UploadComponent
    }
];
