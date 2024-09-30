import { HttpInterceptorFn } from '@angular/common/http';

/**
 * Adds Authorization header with Bearer token from local storage if it exists
 * Otherwise, returns the original request
 * @param req The original request
 * @param next The next interceptor in the chain
 */
export const httpcofigInterceptor: HttpInterceptorFn = (req, next) => {

  const token = localStorage.getItem('token')
  if(token){
    let reqClone = req.clone({
      setHeaders: {
        'Authorization': 'Bearer ' + token,
      }
    })
    return next(reqClone);
  }
  return next(req);
};


