import { Injectable } from "@angular/core";

@Injectable()
export class ShoppingService {
  constructor() {}

  getItems() {
    let items = [
      { Id: 1, name: "wurst", price: 12 },
      { Id: 2, name: "brot", price: 4 }
    ];

    return items;
  }
}
