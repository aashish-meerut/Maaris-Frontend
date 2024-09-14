import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerSearchComponent } from './customer-search/customer-search.component';
export const routes: Routes = [
	{ path: 'add', component: CustomerSearchComponent }
];

@NgModule({
	imports: [
		RouterModule,
		RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
