import {
  Component,
  VERSION,
  ViewChild,
  ComponentFactoryResolver
} from '@angular/core';
import { HostDirective } from './host.directive';
import { HelloComponent, HiComponent } from './hello.component';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  @ViewChild(HostDirective, { static: true }) childref: HostDirective;
  components = [HiComponent, HelloComponent];
  constructor(public compfact: ComponentFactoryResolver) {}
  loadComponent(id) {
    //  this.childref.viewRef.clear();
    const resolvedfactory = this.compfact.resolveComponentFactory(
      this.components[id]
    );
    // this.childref.viewRef.createComponent(resolvedfactory);
    console.log(resolvedfactory);
  }
}
