import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpotComponent } from './spot.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { ResourceNotFoundComponent } from '../resource-not-found/resource-not-found.component';

const routes: Routes = [
  { path: '', component: SpotComponent },
  {
    path: 'add', component: AddComponent
  },
  {
    path: 'edit/:id', component: EditComponent
  },
  {
    path: 'delete/:id', component: DeleteComponent
  },
  {
    path: '**', component: ResourceNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpotRoutingModule { }
