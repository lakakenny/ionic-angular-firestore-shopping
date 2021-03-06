import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'inventory',
        children: [
          {
            path: '',
            loadChildren:
              '../pages/inventory/inventory.module#InventoryPageModule'
          },
          {
            path: 'inventory-add',
            loadChildren:
              '../pages/inventory-add/inventory-add.module#InventoryAddPageModule'
          },
          {
            path: 'inventory-add/:inShoppingList',
            loadChildren:
              '../pages/inventory-add/inventory-add.module#InventoryAddPageModule'
          }
        ]
      },
      {
        path: 'shopping-list',
        children: [
          {
            path: '',
            loadChildren:
              '../pages/shopping-list/shopping-list.module#ShoppingListPageModule'
          },
          {
            path: 'shopping-list-add',
            loadChildren:
              '../pages/shopping-list-add/shopping-list-add.module#ShoppingListAddPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/shopping-list',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/inventory',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
