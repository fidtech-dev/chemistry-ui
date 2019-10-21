import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'che-validation-message',
  templateUrl: './che-validation-messages.component.html',
  styleUrls: ['./che-validation-messages.component.scss']
})
export class CheValidationMessagesComponent implements OnInit {
 @Input() messege;
  constructor() { }

  ngOnInit() {
  }

}
