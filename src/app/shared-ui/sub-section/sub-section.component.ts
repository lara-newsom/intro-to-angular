import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [
    // add imports for NgFor, AsyncPipe, and CardComponent
  ],
  selector: 'app-sub-section',
  templateUrl: './sub-section.component.html',
  styleUrls: ['./sub-section.component.css']
})
export class SubSectionComponent {
  // inject the Product service into the class

  // create an observable property called featured$ and set it equal to productService.homeProducts$
}
