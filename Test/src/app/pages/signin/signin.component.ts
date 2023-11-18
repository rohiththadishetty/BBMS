import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router'
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  constructor(private auth: AuthService, private router: Router, private message: NzMessageService) {}
  userForm = new FormGroup({});
  userModel = {};
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
        description: 'test',
        required: true
      },
    }
  ];

  hospitalForm = new FormGroup({});
  hospitalModel = {};
  hFields: FormlyFieldConfig[] = [
    {
      key: 'email',
      type: 'input',
      props: {
        type: 'email',
        label: 'Email',
        placeholder: 'Enter your email',
        required: true,
        attributes: {
          autocomplete: "off",
          name: "user"
        },
      },
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
      
      this.router.navigate([`/${type === 'users' ? 'user' : 'hospital'}/home`]);
    }, () => this.message.error('Login failed!'));
  }
}
