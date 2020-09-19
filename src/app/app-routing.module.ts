import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularComponent } from './angular/angular.component';
import { DataStructureComponent } from './data-structure/data-structure.component';
import { HomeComponent } from './home/home.component';
import { JavaCoreComponent } from './java-core/java-core.component';
import { PostgresComponent } from './postgres/postgres.component';
import { SpringBootComponent } from './spring-boot/spring-boot.component';

const routes: Routes = [
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'angular', component: AngularComponent },
  { path: 'data-structure', component: DataStructureComponent },
  { path: 'java-core', component: JavaCoreComponent },
  { path: 'postgres', component: PostgresComponent },
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
  JavaCoreComponent, PostgresComponent, SpringBootComponent
];
