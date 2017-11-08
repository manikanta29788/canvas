import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-cropper-canvas',
  templateUrl: './cropper-canvas.component.html',
  styleUrls: ['./cropper-canvas.component.css']
})
export class CropperCanvasComponent implements OnInit, AfterViewInit {
  @ViewChild('canvas') canvas: ElementRef;
  @ViewChild('img') img: ElementRef;
  imageSrc = '/assets/CC0055.jpg';

  //@Input() imageSrc: string;

  constructor() { }

  ngOnInit() {
  }

//  drawRectsObservable() {
//  const svg = document.getElementById("canvas");
//  const mousedrag = Observable.fromEvent<MouseEvent>(svg, 'mousedown')
//    .map(e=>({event:e, svgBounds: svg.getBoundingClientRect()}))
//    .map(({event, svgBounds})=> ({
//      rect: new Elem(svg, 'rect')
//        .attr('x', event.clientX - svgBounds.left)
//        .attr('y', event.clientY - svgBounds.top)
//        .attr('width', 5)
//        .attr('height', 5)
//        .attr('fill', '#95B3D7'),
//      svgBounds: svgBounds}))
//    .subscribe(({rect,svgBounds})=>{
//      const ox = Number(rect.attr('x')), oy = Number(rect.attr('y'));
//      Observable.fromEvent<MouseEvent>(svg, 'mousemove')
//        .takeUntil(Observable.fromEvent(svg, 'mouseup'))
//        .map(({clientX, clientY})=>({
//          rect, ox, oy,
//          x: clientX - svgBounds.left,
//          y: clientY - svgBounds.top}))
//        .subscribe(({rect, ox, oy, x, y})=>
//          rect.attr('x', Math.min(x,ox))
//              .attr('y', Math.min(y,oy))
//              .attr('width', Math.abs(ox - x))
//              .attr('height', Math.abs(oy - y))
//        );
//    });
//}

  ngAfterViewInit() {
    let canvas = this.canvas.nativeElement;
    let context = canvas.getContext('2d');

    let source = new Image();
    source.crossOrigin = 'Anonymous';
    source.onload = () => {
        canvas.height = source.height;
        canvas.width = source.width;
        context.drawImage(source, 0, 0);

        this.imageSrc = canvas.toDataURL();
    };
    source.src = this.imageSrc;
  }

}
