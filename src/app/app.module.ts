import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import {MatGridListModule} from "@angular/material/grid-list";
import { FormsModule } from '@angular/forms';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CustomerSearchComponent } from './customer-search/customer-search.component';
import { routes } from './app-routing.module';

@NgModule({
	declarations: [
		AppComponent,
		CustomerSearchComponent
	],
	imports: [
		RouterModule.forRoot(routes),
		HttpClientModule,
		BrowserModule,
		MatToolbarModule,
		MatFormFieldModule,
		MatInputModule,
		MatSelectModule,
		MatButtonModule,
		MatTableModule,
		MatIconModule,
		MatGridListModule,
		FormsModule
	],
	providers: [provideAnimations()],
	bootstrap: [AppComponent]
})
export class AppModule { }
