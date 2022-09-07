import Map from "./Map";
import StoreList from "./StoreList";
function StoreNearYou(props) {
    return (
        <>
            <div id="map-container">
                {/* <MAp latitude={props.latitude} longitude={props.longitude}></MAp> */}
                <p>Map</p>
                <Map
                    /* default prop using || */
                    latitude={props.latitude || "37.3230"}
                    longitude={props.longitude || "122.0322"}>
                </Map>
            </div>
            <div>
                <p>StoreList</p>
                {/* <StoreList latitude={props.latitude} longitude={props.longitude}></StoreList> */}
                <StoreList
                    /* default prop using || */
                    latitude={props.latitude || "37.3230"}
                    longitude={props.longitude || "122.0322"}
                />
            </div>
        </>
    );
}

export default StoreNearYou;