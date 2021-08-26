import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[homeRenderer]'
})
export class HomeRendererDirective implements OnInit{

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }


  ngOnInit(){
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'red')
  }

  @HostListener('mouseenter') mouseover(ev: Event){
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'red');
    this.renderer.setStyle(this.elRef.nativeElement, 'cursor', 'pointer')
  }

  @HostListener('mouseleave') mouseleave(ev: Event){
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'black')
  }
}
