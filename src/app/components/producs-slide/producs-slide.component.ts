import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-producs-slide',
  templateUrl: './producs-slide.component.html',
  styleUrls: ['./producs-slide.component.scss']
})
export class ProducsSlideComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function() {
      $("#news-slider").owlCarousel({
          items:3,
          itemsDesktop:[1199,3],
          itemsDesktopSmall:[1000,2],
          itemsMobile:[650,1],
          pagination:false,
          navigationText:false,
          autoPlay:true
      });
  });
  }

}
