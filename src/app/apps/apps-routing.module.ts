import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'items', loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule) },
  { path: 'security/user', loadChildren: () => import('./security/user/user.module').then(m => m.UserModule) },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppsRoutingModule { }
