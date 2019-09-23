import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
    newProduct: any;
    constructor(
        private _httpService: HttpService,
        private _route: ActivatedRoute,
        private _router: Router
    ) { }
    ngOnInit() {
        this.getProduct();
    }
    getProduct() {
        this._route.params.subscribe((params: Params) => {
            console.log(params['id']);
            let observable = this._httpService.getProduct(params['id']);
            observable.subscribe(data => {
                this.newProduct = data;
            });
        });
    }
    editProduct() {
        let observable = this._httpService.editProduct(this.newProduct);
        observable.subscribe(data => {
            console.log(data);
            this._router.navigate(['/productList']);
        });
    }
}
