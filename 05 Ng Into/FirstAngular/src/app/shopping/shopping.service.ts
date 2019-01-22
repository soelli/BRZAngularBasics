import { Injectable } from "@angular/core";

@Injectable()
export class ShoppingService {
  constructor() {}

  getItems() {
    let items = [{ name: "wurst", price: 12 }, { name: "brot", price: 4 }];

    return items;
  }
}
