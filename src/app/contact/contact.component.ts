import { Component, OnDestroy, inject } from '@angular/core';
import { ContactForm } from '../models/contact-form';
import { ContactService } from '../services/contact.service';
import { takeUntil } from 'rxjs/operators';
import { ReplaySubject } from 'rxjs';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  standalone: true,
  imports: [
    MatProgressSpinnerModule,
    MatButtonModule,
    NgIf,
    FormsModule,
  ],
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent{
  // inject the contactService

  // This declares an empty contact form model
  model: ContactForm = {
    fullName: '',
    email: '',
    phone: '',
    comment: '',
  };

  // We will use these properties to check what state our form is in
  submitted = false;
  loading = false;

  submitForm(model: ContactForm) {
    // at this point submitted should be true and loading should be true

    // our contact service has a method to submit our form called submitContactForm
    // it returns an observable so we will need to subscribe
    // once our form has been submitted we need to toggle loading to false

  }

  // declare a method called clearForm that sets submitted to false and clears the values in this.model
  clearForm() {

  }

  // before we are done we have to manage the subscription we are instantiating when we submit our form
  // Failure to unsubscribe can lead to memory leaks
}
