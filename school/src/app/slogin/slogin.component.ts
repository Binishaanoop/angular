import { Component } from '@angular/core';

@Component({
  selector: 'app-slogin',
  templateUrl: './slogin.component.html',
  styleUrls: ['./slogin.component.css']
})
export class SloginComponent {
   router: any;
   data_received(formdata:any){
    console.log(formdata)
    this.router.navigateByUrl("/student");

  }
}
