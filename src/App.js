import './App.css';
import Contact from './CustomPropValidation/Contact';
import BetterDefaultPropWay from './DefaultProps/BetterDefaultPropWay';
import StoreNearYou from './DefaultProps/StoresNearYou';
import TryPropChange from './PropsMutation/tryPropChange'
import BorderBox from './PropsValidation/BorderBox';
import FamilyTree from './PropsValidation/FamilyTree';
import SiteLink from './PropsValidation/NodeTypePropValidation';
import WelcomeMessage from './PropsValidation/WelcomeMessage';
import InClassReactDefualtProppObject from './ReactDefaultPropObject/InClassReactDefualtProppObject';
import InFuncCompoReactDefualtProppObject from './ReactDefaultPropObject/InFuncCompoReactDefualtProppObject';
import {Person, Cat} from './UtilFiles/Person'

function App() {
  return (
    <div className="App">
      <WelcomeMessage firstName="ZAHID"></WelcomeMessage>
      {/* <TryPropChange></TryPropChange> */}
      {/* check the prop warning by turning on the next line  */}
      {/* <WelcomeMessage firstName={["ZAHID", "TEST"]}></WelcomeMessage> */}
      {/* <SiteLink url="http://example.com" linkName={{ name: 'Example' }} /> */}
      {/* <BorderBox>
        <p>The first paragraph</p>
        <p>The second paragraph</p>
      </BorderBox> */}
      {/* <FamilyTree  father={new Person("Zahid")}></FamilyTree> */}
      {/* give the wrong prop type: CAT */}
      {/* <FamilyTree  father={new Cat("Pussy cat")}></FamilyTree> */}
      {/* <Contact fullName={"Zahid"} phone={"068 711 1384"}/> */}
      {/* <StoreNearYou latitude="45414" longitude="12345"/> */}
      {/* <BetterDefaultPropWay latitude="45414" longitude="12345"/> */}
      {/* <InClassReactDefualtProppObject></InClassReactDefualtProppObject> */}
      {/* <InFuncCompoReactDefualtProppObject></InFuncCompoReactDefualtProppObject> */}
      
    </div>
  );
}

export default App;
