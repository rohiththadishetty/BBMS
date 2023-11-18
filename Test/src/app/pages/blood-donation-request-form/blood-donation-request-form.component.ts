import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-blood-donation-request-form',
  templateUrl: './blood-donation-request-form.component.html',
  styleUrls: ['./blood-donation-request-form.component.scss']
})
export class BloodDonationRequestFormComponent {
  bloodGroups:any = [];
  fields: FormlyFieldConfig[] = [];
  user:any;
  constructor(private api: ApiService, private message: NzMessageService) {}
  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('currentUser') || 'null');
    console.log(this.user);
    this.model.donorId = this.user.userId;
    this.init();
  }

  form = new FormGroup({});
  model = { donorId: '', bloodGroupId: '' };
  
  init() {
    this.fields = [
      {
        key: 'donorId',
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
        type: 'input',
        props: {
          label: 'Enter your userId',
          placeholder: 'Enter your userId',
          required: true,
        },
        hide: true,
      },
      {
        key: 'bloodAmount',
        type: 'number',
        props: {
          label: 'Amount of Blood (mL)',
          placeholder: 'Ml',
          required: true,
        }
      },
      {
        key: 'donationDate',
        type: 'date',
        props: {
          label: 'Donation Date',
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
    this.api.createBloodDonationRequest(model).subscribe((response) => {
      this.message.success('Your Blood Donation Request Submitted Successfully');
      this.form.reset();
    });
  }
}
