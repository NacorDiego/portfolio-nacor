import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { StackComponent } from './components/stack/stack.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
    { path:'', redirectTo:'/home', pathMatch: 'full' },
    { path:'/home', component:HomeComponent },
    { path:'/about', component:AboutComponent },
    { path:'/projects', component:ProjectsComponent },
    { path:'/stack', component:StackComponent },
    { path:'contact', component:ContactComponent }
];
