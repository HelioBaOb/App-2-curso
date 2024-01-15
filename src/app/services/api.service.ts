import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category, IProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseURL = 'https://fakestoreapi.com/products';

  constructor(private _httpClient: HttpClient /*Las inyecciones se escriben con guion bajo */) { }
  
  public getAllProducts(sort: string): Observable<IProduct[]>{ //Devuelve observable de productos
    const params = sort ? `/?sort=${sort}` : '';
    return this._httpClient.get<IProduct[]>(`${this.baseURL}${params}`);
  }

  public getProductById(id: number): Observable<IProduct>{ //Devuelve observable de un producto
    return this._httpClient.get<IProduct>(`${this.baseURL}/${id}`);
  }

  public getAllCategories(): Observable<Category[]>{ //Devuelve observable de las categorias
    return this._httpClient.get<Category[]>(`${this.baseURL}/categories`);
  }

  public newProduct(product: IProduct): Observable<IProduct>{ //Agrega un producto
    return this._httpClient.post<IProduct>(`${this.baseURL}`, product);
  }

  public updateProduct(id: number, product: IProduct): Observable<IProduct>{ //Actualiza un producto
    return this._httpClient.put<IProduct>(`${this.baseURL}/${id}`, product);
  }

  public deleteProduct(id: number): Observable<IProduct>{ //Elimina un producto
    return this._httpClient.delete<IProduct>(`${this.baseURL}/${id}`);
  }

}
