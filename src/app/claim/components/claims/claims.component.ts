import {
  Component,
  OnInit
} from '@angular/core';
import {
  Router, RouterOutlet
} from '@angular/router';
import { SlideInAnimation } from '../../animations/animations';

@Component({
  selector: 'cl-claims',
  templateUrl: './claims.component.html',
  styleUrls: ['./claims.component.css'],
  animations: [SlideInAnimation]
})
export class ClaimsComponent implements OnInit {
  primary: string = 'primary';
  accent: string = 'accent';

  navLinks: any[];
  activeLinkIndex = -1;

  constructor(private router: Router) {
    this.navLinks = [{
      label: 'notSent',
      link: './notSent'
    }, {
      label: 'returned',
      link: './returned'
    }, {
      label: 'refused',
      link: './refused'
    }, {
      label: 'sent',
      link: './sent'
    }, {
      label: 'appealed',
      link: './appealed'
    }, {
      label: 'basiclist',
      link: './basiclist'
    }, ];
  }

  ngOnInit() {

  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation']
  }

}
