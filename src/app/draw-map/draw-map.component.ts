import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-draw';

@Component({
  selector: 'app-draw-map',
  templateUrl: './draw-map.component.html',
  styleUrls: ['./draw-map.component.css']
})
export class DrawMapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let map = L.map('map').setView([-41.2858, 174.78682], 14);
    let mapLink = 
            '<a href="http://openstreetmap.org">OpenStreetMap</a>';
        L.tileLayer(
            'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; ' + mapLink + ' Contributors',
            maxZoom: 18,
            }).addTo(map);

		let LeafIcon = L.Icon.extend({
			options: {
				shadowUrl: 
				    'http://leafletjs.com/docs/images/leaf-shadow.png',
				iconSize:     [38, 95],
				shadowSize:   [50, 64],
				iconAnchor:   [22, 94],
				shadowAnchor: [4, 62],
				popupAnchor:  [-3, -76]
			}
		});

		// var greenIcon = new LeafIcon({
		// 	iconUrl: 'http://leafletjs.com/docs/images/leaf-green.png'
		// 	});

		var drawnItems = new L.FeatureGroup();
		map.addLayer(drawnItems);

		// var drawControl = new L.Control.Draw({
		// 	position: 'topright',
		// 	draw: {
		// 		polygon: {
		// 			shapeOptions: {
		// 				color: 'purple'
		// 			},
		// 			allowIntersection: false,
		// 			drawError: {
		// 				color: 'orange',
		// 				timeout: 1000
		// 			},
		// 			showArea: true,
		// 			metric: false,
		// 			repeatMode: true
		// 		},
		// 		polyline: {
		// 			shapeOptions: {
		// 				color: 'red'
		// 			},
		// 		},
		// 		rect: {
		// 			shapeOptions: {
		// 				color: 'green'
		// 			},
		// 		},
		// 		circle: {
		// 			shapeOptions: {
		// 				color: 'steelblue'
		// 			},
		// 		},
		// 		// marker: {
		// 		// 	icon: greenIcon
		// 		// },
		// 	},
		// 	edit: {
		// 		featureGroup: drawnItems
		// 	}
		// });
		// map.addControl(drawControl);

		map.on('draw:created', function (e:any) {
			var type = e.layerType,
				layer = e.layer;

			if (type === 'marker') {
				layer.bindPopup('A popup!');
			}

			drawnItems.addLayer(layer);
		});

  }

}
