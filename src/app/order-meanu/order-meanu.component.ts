import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-meanu',
  templateUrl: './order-meanu.component.html',
  styleUrls: ['./order-meanu.component.css']
})
export class OrderMeanuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  show_name: boolean = true;
  menu_name = "鱼香肉丝"

  slected_name = '你选择了 +{this.menu_name}';

}
