import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() color!: string;
  @Input() text!: string;
  // @Input('master') masterName = '';
  @Output() btnClick = new EventEmitter();

  constructor() {}

  ngOnInit() {
    console.log('Button has been mounted!');
  }

  onClick() {
    this.btnClick.emit();
  }
}
