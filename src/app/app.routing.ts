import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestBuzzerComponent } from './test-buzzer/test-buzzer.component';
import { ShapeCounterComponent } from './shape-counter/shape-counter.component';
import { ReactionComponent } from "./reaction/reaction.component";

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'shape-counter',
    pathMatch: 'full'
  },
  {
    path: 'test-buzzer',
    component: TestBuzzerComponent
  },
  {
    path: 'shape-counter',
    component: ShapeCounterComponent
  },
  {
    path: 'reaction',
    component: ReactionComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
