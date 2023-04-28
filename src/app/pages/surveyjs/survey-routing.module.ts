import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurveyComponent } from './survey.component';
import { SurveyCreatorComponent } from './survey-creator/survey-creator.component';

const routes: Routes = [
    {
        path: '',
        component: SurveyComponent,
        children: [
            {
                path: 'create',
                component: SurveyCreatorComponent,
            }
        ]
    }
];

@NgModule({
    imports: [
      RouterModule.forChild(routes),
    ],
    exports: [
      RouterModule,
    ],
  })
  export class SurveyRoutingModule {
  }