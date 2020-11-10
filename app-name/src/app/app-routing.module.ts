import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './shared/components';
import { AuthGuardService } from './shared/services';
import {
  DxDataGridModule, DxFormModule, DxButtonModule, DxPieChartModule, DxChartModule,
  DxButtonGroupModule, DxTooltipModule, DxTemplateModule, DxFileUploaderModule, DxTabPanelModule
} from 'devextreme-angular';
import {
  HomeComponent, DisplayDataComponent,
  ProfileComponent
} from './pages';

const routes: Routes = [
  {
    path: 'saleDash',
    loadChildren: () => import('./pages/sales-dashboard/sales-dashboard.module').then(m => m.SalesDashboardModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'sales/BuyLead',
    loadChildren: () => import('./pages/buyleads/buyleads.module').then(m => m.BuyleadsModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'sales/SellLead',
    loadChildren: () => import('./pages/sell-leads/sell-leads.module').then(m => m.SellLeadsModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'sales/Individual',
    loadChildren: () => import('./pages/individual/individual.module').then(m => m.IndividualModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'sales/fregister',
    loadChildren: () => import('./pages/calls/calls.module').then(m => m.CallsModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'sales/tregister',
    loadChildren: () => import('./pages/calltrader/calltrader.module').then(m => m.CallTraderModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'sales/Business',
    loadChildren: () => import('./pages/business/business.module').then(m => m.BusinessModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'empDash',
    loadChildren: () => import('./pages/employee-dashboard/employee-dashboard.module').then(m => m.EmployeeDashboardModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'display-data',
    component: DisplayDataComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'login-form',
    component: LoginFormComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'hrDash',
    loadChildren: () => import('./pages/hr-dashboard/hr-dashboard.module').then(m => m.HrDashboardModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'hr/role',
    loadChildren: () => import('./pages/role/role.module').then(m => m.RoleModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'hr/employee',
    loadChildren: () => import('./pages/hrform/hrform.module').then(m => m.HrFormModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'hr/department',
    loadChildren: () => import('./pages/department/department.module').then(m => m.DepartmentModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'emp/leave',
    loadChildren: () => import('./pages/leave/leave.module').then(m => m.LeaveModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'SupDash',
    loadChildren: () => import('./pages/support-dashboard/support-dashboard.module').then(m => m.SupportDashboardModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'sup/newTicket',
    loadChildren: () => import('./pages/gen-tick-frm/gen-tick-frm.module').then(m => m.GenTickFrmModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'sup/penTickets',
    loadChildren: () => import('./pages/pendingtickets/pendingtickets.module').then(m => m.PendingticketModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'sup/cloTickets',
    loadChildren: () => import('./pages/closedticket/closedticket.module').then(m => m.ClosedticketModule),
    canActivate: [AuthGuardService]
  },
  {
    path: '**',
    redirectTo: 'home',
    canActivate: [AuthGuardService]
  }, ];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true }), DxDataGridModule, DxFormModule, DxButtonModule,
      DxPieChartModule, DxChartModule, DxButtonGroupModule, DxTooltipModule, DxTemplateModule,
      DxDataGridModule, DxFileUploaderModule, DxTabPanelModule],
    providers: [AuthGuardService],
    exports: [RouterModule],
    declarations: [HomeComponent, ProfileComponent, DisplayDataComponent]
  })
export class AppRoutingModule { }
