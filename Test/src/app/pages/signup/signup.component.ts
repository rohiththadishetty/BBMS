import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { AuthService } from '../../auth.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  constructor(private auth: AuthService, private message: NzMessageService, private router: Router) {}
  userForm = new FormGroup({});
  userModel = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'name',
      type: 'input',
      props: {
        label: 'Name',
        placeholder: 'Enter your name',
        required: true,
      },
    },
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
    },
    {
      key: 'mobile',
      type: 'input',
      props: {
        label: 'Mobile',
        placeholder: 'Enter your mobile number',
        required: true,
        minLength: 10,
        maxLength: 10
      }
    },
    {
      key: 'age',
      type: 'number',
      props: {
        label: 'Age',
        placeholder: 'Enter you age',
        required: true,
        min: 18,
        max: 50
      },
    },
    {
      key: 'bloodGroupId',
      type: 'select',
      props: {
        label: 'Blood Group',
        placeholder: 'Enter you blood group',
        required: true,
        options: [
          {
            "label": "A+",
            "value": "644801064fb7c409e29413a4"
          },
          {
            "label": "A-",
            "value": "6448010a4fb7c409e29413a5"
          },
          {
            "label": "B-",
            "value": "644801104fb7c409e29413a6"
          },
          {
            "label": "B+",
            "value": "644801124fb7c409e29413a7"
          },
          {
            "label": "AB+",
            "value": "644801194fb7c409e29413a8"
          },
          {
            "label": "AB-",
            "value": "6448011c4fb7c409e29413a9"
          },
          {
            "label": "O-",
            "value": "644801264fb7c409e29413aa"
          },
          {
            "label": "O+",
            "value": "6448012a4fb7c409e29413ab"
          }
        ]
      },
    },
  ];

  hospitalForm = new FormGroup({});
  hospitalModel = {};
  hFields: FormlyFieldConfig[] = [
    {
      key: 'name',
      type: 'input',
      props: {
        label: 'Name',
        placeholder: 'Enter the name of the hospital',
        required: true,
      },
    },
    {
      key: 'address',
      type: 'textarea',
      props: {
        label: 'Address',
        placeholder: 'Enter hospital address',
        required: true,
      }
    },
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
    },
    {
      key: 'mobile',
      type: 'input',
      props: {
        label: 'Mobile',
        placeholder: 'Enter your mobile number',
        required: true,
      }
    },
    {
      key: 'registrationNumber',
      type: 'input',
      props: {
        label: 'Govt Registration No',
        placeholder: 'Enter Registration Number',
        required: true,
      }
    },
  ];

  onSubmit(model:any) {
    console.log(model);
  }

  userSubmit(type:string, model:any) {
    this.auth.register(type, model).subscribe(() => {
      this.message.success('You have been registered succesfully');
      this.router.navigate([`/signin`]);
    });
  }
}
