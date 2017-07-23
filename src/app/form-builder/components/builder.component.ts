import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss'],
})
export class BuilderComponent implements OnInit {

  toggle = {}

  icons = {
    input: 'fa fa-fw fa-keyboard-o',
    password: 'fa fa-fw fa-key',
    email: 'fa fa-fw fa-envelope',
    textarea: 'fa fa-fw fa-font',
  }

  sourceBuilderTools = [
    {
      name: 'Input',
      type: 'input',
      key: 'name',
      icon: 'fa fa-fw fa-keyboard-o',
      options: { label: 'Name', placeholder: 'Name' },
    },
    {
      name: 'Password',
      type: 'password',
      key: 'password',
      icon: 'fa fa-fw fa-key',
      options: { label: 'Password', placeholder: 'Password' },
    },
    {
      name: 'Email',
      type: 'email',
      key: 'email',
      icon: 'fa fa-fw fa-envelope',
      options: { label: 'Email', placeholder: 'Email' },
    },
    {
      name: 'Textarea',
      type: 'textarea',
      key: 'description',
      icon: 'fa fa-fw fa-font',
      options: { label: 'Description', placeholder: 'Description' },
    },
  ];

  @Input() definition = []
  @Output() action = new EventEmitter()

  ngOnInit() {
    this.update()
  }

  getTypes() {
    return this.sourceBuilderTools.map(tool => tool.type)
  }

  update() {
    this.action.emit({ type: 'update', payload: this.definition })
  }


  log(e: any) {
    console.log(e.type, e);

    this.update()
  }

  droppableItemClass = (item: any) => `${item.class} ${item.inputType}`;

  builderDrag(e: any) {
    const item = e.value;
    item.data = item.inputType === 'number' ?
      (Math.random() * 100) | 0 :
      Math.random().toString(36).substring(20);
  }
}
