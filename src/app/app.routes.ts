
import { Routes} from '@angular/router';
export const routes: Routes = [
    {
      path: '',
      loadChildren: 'app/registration/registration.module#RegistrationModule'
    },
   
];
