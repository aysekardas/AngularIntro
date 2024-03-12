import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // req'i değiştirme
  // req.headers.append("X", "Y");
  // req.headers.append('Authorization', 'Bearer myjwt');
  // read-only
  //request içinde değişiklik yapabilmek için onu klonlamak ve klonlanan veri üzerinde çalışmak gerekir.
  console.log('AuthInterceptor');
  let newRequest = req.clone({ setHeaders: { Authorization: 'Bearer myjwt' } });

  return next(newRequest);
};