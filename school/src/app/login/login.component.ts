import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Input() user_type:string = ""

@Input() user_label:string = ""

@Input() password_label = ""
@Output() emitter = new EventEmitter()

submit(formdata:any){
  this.emitter.emit(formdata)
}

}
