import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { OVERLAY_PROVIDERS } from "@angular2-material/core";
import { MdCardModule } from '@angular2-material/card';
import { MdToolbarModule } from '@angular2-material/toolbar';
import { MdInputModule } from '@angular2-material/input';
import { MdButtonModule } from '@angular2-material/button';
import { MdCheckboxModule } from '@angular2-material/checkbox';
import { MdSliderModule } from '@angular2-material/slider';
import { ModalModule } from 'ng2-bootstrap/ng2-bootstrap';
import { ImageUploadModule } from 'ng2-imageupload';
import { SelectModule } from 'ng2-select/ng2-select';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [AppComponent, HomeComponent, FormComponent, ViewComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    MdInputModule,
    MdButtonModule,
    MdCheckboxModule,
    MdSliderModule,
    MdCardModule,
    MdToolbarModule,
    ImageUploadModule,
    SelectModule,
    ReactiveFormsModule,
    ModalModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
