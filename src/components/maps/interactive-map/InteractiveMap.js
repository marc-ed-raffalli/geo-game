import React, {Component} from 'react';
import {Map, TileLayer, GeoJSON, Marker} from 'react-leaflet';

import {divIcon} from 'leaflet';
import 'leaflet/dist/leaflet.css';

import './_interactiveMap.css';

const defaultStyle = {
    fillColor: 'transparent',
    weight: 1,
    opacity: 1,
    color: '#aaa',
    dashArray: '3'
  },
  defaultHighlightStyle = {
    fillColor: '#ccc',
    weight: 2,
    color: '#888',
    fillOpacity: 0.5
  },
  resetLayerStyle = (layer) => {
    layer.setStyle(defaultStyle);
  };

let uniqueIdNumber = 0;

export default class InteractiveMap extends Component {

  constructor() {
    super();
    this.state = {
      height: 0,  // wait for the render
    };
  }

  componentDidMount() {
    this.setState({height: this.mapElt.offsetHeight});
  }

  render() {
    const classNames = ['h-100', 'gg-interactiveMap'];

    if (this.props.feedback !== undefined) {
      const correct = this.props.feedback === true;

      classNames.push(correct ? 'gg-interactiveMap_success' : 'gg-interactiveMap_error');
    }

    return (
      <div className={classNames.join(' ')}
           ref={elt => {
             this.mapElt = elt;
           }}
      >
        {this.state.height !== 0 ? this.renderMap() : undefined}
      </div>
    );
  }

  renderMap() {
    const props = this.props,
      mapStyle = {
        height: this.state.height
      };

    return (
      <Map style={mapStyle}
           center={props.center}
           scrollWheelZoom={props.scrollWheelZoom}
           zoom={props.zoom}>

        <TileLayer url={props.mapServiceUrl}
                   noWrap={true}
                   minZoom={props.minZoom}
                   maxZoom={props.maxZoom}
                   attribution={props.attributions}/>

        {this.buildGeoJsonLayer()}
        {this.buildMarkers()}
        {this.buildPopupLayer()}
      </Map>
    );
  }

  buildGeoJsonLayer() {
    this.geoJsonLayerKey = this.props.geoJsonUpdated ? uniqueIdNumber++ : this.geoJsonLayerKey;

    return this.props.geoJson
      ? <GeoJSON data={this.props.geoJson}
                 style={defaultStyle}
                 key={this.geoJsonLayerKey}
                 onEachFeature={this.defineFeature.bind(this)}/>
      : undefined;
  }

  buildPopupLayer() {
    const props = this.props,
      Popup = props.PopupBody;

    return props.popup
      ? <Popup {...props.popup} onClose={props.onPopupClose}/>
      : undefined;
  }

  buildMarkers() {
    const props = this.props;

    if (!props.markers) {
      return;
    }

    return props.markers
      .map(marker => (
        <Marker position={marker.properties.latlng}
                icon={divIcon({
                  iconAnchor: [15, 30],
                  className: 'gg-markerIcon gg-markerIcon_red',
                  iconSize: [30, 30]
                })}
                key={marker.properties.name}
                onclick={() => props.onFeatureClick(marker)}/>
      ));
  }

  defineFeature(feature, layer) {
    const props = this.props,
      properties = feature.properties;

    if (properties.fillColor) {
      layer.setStyle({
        fillColor: properties.fillColor
      });
    }
    else {
      layer.on({
        mouseover: () => {
          layer.setStyle(defaultHighlightStyle);
        },
        mouseout: () => resetLayerStyle(layer),
      });
    }

    layer.on({
      click: function () {
        props.onFeatureClick(feature);

        if (!properties.fillColor) {
          setTimeout(() => resetLayerStyle(layer), 100);
        }
      }
    });
  }
}
