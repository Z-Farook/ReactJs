import Map from '../DefaultProps/Map';
import StoreList from '../DefaultProps/StoreList';
function InFuncCompoReactDefualtProppObject(props) {
    return (
        <>
            <div id="map-container">
                <Map latitude={props.latitude} longitude={props.longitude} />
            </div>
            <div id="store-list">
                <StoreList latitude={props.latitude} longitude={props.longitude} />
            </div>
        </>
    )
}
InFuncCompoReactDefualtProppObject.defaultProps = {
    latitude: "37.3230",
    longitude: "122.0322"
}
export default InFuncCompoReactDefualtProppObject