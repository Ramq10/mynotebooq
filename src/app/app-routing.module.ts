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
import { BasicQueryComponent } from './postgres/basic-query/basic-query.component';
import { DbQuestionsComponent } from './postgres/db-questions/db-questions.component';
import { DbTopicsComponent } from './postgres/db-topics/db-topics.component';
import { ServerDbConnectionComponent } from './postgres/server-db-connection/server-db-connection.component';
import { PythonComponent } from './python/python.component';
import { PythonNotesComponent } from './python/python-notes/python-notes.component';
import { PythonQuestionsComponent } from './python/python-questions/python-questions.component';
import { PythonTutorialComponent } from './python/python-tutorial/python-tutorial.component';
import { PythonTopicsComponent } from './python/python-topics/python-topics.component';

const routes: Routes = [
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'angular', component: AngularComponent },
  { path: 'python', component: PythonComponent },
  { path: 'python/tutorial', component: PythonTutorialComponent },
  { path: 'python/notes', component: PythonNotesComponent },
  { path: 'python/questions', component: PythonQuestionsComponent },
  { path: 'python/topics', component: PythonTopicsComponent },
  { path: 'data-structure', component: DataStructureComponent },
  { path: 'data-structure/array', component: ArrayComponent },
  { path: 'java-core', component: JavaCoreComponent },
  { path: 'postgres', component: PostgresComponent },
  { path: 'postgres/basic-query', component: BasicQueryComponent },
  { path: 'postgres/db-questions', component: DbQuestionsComponent },
  { path: 'postgres/all-topics', component: DbTopicsComponent },
  { path: 'postgres/server-db-connection', component: ServerDbConnectionComponent },
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
  SpringBootDeploymentOnTomcatComponent, NotebooksComponent, ArrayComponent,
  BasicQueryComponent, DbQuestionsComponent, DbTopicsComponent, ServerDbConnectionComponent,
  PythonComponent, PythonNotesComponent, PythonQuestionsComponent, PythonTutorialComponent, PythonTopicsComponent

];
