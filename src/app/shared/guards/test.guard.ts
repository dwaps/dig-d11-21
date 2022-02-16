import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { AdminComponent } from 'src/app/components/admin/admin.component';

export interface IisDirty {
  isDirty(): Promise<boolean>|boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TestGuard implements CanDeactivate<IisDirty> {

  canDeactivate(component: AdminComponent) {
    return component.isDirty();
  }

}
