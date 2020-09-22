import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularComponent } from './angular/angular.component';
import { DataStructureComponent } from './data-structure/data-structure.component';
import { HomeComponent } from './home/home.component';
import { JavaCoreComponent } from './java-core/java-core.component';
import { PostgresComponent } from './postgres/postgres.component';
import { SpringBootComponent } from './spring-boot/spring-boot.component';
import { LinuxCommandComponent } from './linux-command/linux-command.component';
import { BasicLinuxCommandsComponent } from './linux-command/basic-linux-commands/basic-linux-commands.component';
import { AngularDeploymentOnTomcatComponent } from './linux-command/angular-deployment-on-tomcat/angular-deployment-on-tomcat.component';
import { AngularDeploymentOnNginxComponent } from './linux-command/angular-deployment-on-nginx/angular-deployment-on-nginx.component';
import { SpringBootDeploymentOnTomcatComponent } from './linux-command/spring-boot-deployment-on-tomcat/spring-boot-deployment-on-tomcat.component';
import { NotebooksComponent } from './notebooks/notebooks.component';
import { ArrayComponent } from './data-structure/array/array.component';

const routes: Routes = [
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'angular', component: AngularComponent },
  { path: 'data-structure', component: DataStructureComponent },
  { path: 'data-structure/array', component: ArrayComponent },
  { path: 'java-core', component: JavaCoreComponent },
  { path: 'postgres', component: PostgresComponent },
  { path: 'notebooks', component: NotebooksComponent },
  { path: 'linux-commands', component: LinuxCommandComponent},
  { path: 'linux-commands/basic-linux-commands', component: BasicLinuxCommandsComponent},
  { path: 'linux-commands/angular-deployment-on-tomcat', component: AngularDeploymentOnTomcatComponent},
  { path: 'linux-commands/angular-deployment-on-nginx', component: AngularDeploymentOnNginxComponent},
  { path: 'linux-commands/spring-boot-deployment-on-tomcat', component: SpringBootDeploymentOnTomcatComponent},
  { path: 'spring-boot', component: SpringBootComponent },
  { path: '**', component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', initialNavigation: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [
  HomeComponent, AngularComponent, DataStructureComponent,
  JavaCoreComponent, PostgresComponent, SpringBootComponent,
  LinuxCommandComponent, BasicLinuxCommandsComponent,
  AngularDeploymentOnTomcatComponent, AngularDeploymentOnNginxComponent,
  SpringBootDeploymentOnTomcatComponent, NotebooksComponent, ArrayComponent

];
