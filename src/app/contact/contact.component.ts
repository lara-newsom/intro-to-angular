import { Component } from '@angular/core';
import { Breadcrumb } from '../models/breadcrumb';
import { ContactForm } from '../models/contact-form';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  model: ContactForm = {
    fullName: '',
    email: '',
    phone: '',
    comment: '',
  };
  submitted = false;
  loading = false;

  breadcrumbs: Breadcrumb[] = [
    {
      display: 'Contact',
      routerLink: ''
    },
  ];

  submitForm(model: ContactForm) {
    console.log('ContactFrom Submitted with Values:', model);
    this.submitted = true;
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 3000)
  }

  clearForm() {
    this.submitted = false;
    this.model = {
      fullName: '',
      email: '',
      phone: '',
      comment: '',
    }
  }
}
