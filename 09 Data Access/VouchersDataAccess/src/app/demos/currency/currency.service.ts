import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { RateInfo } from "./RateInfo";

@Injectable({
  providedIn: "root"
})
export class CurrencyService {
  //Stateful Service
  // rateInfo: RateInfo;

  constructor(private httpClient: HttpClient) {}

  getCurrencyRates() {
    let qry = `http://data.fixer.io/api/latest?access_key=${
      environment.fixerKey
    }`;

    return this.httpClient.get<RateInfo>(qry);
  }
}
