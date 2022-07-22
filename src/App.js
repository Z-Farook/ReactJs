/* eslint-disable no-unused-vars*/
import React from 'react';
import Farms from './components/PassingProps';
import './App.css';
import Foo from './components/Listing4-11';
import Counter from './components/Listing4-12';
import BasicFigure from './components/Listing4-14 ';
import FigureListNoProp from './components/PropExample/SendNoProp';
import FigureListWithProp from './components/PropExample/DemoSendProp';
import ToDoClass from './components/ClassComponent/classComponenet';
import ToDoFunction from './components/FunctionComponents/FuncComponent'
import { ToDoArrowFunction } from './components/FunctionComponents/ArrowFuncComponent';
import ThingsILike from './components/ThisPropsChildren/ThingsILike';
import NavBar from './components/CloneElement/NavBar';
import {NavItem} from './components/CloneElement/NavItem';
import NavBaronClick from './components/CloneElement/NavBaronClick';
import RenderOnclickButtonViaThisDotProps from './components/CloneElement/NavItemForOnclickReder';

function App() {
  const [personName, setPersonName] = React.useState('')
  return (
    <div className="App">
      <h1> Hello {personName}</h1>
      <input type="text" onChange={(e) => setPersonName(e.target.value)} />
      {/* <Farms></Farms> */}
      {/* <Foo></Foo> */}
      {/* <Counter></Counter> */}
      {/* <FigureListNoProp></FigureListNoProp> */}
      {/* <FigureListWithProp></FigureListWithProp> */}
      {/* <ToDoClass></ToDoClass>       */}
      {/* <ToDoFunction></ToDoFunction> */}
      {/* <ToDoArrowFunction></ToDoArrowFunction> */}
      {/* <Counter/> */}
      {/* <ThingsILike/> */}
      {/* <NavItem></NavItem> */}
      <NavBaronClick  onClick={()=>{console.log('clicked');}}>
        <RenderOnclickButtonViaThisDotProps></RenderOnclickButtonViaThisDotProps>
        <RenderOnclickButtonViaThisDotProps></RenderOnclickButtonViaThisDotProps>
        <RenderOnclickButtonViaThisDotProps></RenderOnclickButtonViaThisDotProps>
      </NavBaronClick>
    
    </div>
  );
}

export default App;
