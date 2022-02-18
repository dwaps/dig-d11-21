import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { CoreModule } from '../core.module';

export interface CheckSavedInterface {
  isDirty(): boolean|Promise<boolean>;
}

@Injectable({
  providedIn: CoreModule
})
export class CheckSavedGuard implements CanDeactivate<CheckSavedInterface> {
  canDeactivate(component: CheckSavedInterface) {
    return component.isDirty();
  }

}
