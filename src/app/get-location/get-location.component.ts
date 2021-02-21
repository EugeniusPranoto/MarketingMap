import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-draw';

@Component({
  selector: 'app-get-location',
  templateUrl: './get-location.component.html',
  styleUrls: ['./get-location.component.css']
})
export class GetLocationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    if (!navigator.geolocation) {
      console.log("location is not supported");
    }

    navigator.geolocation.getCurrentPosition((position) => {
      const coords = position.coords;
      const latlong:any = [coords.latitude, coords.longitude];

      console.log(`lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`);
      let map = L.map('map').setView(latlong, 13);

      L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZzNyb25pbW8iLCJhIjoiY2tpc2t6NjI0MGlrbDMycnhmcXl5eWs5OSJ9.Q4PPDBx6wE058u2vxT0TWQ', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'your.mapbox.access.token'
      }).addTo(map);

      let marker = L.marker(latlong).addTo(map);

      let editableLayers = new L.FeatureGroup();
      map.addLayer(editableLayers);

      let LeafIcon = L.Icon.extend({
        options: {
          // shadowUrl:
          //   'http://leafletjs.com/docs/images/leaf-shadow.png',
          iconSize: [30, 30],
          // shadowSize: [50, 64],
          iconAnchor: [22, 94],
          // shadowAnchor: [4, 62],
          popupAnchor: [-3, -76]
        }
      });

      // let greenIcon = new LeafIcon({
      //   iconUrl: 'https://img.icons8.com/metro/52/000000/marker.png'
      // });

      let drawnItems = new L.FeatureGroup();
      map.addLayer(drawnItems);

      // let drawControl = new L.Control.Draw({
      //   position: 'topright',
      //   draw: {
      //     polygon: {
      //       shapeOptions: {
      //         color: 'purple'
      //       },
      //       allowIntersection: false,
      //       drawError: {
      //         color: 'orange',
      //         timeout: 1000
      //       },
      //       showArea: true,
      //       metric: false,
      //       repeatMode: true
      //     },
      //     polyline: {
      //       shapeOptions: {
      //         color: 'red'
      //       },
      //     },
      //     rect: {
      //       shapeOptions: {
      //         color: 'green'
      //       },
      //     },
      //     circle: {
      //       shapeOptions: {
      //         color: 'steelblue'
      //       },
      //     },
      //     marker: {
      //       icon: greenIcon
      //     },
      //   },
      //   edit: {
      //     featureGroup: drawnItems
      //   }
      // });
      // map.addControl(drawControl);

      map.on('draw:created', function (e:any) {
        let type = e.layerType,
          layer = e.layer;

        if (type === 'marker') {
          layer.bindPopup('A popup!');
        }

        drawnItems.addLayer(layer);
      });


    });

    this.watchPosition();
  }

  private watchPosition() {
    let desLat = 0;
    let desLon = 0;
    let id = navigator.geolocation.watchPosition((position) => {
      console.log(`lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`);

      if (position.coords.latitude == desLat) {
        navigator.geolocation.clearWatch(id);
      }
    }, (err) => {
      console.log(err);
    }, {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    });
  }

}
