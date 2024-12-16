import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{

  constructor(private api: ApiService){}

  ngOnInit(): void {
    this.api.getProducts().subscribe((product)=> {
      console.log(product)
    })
    
  }

}
