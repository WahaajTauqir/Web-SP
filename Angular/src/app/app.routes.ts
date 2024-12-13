import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlayComponent } from './play/play.component';
import { GamePlayScreenComponent } from './game-play-screen/game-play-screen.component';
import { ProfileComponent } from './profile/profile.component';
import { UploadComponent } from './upload/upload.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo: 'home',
        pathMatch: 'full'
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
        component: GamePlayScreenComponent
    },
    {
        path: 'profile',
        component: ProfileComponent
    },
    {
        path: 'login-signup',
        component: ProfileComponent
    },
    {
        path: 'upload',
        component: UploadComponent
    }
];
