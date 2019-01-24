import { Component, OnInit, OnDestroy } from "@angular/core";
import { CurrencyService } from "./currency.service";
import { RateInfo } from "./RateInfo";
import { Subscription } from "rxjs";

@Component({
  selector: "app-currency",
  templateUrl: "./currency.component.html",
  styleUrls: ["./currency.component.css"]
})
export class CurrencyComponent implements OnInit, OnDestroy {
  constructor(private cs: CurrencyService) {}

  ri: RateInfo;
  riSub: Subscription;

  ngOnInit() {
    this.riSub = this.cs.getCurrencyRates().subscribe(data => {
      this.ri = data;
    });
  }

  ngOnDestroy(): void {
    this.riSub.unsubscribe();
  }
}
