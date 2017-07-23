import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { FormlyBootstrapModule, FormlyModule } from 'ng-formly';
import { NgxDnDModule } from '@swimlane/ngx-dnd'

import { ColmenaUiModule } from '@colmena/admin-ui';

import { IndexComponent } from './components/index.component'
import { BuilderComponent } from './components/builder.component'
import { PreviewComponent } from './components/preview.component'

@NgModule({
  imports: [
    CommonModule,

    FormsModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyBootstrapModule,

    NgxDnDModule,

    ColmenaUiModule,
  ],
  declarations: [
    BuilderComponent,
    IndexComponent,
    PreviewComponent,
  ],
  exports: [IndexComponent],
})
export class FormBuilderModule { }
