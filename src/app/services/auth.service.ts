import { Injectable } from '@angular/core';
import { from, of } from 'rxjs';
import { CoreService } from './core.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private api: CoreService) { }


/**
 * API URL used https://dummyjson.com
 * You can use following Username and password for testing purpose:
 * Username: emilys
 * Password: emilyspass
 */


  /**
   * Checks if the user is authenticated by looking for the token in local storage
   * @returns {string | null} - the token if it exists, null otherwise
   */
checkAuthentication() {
  const token = localStorage.getItem('token');
  return token;
}

/**
 * Remove the token and name from local storage
 *
 * @returns {Observable<string>} - an observable that resolves to 'true'
 */
clearStorage() {
  localStorage.removeItem('token');
  localStorage.removeItem('name');
  return of('true')
}

/**
 * Logs in with the given username and password and returns an observable that resolves to
 * an object containing the token and user name.
 *
 * @param {string} username - username to log in with
 * @param {string} password - password to log in with
 * @returns {Observable<{token: string, firstName: string}>}
 */
login(username='',password=''){
  let body = {
    username : username,
    password : password
  }
  return this.api.post('https://dummyjson.com/auth/login',body)
}


  /**
   * Gets all the posts
   *
   * @returns {Observable<any>}
   */
getPost(){
  return this.api.get('https://dummyjson.com/posts')
}

  /**
   * Adds a new post to the dummy json api
   *
   * @param {any} body - the post to add
   * @returns {Observable<any>} - an observable that resolves to the newly created post
   */
addPost(body:any){
  return this.api.post('https://dummyjson.com/posts/add',body)
}

  /**
   * Updates a post on the dummy json api
   *
   * @param {number} id - the id of the post to update

   * @param {any} body - the updated post
   * @returns {Observable<any>} - an observable that resolves to the updated post
   */
updatePost(id:number,body:any){
  return this.api.update(`https://dummyjson.com/posts/${id}`,body)
}

  /**
   * Deletes a post from the dummy json api
   *
   * @param {number} id - the id of the post to delete
   * @returns {Observable<any>} - an observable that resolves to the deleted post
   */

deletePost(id:number){
  return this.api.delete(`https://dummyjson.com/posts/${id}`)
}

}
