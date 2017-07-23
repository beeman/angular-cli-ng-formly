import { Component } from '@angular/core';
import { FormService } from '@colmena/admin-ui';

@Component({
  selector: 'app-index',
  template: `
    <div class="container mt-3">
      <div class="row">
        <div class="col-md-8">
          <app-builder [definition]="definition" (action)="handleBuilderAction($event)"></app-builder>
        </div>
        <div class="col-md-4">
          <app-preview [fields]="fields" (action)="handlePreviewAction($event)"></app-preview>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class IndexComponent {

  definition = [
    { type: 'input', key: 'name', options: { label: 'Name', placeholder: 'Name' } },
    { type: 'password', key: 'password', options: { label: 'Password', placeholder: 'Password' } },
    { type: 'email', key: 'email', options: { label: 'Email', placeholder: 'Email' } },
    { type: 'textarea', key: 'description', options: { label: 'Description', placeholder: 'Description' } },
  ]
  fields: any[]

  constructor(
    private formService: FormService,
  ) {}


  parseDefinition(definition) {
    return definition.map(formEntry => {
      return this.formService[ formEntry.type ](formEntry.key, formEntry.options)
    })
  }

  handleBuilderAction($event) {
    console.log($event);

    switch ($event.type) {
      case 'update':
        this.fields = this.parseDefinition($event.payload)
        break
      default:
        console.log('Unknown action', $event)
    }


  }

  handlePreviewAction($event) {
    console.log($event);
  }

}
