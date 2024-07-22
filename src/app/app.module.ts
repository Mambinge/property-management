import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { CardComponent } from './layout/card/card.component';
import { EnquiresListComponent } from './pages/enquires-list/enquires-list.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { ViewEnquiryComponent } from './pages/view-enquiry/view-enquiry.component';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { BaseChartDirective } from 'ng2-charts';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    NavbarComponent,
    CardComponent,
    EnquiresListComponent,
    ViewEnquiryComponent,
  ],
  imports: [ BrowserModule, AppRoutingModule, HttpClientModule,BaseChartDirective
  ],
  providers: [provideCharts(withDefaultRegisterables()),provideClientHydration(),
    { provide: HttpClient, useClass: HttpClient }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
