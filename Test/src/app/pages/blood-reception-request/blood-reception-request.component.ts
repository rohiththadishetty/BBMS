import { Component } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';
import { ApiService } from '../../api.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-blood-reception-request',
  templateUrl: './blood-reception-request.component.html',
  styleUrls: ['./blood-reception-request.component.scss']
})
export class BloodReceptionRequestComponent {
  bloodGroups:any = [];
  fields: FormlyFieldConfig[] = [];
  user:any;
  constructor(private api: ApiService, private message: NzMessageService) {}
  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('currentUser') || 'null');
    console.log(this.user);
    this.model.receptorId = this.user.userId;
    this.init();
  }

  form = new FormGroup({});
  model = { receptorId: '' };
  
  init() {
    this.fields = [
      {
        key: 'receptorId',
        type: 'input',
        props: {
          label: 'Enter your userId',
          placeholder: 'Enter your userId',
          required: true,
        },
        hide: true,
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
      {
        key: 'patientDetails',
        type: 'textarea',
        props: {
          label: 'Patient Details',
          placeholder: 'Enter any comments or tell us about your underlying health conditions',
        }
      },
      {
        key: 'bloodAmount',
        type: 'number',
        props: {
          label: 'Amount of Blood',
          placeholder: 'Ml',
          required: true,
        }
      },
      {
        key: 'receptionDate',
        type: 'date',
        props: {
          label: 'Reception Date',
          placeholder: 'Select Date',
          format:'mm-dd-yyyy',
          required: true,
        },
      },
      {
        key: 'comments',
        type: 'textarea',
        props: {
          label: 'Comments',
          placeholder: 'Enter any comments or tell us about your underlying health conditions',
        }
      },
    ];
  }

  onSubmit(model:any) {
    this.api.createBloodReceptionRequest(model).subscribe((response) => {
      this.message.success('Your Blood Reception Request Submitted Successfully');
      this.form.reset();
    });
  }
}
