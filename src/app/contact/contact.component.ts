import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { StarsComponent } from '../stars/stars.component';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-contact',
  imports: [StarsComponent,FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
bgClass:string="secondary-color"
textColor:string="text-color"

@ViewChildren('l') Mylabels!:QueryList<ElementRef>
textname:string=''
textage!:number
textemail:string=''
textpass:string=''



}
