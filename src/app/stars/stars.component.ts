import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stars',
  imports: [],
  templateUrl: './stars.component.html',
  styleUrl: './stars.component.css'
})
export class StarsComponent {

@Input({required:true}) classBg:string=''
@Input({required:true}) TextColor:string=''

}
