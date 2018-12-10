import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class CategoryComponent implements OnInit {
  public menuLeft : any [] = [
    {
      title : "Tất cả sản phẩm"
    },
    {
      title : "Ngành thủy sản"
    },
    {
      title : "Ngành chăn nuôi"
    },
    {
      title : "Ngành trồng trọt"
    },
    {
      title : "Môi trường"
    },
  ]

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
