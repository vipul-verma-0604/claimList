import {
  Component,
  OnInit
} from '@angular/core';
import {
  Router
} from '@angular/router';

@Component({
  selector: 'cl-claims',
  templateUrl: './claims.component.html',
  styleUrls: ['./claims.component.css']
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

}
