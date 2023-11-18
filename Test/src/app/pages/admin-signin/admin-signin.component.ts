import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-admin-signin',
  templateUrl: './admin-signin.component.html',
  styleUrls: ['./admin-signin.component.scss']
})
export class AdminSigninComponent {
  constructor(private auth: AuthService, private router: Router) {}
  adminForm = new FormGroup({});
  adminModel = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'email',
      type: 'input',
      props: {
        type: 'email',
        label: 'Email',
        placeholder: 'Enter your email',
        required: true,
      }
    },
    {
      key: 'password',
      type: 'input',
      props: {
        type: 'password',
        label: 'Password',
        placeholder: 'Enter your password',
        required: true,
      }
    }
  ];
  onSubmit(type:string, model:any) {
    this.auth.login(type, model).subscribe((data) => {
      
      this.router.navigate([`/admin/home`]);
    });
  }
}
