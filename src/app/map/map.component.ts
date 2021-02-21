import { Component, AfterViewInit, OnInit } from '@angular/core';
import * as L from 'leaflet';

declare const myTest: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})


export class MapComponent implements AfterViewInit {
  private map:any;
  private marker:any;
  private marker1:any;
  private circle:any;
  private polygon:any;
  private popup:any;
  private LeafletIcon:any;
  private MultiPOI:any;

  constructor() {}

  ngAfterViewInit(): void {
    this.initMap();

    this.popup = L.popup();
    function onMapClick(this:any,e:any) {
     this.popup
        .setLatLng(e.latlng)
        .setContent('You clicked the map at ' + e.latlng.toString())
        .openOn(this.map);
      // alert("You clicked the map at " + e.latlng);
    }

    this.map.on('click', onMapClick);


    function clickCarousel(){
      
    }
  }

  private initMap(): void {
    // this.map = L.map('map', {
    //   center: [51.505, -0.09],
    //   zoom: 13,
    // });

    this.LeafletIcon = L.icon({
      iconUrl: "../assets/picture/poi-ooh.png",
      iconSize:     [45, 60], // size of the icon
      shadowSize:   [50, 64], // size of the shadow
      iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
      shadowAnchor: [4, 62],  // the same for the shadow
      popupAnchor:  [-3, -85] // point from which the popup should open relative to the iconAnchor
    })

    this.MultiPOI = L.icon({
      iconUrl: "../assets/picture/poi-multi.png",
      iconSize:     [45, 60], // size of the icon
      shadowSize:   [50, 64], // size of the shadow
      iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
      shadowAnchor: [4, 62],  // the same for the shadow
      popupAnchor:  [-3, -85] // point from which the popup should open relative to the iconAnchor
    })

    this.map = L.map('map').setView([51.514741, -0.090122], 13);    
    this.marker = L.marker([51.5, -0.09],{icon:this.LeafletIcon}).addTo(this.map);
    this.marker1 = L.marker([51.5, -0.15],{icon:this.MultiPOI}).addTo(this.map);
    


    
    // this.marker = L.marker([51.5, -0.09]).addTo(this.map);

    this.circle = L.circle([51.508, -0.11], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 500,
    }).addTo(this.map);
    this.polygon = L.polygon(
      [
        [51.509, -0.08],
        [51.503, -0.06],
        [51.51, -0.047],
        [51.52, -0.045],
      ],
      {
        color: '#00008B',
        fillColor: 'blue',
        fillOpacity: 0.3,
        // radius: 500,
      }
    ).addTo(this.map);

    this.marker.bindPopup(
      '<p class="id-shop">A0009435</p>'
      +
      '<p class="name-shop">ALFAMART RUKO PALEM</p>'
      +
      '<p class="type-shop">SEMI-<b>SHOP</b></p>'
      +
      '<div class="footer">'     
      +
      '<a class="modal-trigger" data-target="poi_details_map"><p class="view-more">View More > </p></a>'
      +
      '</div>'
      ).openPopup();


    this.circle.bindPopup('I am a circle.');
    this.polygon.bindPopup('I am a polygon.');
    // this.popup = L.popup()
    //   .setLatLng([51.5, -0.09])
    //   .setContent('I am a standalone popup.')
    //   .openOn(this.map);

  //  this.marker.bindTooltip("my tooltip text").openTooltip();

    const tiles = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    );

    tiles.addTo(this.map);
  }
}
