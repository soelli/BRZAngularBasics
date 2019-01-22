import { Component, OnInit } from "@angular/core";
import { ShoppingService } from "../shopping/shopping.service";
import { ShoppingItem } from "../shared/model";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"]
})
export class MainComponent implements OnInit {
  constructor(private service: ShoppingService) {}

  name: string = "Default Name";
  items: ShoppingItem[];

  ngOnInit() {
    this.items = this.service.getItems();
  }

  onClick() {
    this.name = "The super name";
  }
}
