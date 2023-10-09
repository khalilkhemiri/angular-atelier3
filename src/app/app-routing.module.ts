import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainInvoiceComponentComponent } from './main-invoice-component/main-invoice-component.component';
import { HeaderComponent } from './header/header.component';
import { InvoiceComponentComponent } from './invoice-component/invoice-component.component';

const routes: Routes = [
  { path: '', redirectTo: '/header', pathMatch: 'full' },
  { path: 'main-invoice', component: MainInvoiceComponentComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'invoice', component: InvoiceComponentComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
