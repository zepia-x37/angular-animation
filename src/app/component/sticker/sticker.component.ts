import {AfterViewChecked, Component, OnInit} from '@angular/core';

let document: any;
@Component({
  selector: 'app-sticker',
  templateUrl: './sticker.component.html',
  styleUrls: ['./sticker.component.scss']
})
export class StickerComponent implements AfterViewChecked{


  ngAfterViewChecked() {
    window.print();
    document.margin='none';
  }
}
