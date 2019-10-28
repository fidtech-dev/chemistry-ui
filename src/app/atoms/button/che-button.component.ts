import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'che-button',
  templateUrl: './che-button.component.html',
  styleUrls: ['./che-button.component.scss']
})
export class CheButtonComponent implements OnInit {

  @Input() color = 'primary';
  @Input() label;
  @Input() outline;
  @Input() size;
  @Input() disabled;

  constructor() { }

  ngOnInit() {
  }

}
