import { Component, Input } from '@angular/core';
import { ROUTE_TOKENS } from 'src/app/models/route-tokens';
import { Breadcrumb } from 'src/app/models/breadcrumb';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent{
  @Input({required: true}) breadcrumbs: Breadcrumb[] = [];
  readonly ROUTE_TOKENS = ROUTE_TOKENS;

}
