import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { StackComponent } from './components/stack/stack.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
    { path:'', redirectTo:'/inicio', pathMatch: 'full' },
    { path:'inicio', component:HomeComponent },
    { path:'sobremi', component:AboutComponent },
    { path:'projectos', component:ProjectsComponent },
    { path:'tecnologías', component:StackComponent },
    { path:'contacto', component:ContactComponent }
];
