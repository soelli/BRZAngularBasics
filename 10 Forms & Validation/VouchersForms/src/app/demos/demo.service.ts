import { HttpClient } from "@angular/common/http";
// import * as url from 'url';
import { DemoItem } from "./demoItem";
import { Injectable } from "@angular/core";

// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';

@Injectable()
export class DemoService {
  private items: DemoItem[];

  constructor(private http: HttpClient) {}

  getItems(): Promise<any> {
    return this.http.get("/assets/demos.json").toPromise();
  }
}
