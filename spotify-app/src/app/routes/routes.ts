import { Routes, RouterModule} from "@angular/router"
import { HomeComponent } from "../components/home/home.component"
import { ArtistComponent } from "../components/artist/artist.component"
import { SearchComponent } from "../components/search/search.component"

const ROUTES : Routes= [
    {path: "home", component: HomeComponent},
    {path: "artist/:id", component: ArtistComponent},
    {path: "search", component: SearchComponent},
    {path:"", pathMatch:"full", redirectTo: "home"},
    {path:"**", pathMatch:"full", redirectTo: "home"}
]

export const ROUTES_APP = RouterModule.forRoot(ROUTES);