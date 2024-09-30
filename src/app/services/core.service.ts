import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor(private http: HttpClient) { }


  /**
   * GET request to the given URL.
   * @param url URL of the request.
   * @returns Observable containing the response from the request.
   */
  get(url:string):Observable<any>{
    return this.http.get(url);
  }

  /**
   * POST request to the given URL.
   * @param url URL of the request.
   * @param body Body of the request.
   * @returns Observable containing the response from the request.
   */
  post(url:string,body:any):Observable<any>{
    return this.http.post(url,body);
  }

  /**
   * PUT request to the given URL.
   * @param url URL of the request.
   * @param body Body of the request.
   * @returns Observable containing the response from the request.
   */
  update(url:string,body:any):Observable<any>{
    return this.http.put(url,body);
  }

  /**
   * DELETE request to the given URL.
   * @param url URL of the request.
   * @returns Observable containing the response from the request.
   */
  delete(url:string):Observable<any>{
    return this.http.delete(url);
  }

}
