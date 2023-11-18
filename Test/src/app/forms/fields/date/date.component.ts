import { Component } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-input',
  template: `
    <nz-form-item>
  <nz-form-label *ngIf="to.label" [attr.for]="id" class="ant-form-item-label" [ngClass]="{ 'ant-form-item-required': to.required }">
    {{ to.label }}
  </nz-form-label>
  <nz-form-control>
    <nz-date-picker
      [formControl]="formControl"
      [formlyAttributes]="field"
      [nzAllowClear]="!field.props.required"
      [nzDisabled]="to.disabled"
      [nzPlaceHolder]="to.placeholder || 'Select date'"
    ></nz-date-picker>
  </nz-form-control>
</nz-form-item>

  `,
})
export class DateField extends FieldType<FieldTypeConfig> {}