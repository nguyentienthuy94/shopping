import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit {
  public listProvide : any [] = [
    {
      name: "Thái Bình"
    },
    {
      name: "Hà Nội"
    },
    {
      name: "Ninh Bình"
    },
    {
      name: "Hải Phòng"
    },
  ];
  public listDistrict : any [] = [
    {
      name: 'Quận Hoàng Mai'
    },
    {
      name: 'Quận Nam Từ Liêm'
    },
    {
      name: 'Quận Hai Bà Trưng'
    },
    {
      name: 'Quận Tây Hồ'
    },
  ];
  public listWards : any [] = [
    {
      name: 'Phường Phú Đô'
    },
    {
      name: 'Phường Trần Lãm'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
