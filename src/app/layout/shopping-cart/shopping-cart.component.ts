import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ShoppingCartComponent implements OnInit {
  public fakeProduct : any [] = [
    {
      name : "BiOWISH Aquafarm",
      img: "assets/images/biowish-3ps-label.jpg",
      description : "Sản phẩm xử lý môi trường nước được hòa",
      price: "220.000 vnđ/bao"
    },
    {
      name : "BiOWISH MultiBio 3PS Aquaculture",
      img: "assets/images/biowish-3ps-label.jpg",
      description : "Bổ sung hệ vi sinh vật có lợi cho hệ tiêu...",
      price: "170.000 vnđ/bao"
    },
    {
      name : "BiOWISH MultiBio 3PS Livestock",
      img: "assets/images/biowish-3ps-label.jpg",
      description : "Sản phẩm xử lý môi trường nước được hòa...",
      price: "140.000 vnđ/bao"
    },
    {
      name : "BiOWISH Crop 16-40-0",
      img: "assets/images/biowish-3ps-label.jpg",
      description : "Sản phẩm xử lý môi trường nước được hòa...",
      price: "170.000 vnđ/bao"
    },
    {
      name : "BiOWISH Menure & Odor",
      img: "assets/images/biowish-3ps-label.jpg",
      description : "Sản phẩm xử lý môi trường nước được hòa...",
      price: "2.000.000 vnđ/bao"
    },
    {
      name : "BiOWISH MultiBio 3P",
      img: "assets/images/biowish-3ps-label.jpg",
      description : "Sản phẩm xử lý môi trường nước được hòa...",
      price: "230.000 vnđ/bao"
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
