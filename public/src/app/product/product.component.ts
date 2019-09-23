import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router, Event, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
    products: any;
    constructor(
        private _httpService: HttpService,
        private _router: Router,
        private _route: ActivatedRoute
    ) {}
    ngOnInit() {
        this._router.events.subscribe(
            (event: Event) => {
                if (event instanceof NavigationEnd) {
                    this.getProducts();
                }
            }
        )
        this.getProducts();
    }

    getProducts() {
        console.log("getting products");
        let observable = this._httpService.getProducts();
        observable.subscribe(data => {
            console.log(data);
            this.products = data;
        });
    }
    delete(id) {
        let observable = this._httpService.deleteProduct(id);
        observable.subscribe(data => {
            console.log(data);
            this.getProducts();
        });
    }
}
