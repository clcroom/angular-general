import {NgModule} from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { HomeComponent } from './home/home.component';
import { StaffComponent } from './staff/staff.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "calendar", component: CalendarComponent},
  {path: "staff", component: StaffComponent},

  {path: "**", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
