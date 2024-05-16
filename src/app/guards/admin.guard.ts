import { CanActivateFn } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
  
  if(localStorage.getItem('token') =='false'){
    
  }else{
    return false;
  }
  return true;

};
