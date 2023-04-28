import { Component, OnInit } from '@angular/core';
import { SurveyCreatorModel } from "survey-creator-core";

const creatorOptions = {
  showLogicTab: true,
  isAutoSave: true
};

@Component({
  selector: 'ngx-survey-creator',
  templateUrl: './survey-creator.component.html',
  styleUrls: ['./survey-creator.component.scss']
})
export class SurveyCreatorComponent implements OnInit {
  surveyCreatorModel: SurveyCreatorModel;

  constructor() { }

  ngOnInit(): void {
    const creator = new SurveyCreatorModel(creatorOptions);
    this.surveyCreatorModel = creator;
  }

}
