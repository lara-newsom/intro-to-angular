import { Component, OnDestroy, inject } from '@angular/core';
import { ContactForm } from '../models/contact-form';
import { ContactService } from '../services/contact.service';
import { takeUntil, tap } from 'rxjs/operators';
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
export class ContactComponent implements OnDestroy{
  // inject the contactService
  private readonly contactService = inject(ContactService);

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

  private readonly destroyed$ = new ReplaySubject<void>(1);

  submitForm(model: ContactForm) {
    // at this point submitted should be true and loading should be true
    this.submitted = true;
    this.loading = true;

    // our contact service has a method to submit our form called submitContactForm
    // it returns an observable so we will need to subscribe
    // once our form has been submitted we need to toggle loading to false
    this.contactService.submitContactForm(model).pipe(
      tap(() => {
        this.loading = false
      }),
      takeUntil(this.destroyed$)
    ).subscribe();
  }

  // declare a method called clearForm that sets submitted to false and clears the values in this.model
  clearForm() {
    this.model = {
      fullName: '',
      email: '',
      phone: '',
      comment: '',
    };
    this.submitted = false;
  }

  // before we are done we have to manage the subscription we are instantiating when we submit our form
  // Failure to unsubscribe can lead to memory leaks
  ngOnDestroy(): void {
      this.destroyed$.next();
      this.destroyed$.complete();
  }
}
