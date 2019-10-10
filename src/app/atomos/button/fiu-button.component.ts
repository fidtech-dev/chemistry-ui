import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'fiu-button',
  templateUrl: './fiu-button.component.html',
  styleUrls: ['./fiu-button.component.scss']
})
export class FiuButtonComponent implements OnInit {

  @Input() color = 'primary';
  @Input() label;
  @Input() outline;
  @Input() size;
  @Input() icon;
  @Input() disabled;

  constructor() { }

  ngOnInit() {
  }

}
