import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';

const ROUTES: Routes = [
    {path:"home", component: HomeComponent},
    {path:"about", component: AboutComponent},
    {path:"heroes", component: HeroesComponent},
    {path:"heroe", component: HeroeComponent}
]

export const APP_ROUTES = RouterModule.forRoot(ROUTES);