import { Component } from '@angular/core';
import { StarsComponent } from "../stars/stars.component";
import { ModalComponent } from "../modal/modal.component";


@Component({
  selector: 'app-portfolio',
  imports: [StarsComponent, ModalComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

bgClass:string="secondary-color"
textColor:string="text-color"

images:string[]=['images/img1 (1).jpg','images/img2 .jpg','images/img3 .jpg','images/img4 .jpg','images/img5 .jpg','images/img6 .jpg']

currentImg:string=''

saveImg(img:string):void{
  this.currentImg=img
  
  
}


}
