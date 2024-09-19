import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrazioneComponent } from './components/registrazione/registrazione.component';

const routes: Routes = [
  { path: "registrazione", component: RegistrazioneComponent },
  { path: "", redirectTo: "/registrazione", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
