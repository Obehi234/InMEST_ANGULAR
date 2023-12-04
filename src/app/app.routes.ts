import { Routes } from '@angular/router';
import { UsersComponent } from './dashboard/users/users.component';
import { UserDetailComponent } from './dashboard/user-detail/user-detail.component';
// import { NewUserComponent } from './dashboard/new-user/new-user.component';
import { AttendanceComponent } from './dashboard/attendance/attendance.component';
import { LeaveComponent } from './dashboard/leave/leave.component';
// import { LeaveDetailComponent } from './dashboard/leave-detail/leave-detail.component';
import { AnalyticsComponent } from './dashboard/analytics/analytics.component';
import { SettingsComponent } from './dashboard/settings/settings.component';
import { HomeComponent } from './dashboard/home/home.component';
// import { ItSupportComponent } from './dashboard/it-support/it-support.component';
import { AttendanceRegisterComponent } from './dashboard/attendance-register/attendance-register.component';
import { AttendanceInnerComponent } from './dashboard/attendance-inner/attendance-inner.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'users', component: UsersComponent},
    // {path: 'new-user', component: NewUserComponent},
    {path:'attendance',component:AttendanceComponent},
    {path: 'leave', component: LeaveComponent},
    // {path: 'leave/:id/:name', component: LeaveDetailComponent},
    {path: 'attendance-register', component: AttendanceRegisterComponent},
    {path:'attendance-inner/:id',component:AttendanceInnerComponent},
    {path: 'user-detail', component: UserDetailComponent},
    {path : 'analytics', component: AnalyticsComponent},
    {
        path: 'settings',
        component: SettingsComponent,
      }
//   {path: 'it-support', component: ItSupportComponent}

];