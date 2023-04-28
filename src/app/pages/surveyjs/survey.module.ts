import { NgModule } from '@angular/core';
import { SurveyComponent } from './survey.component';
import { SurveyRoutingModule } from './survey-routing.module';
import { SurveyCreatorComponent } from './survey-creator/survey-creator.component';
import { SurveyCreatorModule } from 'survey-creator-angular';
import { SurveyModule as SurveyLibraryModule} from "survey-angular-ui";

@NgModule({
    imports: [
        SurveyRoutingModule,
        SurveyLibraryModule,
        SurveyCreatorModule
    ],
    declarations: [
        SurveyComponent,
        SurveyCreatorComponent
    ]
})
export class SurveyModule { }
