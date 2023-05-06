import { Component, OnInit } from '@angular/core';
import { SurveyCreatorModel } from "survey-creator-core";
import { ComponentCollection } from "survey-core";
import * as SurveyCore from "survey-core";
import * as widgets from "surveyjs-widgets";

widgets.microphone(SurveyCore);

const creatorOptions = {
  showLogicTab: true,
  isAutoSave: true
};

ComponentCollection.Instance.add({
  //Unique component name. It becomes a new question type. Please note, it should be written in lowercase.
  name: "country",
  //The text that shows on toolbox
  title: "Country",
  //The actual question that will do the job
  questionJSON: {
      type: "dropdown",
      placeholder: "Select a country...",
      choicesByUrl: {
          url: "https://surveyjs.io/api/CountriesExample",
      },
  },
});

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
    let savedForm = window.localStorage.getItem("survey-json");
    if (savedForm){
      this.surveyCreatorModel.text = savedForm;
    }
    creator.saveSurveyFunc = (saveNo: number, callback: Function) => { 
      window.localStorage.setItem("survey-json", creator.text);
      callback(saveNo, true);
    };
  }

}
