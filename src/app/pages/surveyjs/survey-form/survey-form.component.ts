import { Component, OnInit } from '@angular/core';
import { Model } from "survey-core";

@Component({
  selector: 'ngx-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.scss']
})
export class SurveyFormComponent implements OnInit {
  surveyModel: Model;

  constructor() { }

  ngOnInit(): void {
    const savedForm = window.localStorage.getItem("survey-json");
    const survey = new Model();
    this.surveyModel = survey;
    if (savedForm){
      this.surveyModel = new Model(JSON.parse(savedForm));
    }
  }

}
