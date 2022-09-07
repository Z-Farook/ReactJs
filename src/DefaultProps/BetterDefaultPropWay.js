import Map from './Map';
import StoreList from './StoreList';
function BetterDefaultPropWay(props) {
    const latitude = props.latitude || "37.3230";
    const longitude = props.longitude || "122.0322";
    return (
        <>
            <div id="map-container">
                <Map
                    latitude={latitude}
                    longitude={longitude}
                />
            </div>
            <div id="store-list">
                <StoreList
                    latitude={latitude}
                    longitude={longitude}
                />
            </div>
        </>
    )
}
export default BetterDefaultPropWay;