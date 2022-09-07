import PropTypes from "prop-types";
function WelcomeMessage(props) {
    return (<p>Welcome back, {props.firstName}!</p>);
}


 /** 
  * prop validation 
  * it does not break the code ONLY SHOW a warring in the browser console
  */
WelcomeMessage.propTypes = {
    firstName:PropTypes.string.isRequired
   }
export default WelcomeMessage;
