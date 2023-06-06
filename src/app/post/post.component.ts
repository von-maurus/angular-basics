import { Component, Input, EventEmitter, Output, OnInit, OnChanges, DoCheck, SimpleChanges, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-post', // it's a good practice that angular applies, prefex "app" for preventing collisions
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, OnChanges, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy {
  @Input('img') postImg = '';
  @Output() imgSelected = new EventEmitter<string>(); // communicating from child component to parent. Adding a type is good practice.

  // this is a hook on JS, called when the component is initialized. Runs once
  constructor() {
    console.debug("Constructor called...", this.postImg)
  }

  ngOnInit() {
    // Here the values are loaded and parameters load their contents. Runs once
    console.debug("ngOnInit called...", this.postImg)
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.debug("ngOnChanges called...", this.postImg)
  }

  ngDoCheck(): void {
    // this sometimes runs twice, because the second time is for error check
    console.debug("ngDoCheck called...", this.postImg)
  }

  ngAfterContentChecked(): void {
    console.debug("ngAfterContentChecked called...", this.postImg)
  }

  ngAfterContentInit(): void {
    console.log("Here the content is already inserted on child components")
    console.debug("ngAfterContentInit called...", this.postImg)
  }

  ngAfterViewChecked(): void {
    console.log("Here the content is already initialized")
    console.debug("ngAfterViewChecked called...", this.postImg)
  }

  ngAfterViewInit(): void {
    // after it's been initialized. 
    console.debug("ngAfterViewInit called...", this.postImg)
  }

  ngOnDestroy(): void {
    console.debug("ngOnDestroy called...", this.postImg)
  }
}
