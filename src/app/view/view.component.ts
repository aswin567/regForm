import { Component, OnInit } from '@angular/core';
import { Form, Intrest } from '../form/form';

import { ImageResult, ResizeOptions } from 'ng2-imageupload';

import { Router } from '@angular/router';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  //Declaration
  haveData: string;
  profile: Form;
  intrest: any;
  lengthOfIntrest: number;
  src: string = ""
  resizeOptions: ResizeOptions = {
                    resizeMaxHeight: 150,
                    resizeMaxWidth: 150
                  };

                  
  constructor(private _router: Router) {
    this.onInitial();
  }

  ngOnInit() {
    this.getData();
  }

  private onInitial() {
    this.profile = {
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
  }

  private getData() {
    this.haveData = sessionStorage.getItem("formData")
    if (this.haveData != "" && this.haveData != undefined && this.haveData != null) {
      this.profile = JSON.parse(sessionStorage.getItem("formData"));
      this.lengthOfIntrest = this.profile.intrest.length - 1;
    }
  }

  onAgree() {
    sessionStorage.removeItem("formData");
    sessionStorage.removeItem("imagePath");
    this._router.navigate(['home'])
  }

  selected(imageResult: ImageResult) {
    this.src = imageResult.resized
      && imageResult.resized.dataURL
      || imageResult.dataURL;
    sessionStorage.setItem("imagePath", "")
    sessionStorage.setItem("imagePath", this.src)
  }
}
