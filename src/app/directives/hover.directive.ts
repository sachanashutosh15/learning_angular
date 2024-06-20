import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[hinvhover]',
})
export class HoverDirective implements OnInit {
  @Input() color = 'red';

  // @Input() hinvhover = 'red';
  // this property can be passed just by applying directive to element
  // and <input hinvhover='steelblue' />

  constructor(private element: ElementRef, private renderer: Renderer2) {
    console.log('>>>element from directive', this.element);
  }

  ngOnInit(): void {
    // this.element.nativeElement.style.backgroundColor = this.color;
    // this.renderer.setStyle(
    //   this.element.nativeElement,
    //   'backgroundColor',
    //   'red'
    // );
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      this.color
    );
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      'white'
    );
  }
}
