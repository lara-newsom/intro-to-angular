import { Component, inject } from '@angular/core';
import { Breadcrumb } from '../models/breadcrumb';
import { ContactForm } from '../models/contact-form';
import { ContactService } from '../services/contact.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

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

  readonly contactService = inject(ContactService);

  submitForm(model: ContactForm) {
    this.submitted = true;
    this.loading = true;

    this.contactService.submitContactForm(model).pipe(
      takeUntilDestroyed()
    ).subscribe(() => {
      this.loading = false;
    })
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
