import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [

    {path:'',component:HomeComponent, title:'home'},
    {path:'about',component:AboutComponent,title:'about'},
    {path:'portfolio',component:PortfolioComponent,title:'portfolio'},
    {path:'contact',component:ContactComponent,title:'contact'},
    {path:'**',component:NotFoundComponent,title:'404'}
    
];
