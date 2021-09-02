import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BpmnComponent } from './bpmn/bpmn.component';

const routes: Routes = [
  { path: 'bpmn', component: BpmnComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
