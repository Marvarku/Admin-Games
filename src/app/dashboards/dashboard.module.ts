import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ChartsModule } from "ng2-charts";
import { ChartistModule } from "ng-chartist";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { CalendarModule, DateAdapter } from "angular-calendar";

import { adapterFactory } from "angular-calendar/date-adapters/date-fns";
import { DashboardRoutes } from "./dashboard.routing";

import { Dashboard1Component } from "./dashboard1/dashboard1.component";
import { NgApexchartsModule } from "ng-apexcharts";

import {
  ActivitypagesComponent,
  CamStatsComponent,
  CamoverComponent,
  ConversionEarningsComponent,
  DeviceSalesComponent,
  EarningsComponent,
  EcomSalesComponent,
  EcomorderComponent,
  EcomproductComponent,
  EcomReviewComponent,
  StatsComponent,
  EmailComponent,
  Emailcompaign2Component,
  FeedsComponent,
  InfocardComponent,
  MixstatsComponent,
  ProfileactivityComponent,
  ProjectComponent,
  Project2Component,
  RealdataComponent,
  RealtimevisitComponent,
  RevenueviewsComponent,
  SalesComponent,
  TopsellComponent,
  UserprofileComponent,
} from "./dashboard-components";
import { GamesDataComponent } from './dashboard1/games-data/games-data.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    NgbModule,
    ChartsModule,
    ChartistModule,
    RouterModule.forChild(DashboardRoutes),
    PerfectScrollbarModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    NgxChartsModule,
    NgApexchartsModule,
    NgxDatatableModule,

  ],
  declarations: [
    Dashboard1Component,
    ActivitypagesComponent,
    CamStatsComponent,
    CamoverComponent,
    ConversionEarningsComponent,
    DeviceSalesComponent,
    EarningsComponent,
    EcomSalesComponent,
    EcomorderComponent,
    EcomproductComponent,
    EcomReviewComponent,
    StatsComponent,
    EmailComponent,
    Emailcompaign2Component,
    FeedsComponent,
    InfocardComponent,
    MixstatsComponent,
    ProfileactivityComponent,
    ProjectComponent,
    Project2Component,
    RealdataComponent,
    RealtimevisitComponent,
    RevenueviewsComponent,
    SalesComponent,
    TopsellComponent,
    UserprofileComponent,
    GamesDataComponent,
  ],
})
export class DashboardModule { }
