import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

    productData: any;

    constructor(
      private apiService:ApiService
  ) { }

    ngOnInit(): void {
      
        this.fetchApiData();
    }
    
    fetchApiData() {

        this.apiService.getProductData().subscribe(response => {

            if (response) {
                this.productData = response?.products;
            }

        });;
    }

}
