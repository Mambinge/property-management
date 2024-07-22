import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewEnquiryComponent } from './pages/view-enquiry/view-enquiry.component';
import { EnquiresListComponent } from './pages/enquires-list/enquires-list.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent }, 
  { path: 'enquiries', component: EnquiresListComponent }, 
  { path: 'enquiries/:id', component: ViewEnquiryComponent } 
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
