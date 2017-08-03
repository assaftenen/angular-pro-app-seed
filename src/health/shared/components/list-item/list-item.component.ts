
import { Component, Input} from '@angular/core';

@Component({
  selector: 'list-item',
  styleUrls: ['list-item.component.scss'],
  template: `
<div>
{{item | json}}
</div>
  `
})
export class ListItemComponent {

  toggled = false;

  @Input()
  item: any;

//   @Output()
//   remove = new EventEmitter<any>();

  constructor() {}

//   toggle() {
//     this.toggled = !this.toggled;
//   }

//   removeItem() {
//     this.remove.emit(this.item);
//   }

//   getRoute(item: any) {
//     return [`../meals`, item.$key];
//   }
}