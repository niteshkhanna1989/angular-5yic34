import { Injectable } from "@angular/core";
import { Observable, of, Subject } from "rxjs";
import { map, startWith, withLatestFrom } from "rxjs/operators";
import { Product, PRODUCTS_LIST } from "../models/product";

@Injectable({
  providedIn: 'root',
})
export class ProductsService {

  private originalProductsList$ = of(PRODUCTS_LIST);

  private searchKeywordSub$: Subject<string> = new Subject<string>();

  public products$ = this.searchKeywordSub$.asObservable().pipe(startWith(''), withLatestFrom(this.originalProductsList$), map(([searchKeyword, allProducts]) => this.filterProductList(searchKeyword, allProducts)))

  public getProducts(): Observable<Product[]> {
    return this.originalProductsList$;
  }

  public searchProduct(searchText: string = ''): void {
    this.searchKeywordSub$.next(searchText);
  }

  private filterProductList(searchText: string, products: Product[]): Product[] {
    return products.filter(product => {
      if (searchText.includes('discount')) {
        return product.isDiscounted;
      } else if (product.category.includes(searchText) || product.name.includes(searchText) || product?.color?.includes(searchText) || product?.cost.toString()?.includes(searchText)) {
        return true;
      }
      return false;
    })
  }
}