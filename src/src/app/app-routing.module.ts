import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpensesListComponent } from './components/expenses-list/expenses-list.component';
import { ExpensesFormComponent } from './components/expenses-form/expenses-form.component';


const routes: Routes = [
  { path: '', component: ExpensesListComponent },
  { path: 'new', component: ExpensesFormComponent },
  { path: 'edit/:key', component: ExpensesFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
