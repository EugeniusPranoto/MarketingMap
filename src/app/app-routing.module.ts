import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PoiListComponent } from './poi-list/poi-list.component';
import { PoiReportComponent } from './poi-report/poi-report.component';
import { NavbarTestComponent } from './navbar-test/navbar-test.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'poi-list', component: PoiListComponent },
  { path: 'home', component: HomeComponent },
  { path: 'poi-report', component: PoiReportComponent },
  { path: 'navbar-test', component: NavbarTestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


