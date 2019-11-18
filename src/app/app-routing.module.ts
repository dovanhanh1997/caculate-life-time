import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {buildServePath} from '@angular-devkit/build-angular/src/dev-server';
import {LifeDayComponent} from './life-day/life-day.component';


const routes: Routes = [
  {path: 'timelines', component: LifeDayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
