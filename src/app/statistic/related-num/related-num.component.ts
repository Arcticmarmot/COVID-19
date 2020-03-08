import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-related-num',
  templateUrl: './related-num.component.html',
  styleUrls: ['./related-num.component.less']
})
export class RelatedNumComponent implements OnInit {
  @Input() data;
  constructor() { }

  ngOnInit(): void {
    console.log('ds', this.data);
  }

}
