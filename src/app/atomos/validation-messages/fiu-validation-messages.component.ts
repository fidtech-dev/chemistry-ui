import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'fiu-validation-message',
  templateUrl: './fiu-validation-messages.component.html',
  styleUrls: ['./fiu-validation-messages.component.scss']
})
export class FiuValidationMessagesComponent implements OnInit {
 @Input() messege;
  constructor() { }

  ngOnInit() {
  }

}
