import { Component } from '@angular/core';
import { CustomerSearchPOJO } from 'src/app/models/customerserachpojo.model';
import { MaarisService } from 'src/app/services/maaris.service';

@Component({
  selector: 'app-customer-search',
  templateUrl: './customer-search.component.html',
  styleUrls: ['./customer-search.component.css']
})

export class CustomerSearchComponent {
	customersearchpojos: CustomerSearchPOJO[]=[];
	
	customerSearchPOJO: CustomerSearchPOJO = {
		name: '',
		vorname: '',
		nachName:''

	};
	submitted = false;
	datalength=0;
	
	displayedColumns : any[] = [];
	suppliers = [
		{ id: '1', name: 'Supplier A', status: 'Active', compliance: 'Compliant', accommodationId: '123' },
		{ id: '2', name: 'Supplier B', status: 'Inactive', compliance: 'Non-Compliant', accommodationId: '456' },
		// Add more supplier data here
	];

	constructor(private maarisService: MaarisService) { }
	getCustomerSerachDetails(customerserachpojo:any): void {
		console.log(customerserachpojo.name);
		this.maarisService.getAll(customerserachpojo.name,customerserachpojo.vorname).subscribe({
			next: (data) => {
				this.customersearchpojos = data;
				console.log(this.customersearchpojos);
				console.log(this.customersearchpojos.length);
				this.submitted=true;
				this.datalength=this.customersearchpojos.length;
				
				
			},
			error: (e) => console.error(e)
		});
	}
	goBack() {
		// Implement search logic here
	}

	resetFilters() {
		// Implement reset logic here

	}

}
