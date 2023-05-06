import { NgModule } from '@angular/core';
import { SurveyComponent } from './survey.component';
import { SurveyRoutingModule } from './survey-routing.module';
import { SurveyCreatorComponent } from './survey-creator/survey-creator.component';
import { SurveyCreatorModule } from 'survey-creator-angular';
import { SurveyModule as SurveyLibraryModule} from "survey-angular-ui";
import { SurveyListComponent } from './survey-list/survey-list.component';
import { SurveyFormComponent } from './survey-form/survey-form.component';

@NgModule({
    imports: [
        SurveyRoutingModule,
        SurveyLibraryModule,
        SurveyCreatorModule
    ],
    declarations: [
        SurveyComponent,
        SurveyCreatorComponent,
        SurveyListComponent,
        SurveyFormComponent
    ]
})
export class SurveyModule { }
