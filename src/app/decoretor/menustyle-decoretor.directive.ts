import { Directive, HostListener, OnInit, ElementRef, Renderer2, HostBinding } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Directive({
  selector: '[appMenustyleDecoretor]'
})
export class MenustyleDecoretorDirective implements OnInit {
  @HostBinding('class.show') isOpen = false;
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
   }
  @HostListener('click') click() {
    this.isOpen = !this.isOpen;
  }
ngOnInit() {

}
}
