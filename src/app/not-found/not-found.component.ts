import { Component } from '@angular/core';
import { SharedUiModule } from '../shared-ui/shared-ui.module';

@Component({
  standalone: true,
  imports: [
    SharedUiModule
  ],
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent {

}
