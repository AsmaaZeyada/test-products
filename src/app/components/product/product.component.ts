import { Component, OnInit } from '@angular/core';
import { faCirclePlus, faCircleMinus } from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  plus = faCirclePlus;
  minus = faCircleMinus;
  products:any = [];


  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
      this.httpClient.get('http://localhost:8070/asmaa-zeyada/products').subscribe((res: any) => {
        this.products = res;
      });

  }

  add(i: any) {
    this.products[i].count++;


  }
  remove(i: any) {
    this.products[i].count--;

  }

}
