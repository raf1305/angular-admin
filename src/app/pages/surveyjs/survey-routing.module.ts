import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurveyComponent } from './survey.component';
import { SurveyCreatorComponent } from './survey-creator/survey-creator.component';
import { SurveyFormComponent } from './survey-form/survey-form.component';

const routes: Routes = [
    {
        path: '',
        component: SurveyComponent,
        children: [
            {
                path: 'create',
                component: SurveyCreatorComponent,
            },
            {
              path: 'form',
              component: SurveyFormComponent,
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