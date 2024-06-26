import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent},
    { path: "Christ'sLoveIsBest", component: AdminDashboardComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];
