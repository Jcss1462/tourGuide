import { Routes } from '@angular/router';

import { MainLayoutComponent } from './domains/shared/layouts/main-layout/main-layout.component';
import { ProductListComponent } from './domains/product/product-list/product-list.component';


export const routes: Routes = [
    {
        path:"",
        component:MainLayoutComponent,
        children:[ 
           {
            path:"",
            component:ProductListComponent
           } 
        ]
    }
];
