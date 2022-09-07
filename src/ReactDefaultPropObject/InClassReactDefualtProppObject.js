import Map from '../DefaultProps/Map';
import StoreList from '../DefaultProps/StoreList';
import { Component } from 'react';
class InClassReactDefualtProppObject extends Component {
    /* defaultProps in class components inside the body */
    static defaultProps = {
        latitude: "37.3230",
        longitude: "122.0322"
    }
    render() {
        return (
            <>
                <div id="map-container">
                    <Map
                        latitude={this.props.latitude}
                        longitude={this.props.longitude}
                    />
                </div>
                <div id="store-list">
                    <StoreList
                        latitude={this.props.latitude}
                        longitude={this.props.longitude}
                    />
                </div>
            </>
        )
    }
     /* defaultProps in class components outside the body */
    //  static defaultProps = {
    //     latitude: "37.3230",
    //     longitude: "122.0322"
    // }
}
export default InClassReactDefualtProppObject;