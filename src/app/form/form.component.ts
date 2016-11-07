import { Component, OnInit, NgModule, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Form, Intrest } from './form';
import { ModalDirective } from 'ng2-bootstrap/ng2-bootstrap';

import { ImageResult, ResizeOptions } from 'ng2-imageupload';
import { Router } from '@angular/router';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  //DECLARATION
  @ViewChild('smModal') public infoModal: ModalDirective;
  imagePath: string;
  form: Form;
  intrest: any;
  submited:boolean;
  infoMsg:string;
  src: string = "";
  resizeOptions: ResizeOptions = {
                  resizeMaxHeight: 150,
                  resizeMaxWidth: 150
                };


  items: Array<string> = ['Cricket', 'Volleyball', 'Football', 'Baskertball',
    'Table Tennis', 'Badminton', 'Hockey', 'Movies', 'Songs', 'Reading Books',
    'Chess', 'Billiards', 'Golf'];

  private value: any = [];
  private _disabledV: string = '0';
  private disabled: boolean = false;
  private get disabledV(): string { return this._disabledV; }
  private set disabledV(value: string) {
    this._disabledV = value;
    this.disabled = this._disabledV === '1';
  }
  constructor(private _router: Router) {
    this.onInitial();
  }

  ngOnInit() {
    this.onView();
  }

  onInitial() {
    this.form = {
      firstName: "",
      lastName: "",
      age: "",
      emailId: "",
      tel: "",
      stateId: "",
      countryId: "",
      addressId: "",
      haddress1: "",
      haddress2: "",
      caddress1: "",
      caddress2: "",
      intrest: this.intrest,
      agreesToNews: false,
    }
    if (sessionStorage.getItem("imagePath") != null && sessionStorage.getItem("imagePath") != undefined) {
      this.src = sessionStorage.getItem("imagePath");
    }
    this.infoMsg="";
  }

  onSelected(value: any): void { }
  onRemoved(value: any): void { }
  onRefreshValue(value: any): void { this.value = value; }

  itemsToString(value: Array<any> = []): string {
    return value
      .map((item: any) => {
        return item.text;
      }).join(',');
  }

  selectedImg(imageResult: ImageResult) {
    this.src = imageResult.resized && imageResult.resized.dataURL || imageResult.dataURL;
    sessionStorage.setItem("imagePath", "");
    sessionStorage.setItem("imagePath", this.src);
  }

  onSubmit(regForm: NgForm) {
    if(regForm.valid){
    this.form.intrest = this.value;
 
    sessionStorage.setItem("formData", "");
    sessionStorage.setItem("formData", JSON.stringify(this.form));
    this._router.navigate(['profile']);
    }
    else{
      this.submited=true;
      this.infoMsg="Kindly fill the form and retry."
      this.infoModal.show();
    }
  }
  
  onView() {
    let sessionData = sessionStorage.getItem("formData")
    if (sessionData != "" && sessionData != null) {
      this.form = JSON.parse(sessionData);
      this.value = this.form.intrest;
    }
  }

  charactersOnly($event) {
    if (($event.which < 65 || $event.which > 91) && ($event.which < 96 || $event.which > 123) && ($event.which != 32) && ($event.which != 46)) {
      this.infoMsg="Please fill the filed with letter [A-Z, a-z]."
      this.infoModal.show();
      return false;
    }
    else {
      return true;
    }
  }

   numbersOnly($event) {//Validate numbersOnly
    if (!($event.which == 0 || $event.which == 8 || $event.which == 46) && ($event.which < 48 || $event.which > 57)) {
      this.infoMsg="Please fill the filed with numbers [0-9]."
      this.infoModal.show();
      return false;
    }
    else {
      return true;
    }
  } 
}
