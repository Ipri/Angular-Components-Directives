import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanonicalComponent } from './canonical/canonical.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'canocal' },
    { path: 'canocal', component: CanonicalComponent },
    { path: '**', redirectTo: 'canocal' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
