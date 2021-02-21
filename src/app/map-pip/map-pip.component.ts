import { Component, AfterViewInit, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map-pip',
  templateUrl: './map-pip.component.html',
  styleUrls: ['./map-pip.component.css']
})
export class MapPipComponent implements AfterViewInit {

  private map1:any;
  private marker2:any;
  private circle:any;
  private polygon:any;
  private popup:any;
  private LeafletIcon1:any;
  private MultiPOI:any;

  constructor() {}

  ngAfterViewInit(): void {
    this.initMap();

    this.popup = L.popup();
    function onMapClick(this:any,e:any) {
     this.popup
        .setLatLng(e.latlng)
        .setContent('You clicked the map1 at ' + e.latlng.toString())
        .openOn(this.map1);
      // alert("You clicked the map1 at " + e.latlng);
    }

    this.map1.on('click', onMapClick);
  }

  private initMap(): void {
    // this.map1 = L.map1('map1', {
    //   center: [51.505, -0.09],
    //   zoom: 13,
    // });

    this.LeafletIcon1 = L.icon({
      iconUrl: "../assets/picture/poi-ooh.png",
      iconSize:     [45, 60], // size of the icon
      shadowSize:   [50, 64], // size of the shadow
      iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
      shadowAnchor: [4, 62],  // the same for the shadow
      popupAnchor:  [-3, -85] // point from which the popup should open relative to the iconAnchor
    })

    // this.MultiPOI = L.icon({
    //   iconUrl: "../assets/picture/poi-multi.png",
    //   iconSize:     [45, 60], // size of the icon
    //   shadowSize:   [50, 64], // size of the shadow
    //   iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    //   shadowAnchor: [4, 62],  // the same for the shadow
    //   popupAnchor:  [-3, -85] // point from which the popup should open relative to the iconAnchor
    // })

    /* Remove Zoom in & out */
    this.map1 = L.map('map1', { zoomControl: false }).setView([51.514741, -0.090122], 13); 
    this.marker2 = L.marker([51.5, -0.09],{icon:this.LeafletIcon1}).addTo(this.map1);
    


    
    // this.marker = L.marker([51.5, -0.09]).addTo(this.map1);

    // this.circle = L.circle([51.508, -0.11], {
    //   color: 'red',
    //   fillColor: '#f03',
    //   fillOpacity: 0.5,
    //   radius: 500,
    // }).addTo(this.map1);
    // this.polygon = L.polygon(
    //   [
    //     [51.509, -0.08],
    //     [51.503, -0.06],
    //     [51.51, -0.047],
    //     [51.52, -0.045],
    //   ],
    //   {
    //     color: '#00008B',
    //     fillColor: 'blue',
    //     fillOpacity: 0.3,
    //     // radius: 500,
    //   }
    // ).addTo(this.map1);

    // this.marker2.bindPopup(
    //   '<p class="id-shop">A0009435</p>'
    //   +
    //   '<p class="name-shop">ALFAMART RUKO PALEM</p>'
    //   +
    //   '<p class="type-shop">SEMI-<b>SHOP</b></p>'
    //   +
    //   '<div class="footer">'     
    //   +
    //   '<a class="modal-trigger" data-target="poi_details_map1"><p class="view-more">View More > </p></a>'
    //   +
    //   '</div>'
    //   ).openPopup();


    // this.circle.bindPopup('I am a circle.');
    // this.polygon.bindPopup('I am a polygon.');
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

    tiles.addTo(this.map1);
  }
}