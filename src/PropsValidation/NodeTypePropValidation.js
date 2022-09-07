import PropTypes from "prop-types";

//###### When Not Validating props #######
/* function SiteLink(props) {
    return (
        <a href={props.url}>{props.linkName}</a>
    );
}
export default SiteLink; */

//#######Validating Nodes#######

function SiteLink(props) {
    const correctNodeType = ["numbers", "strings", "elements", "arrays", "containing", "numbers", "strings", "elements"]
    const condi = props.linkName in correctNodeType
    console.error(`The type of prop linkName is correct?  ${condi}`)
    return (
        <>
            <a href={props.url}>{props.linkName}</a>

        </>
    );
}

SiteLink.propTypes = {
    linkName: PropTypes.node,
};

export default SiteLink;