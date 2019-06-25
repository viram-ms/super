import React, { Component, Fragment } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    marginTop: 10
  },
});




type Position = [number, number]

type Props = {|
  content: string,
  position: Position,
|}

type MarkerData = {| ...Props, key: string |}

const MyPopupMarker = ({ content, position }: Props) => (
  <Marker position={position}>
    <Popup>{content}</Popup>
  </Marker>
)

const MyMarkersList = ({ markers }: { markers: Array<MarkerData> }) => {
  const items = markers.map(({ key, ...props }) => (
    <MyPopupMarker key={key} {...props} />
  ))
  return <Fragment>{items}</Fragment>
}



 class Location extends Component{
  // markers to point locations
  state = {
    markers: [
      { key: 'marker1', position: [18.9537,72.7979], content: 'My first popup' },
  
    ],
  }

  render() {
    const classes = this.props;
    return (
      <div className={classes.root}>
                <Map center={[18.9537,  72.7979]} zoom={15}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MyMarkersList markers={this.state.markers} />
      </Map>
      </div>

    )
  }
}
export default withStyles(styles)(Location);