import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})
export class AuthComponent {


    flag: boolean = true

    apply(value: string) {
        this.flag = value == "login" ? true : false;
    }


}