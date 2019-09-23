import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ProductComponent } from '../product/product.component';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-product-creation',
  templateUrl: './product-creation.component.html',
  styleUrls: ['./product-creation.component.css']
})
export class ProductCreationComponent implements OnInit {
    newProduct: any;
    constructor(
        private _httpService: HttpService,
        private _route: ActivatedRoute,
        private _router: Router,
        private _product: ProductComponent
    ) { }
    ngOnInit() {
        this.newProduct = {title: "", price: "", imageUrl: ""};
    }
    createProduct() {
        let observable = this._httpService.createProduct(this.newProduct);
        observable.subscribe(data => {
            console.log(data);
            this._product.getProducts();
            this._router.navigate(['/productList'])
        });
    }

}
