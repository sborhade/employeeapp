import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: 'employee', redirectTo: 'employee/index', pathMatch: 'full' },
  { path: 'employee/index', component: IndexComponent },
  { path: 'employee/view/:id', component: ViewComponent },
  { path: 'employee/create', component: CreateComponent },
  { path: 'employee/edit/:id', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
