import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products:any;
  constructor(private service : ProductService) { }

  ngOnInit() {
    this.service.select().subscribe((result)=>
    {
      this.products=result;
    })
  }

}
