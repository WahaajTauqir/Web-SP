import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FaqComponent } from './faq/faq.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PlayComponent } from './play/play.component';
import { NewsWireComponent } from './news-wire/news-wire.component';
import { GamePlayScreenComponent } from './game-play-screen/game-play-screen.component';

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
        path: 'faq',
        component: FaqComponent
    },
    {
        path: 'about-us',
        component: AboutUsComponent
    },
    {
        path: 'play',
        component: PlayComponent
    },
    {
        path: 'news-wire',
        component: NewsWireComponent
    },
    {
        path: 'game-play-screen',
        component: GamePlayScreenComponent
    }
];
