import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestBuzzerComponent } from './test-buzzer/test-buzzer.component';
import { ShapeCounterComponent } from './shape-counter/shape-counter.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'test-buzzer',
    pathMatch: 'full'
  },
  {
    path: 'test-buzzer',
    component: TestBuzzerComponent
  },
  {
    path: 'shape-counter',
    component: ShapeCounterComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
