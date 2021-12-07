import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanonicalComponent } from './canonical/canonical.component';
import { FirstTransformationComponent } from './first-transformation/first-transformation.component';
import { SecondTransformationComponent } from './second-transformation/second-transformation.component';
import { ThirdTransformationComponent } from './third-transformation/third-transformation.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'canocal' },
    { path: 'canocal', component: CanonicalComponent },
    { path: 'first-transformation', component: FirstTransformationComponent },
    { path: 'second-transformation', component: SecondTransformationComponent },
    { path: 'third-transformation', component: ThirdTransformationComponent },
    { path: '**', redirectTo: 'canocal' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
