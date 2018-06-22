
import { Routes} from '@angular/Router';
export const routes: Routes = [
    {
      path: '',
      loadChildren: 'app/registration/registration.module#RegistrationModule'
    },
    {
      path: 'admin',
      loadChildren: 'app/registration/registration.module#RegistrationModule'
    }
];
