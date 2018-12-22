import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TestcomponentComponent } from '../../components/sandbox/testcomponent/testcomponent.component';
import { HomeTestComponent } from '../../components/sandbox/home-test/home-test.component';
import { DisplayComponent } from '../../components/MainPageDisplay/display/display.component';
import { DisplaycontainerComponent } from '../../components/MainPageDisplay/displaycontainer/displaycontainer.component';

const routes: Routes = [
  // { path: 'test', component: TestcomponentComponent },
  // { path: 'hometest', component: HomeTestComponent },
  { path: '', component: DisplaycontainerComponent }
];

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRouterModule {}
