import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { CreateComponent } from './components/create/create.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  {path: "", component:MainComponent},
  {path: "create", component: CreateComponent},
  {path: "search", component: SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
