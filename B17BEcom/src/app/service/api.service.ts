import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getProduct() {
    return this.http.get<any>("https://fakestoreapi.com/products")
      .pipe(map((res: any) => {
        return res;
      }))
  }

  // public url="https://bookcart.azurwebsites.net/api/Book"
  //  getTotalBooks(){
  //    return this.http.get(this.url);
  //  }

  //  bookDetails(id:any){
  //    return this.http.get( `${this.url}/${id}`)
  //  }

}

