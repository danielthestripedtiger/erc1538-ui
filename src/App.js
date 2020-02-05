import React from "react";
import ReactDOM from "react-dom";
import BasicTree from "./BasicTree";
import DraggableItem from "./DraggableItem";
import DragPair from "./DragPair";
import getHierarchicalData from "./getHierarchicalData";
// import "./drag.css";
import "./boxes.css";
import Grid from '@material-ui/core/Grid';
import $ from 'jquery';
import 'jquery-ui/themes/base/core.css';
import 'jquery-ui/themes/base/theme.css';
import 'jquery-ui/themes/base/selectable.css';
import 'jquery-ui/ui/core';
import 'jquery-ui/ui/widgets/selectable';
import 'jquery-ui/ui/widgets/draggable';
import { SteppedLineTo } from 'react-lineto';
import ConnectElements from 'react-connect-elements';
import { Line } from 'react-lineto';

var line = "";
var fromX = ""; 
var fromY = ""; 
var toX = ""; 
var toY = "";

function adjustLine(from, to, line){

  var fT = from.offsetTop  + from.offsetHeight/2;
  var tT = to.offsetTop    + to.offsetHeight/2;
  var fL = from.offsetLeft + from.offsetWidth/2;
  var tL = to.offsetLeft   + to.offsetWidth/2;
  
  var CA   = Math.abs(tT - fT);
  var CO   = Math.abs(tL - fL);
  var H    = Math.sqrt(CA*CA + CO*CO);
  var ANG  = 180 / Math.PI * Math.acos( CA/H );

  if(tT > fT){
      var top  = (tT-fT)/2 + fT;
  }else{
      var top  = (fT-tT)/2 + tT;
  }
  if(tL > fL){
      var left = (tL-fL)/2 + fL;
  }else{
      var left = (fL-tL)/2 + tL;
  }

  if(( fT < tT && fL < tL) || ( tT < fT && tL < fL) || (fT > tT && fL > tL) || (tT > fT && tL > fL)){
    ANG *= -1;
  }
  top-= H/2;

  line.style["-webkit-transform"] = 'rotate('+ ANG +'deg)';
  line.style["-moz-transform"] = 'rotate('+ ANG +'deg)';
  line.style["-ms-transform"] = 'rotate('+ ANG +'deg)';
  line.style["-o-transform"] = 'rotate('+ ANG +'deg)';
  line.style["-transform"] = 'rotate('+ ANG +'deg)';
  line.style.top    = top+'px';
  line.style.left   = left+'px';
  line.style.height = H + 'px';
}

class App extends React.Component {

  

  componentDidMount() {
      var dragItem = document.querySelector("#div1");
      var container = document.body;
      
      var active = false;
      var currentX;
      var currentY;
      var initialX;
      var initialY;
      var xOffset = 0;
      var yOffset = 0;
      
      container.addEventListener("touchstart", dragStart, false);
      container.addEventListener("touchend", dragEnd, false);
      container.addEventListener("touchmove", drag, false);
      
      container.addEventListener("mousedown", dragStart, false);
      container.addEventListener("mouseup", dragEnd, false);
      container.addEventListener("mousemove", drag, false);
      
      function dragStart(e) {
        if (e.type === "touchstart") {
          initialX = e.touches[0].clientX - xOffset;
          initialY = e.touches[0].clientY - yOffset;
        } else {
          initialX = e.clientX - xOffset;
          initialY = e.clientY - yOffset;
        }
      
        if (e.target === dragItem) {
          active = true;
        }
      }
      
      function dragEnd(e) {
        initialX = currentX;
        initialY = currentY;
      
        active = false;

      }
      
      function drag(e) {
        if (active) {
      
          e.preventDefault();
      
          if (e.type === "touchmove") {
            currentX = e.touches[0].clientX - initialX;
            currentY = e.touches[0].clientY - initialY;
          } else {
            currentX = e.clientX - initialX;
            currentY = e.clientY - initialY;
          }
      
          xOffset = currentX;
          yOffset = currentY;
      
          setTranslate(currentX, currentY, dragItem);


          // this.setState(
          //   {
          //     currX: currentX,
          //     currY: currentY
          //   }
          // )
        }
      }
      
      function setTranslate(xPos, yPos, el) {
        el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";

        adjustLine(
          document.getElementById('div1'), 
          document.getElementById('div2'),
          document.getElementById('line')
        );
      }

    adjustLine(
      document.getElementById('div1'), 
      document.getElementById('div2'),
      document.getElementById('line')
    );
    
    // fromX = document.getElementById("item1").getBoundingClientRect().right; 
    // fromY = document.getElementById("item1").getBoundingClientRect().top; 
    // toX = document.getElementById("item2").getBoundingClientRect().right; 
    // toY = document.getElementById("item2").getBoundingClientRect().top;
    
//     line = <svg height="210" width="500">
//   <line x1={fromX} y1={fromY} x2={toX} y2={toY} style={{stroke:'rgb(255,0,0)','strokeWidth':2}} />
// </svg>;

// this.setState({
//   drawLine: line
// })
    // $('#item1').draggable({drag:updateLine,stop:updateLine});
    // $('#item2').draggable({drag:updateLine,stop:updateLine});
 
    // var l = $("#line");
    // var p1 = {};
    // var p2 = {};
    // var box1 = $("#item1");
    // var box2 = $("#item2");

     
    // console.log("i1 coords: "+ReactDOM
    // .findDOMNode(this.refs['item1'])
    // .getBoundingClientRect().top);

    // var componentVar=this;

    // function updateLine2() { alert("stop");}
    // function updateLine() {
    //   p1 = { x:parseInt(ReactDOM
    //     .findDOMNode(componentVar.refs['item1'])
    //     .getBoundingClientRect().left), 
    //         y:parseInt(ReactDOM
    //           .findDOMNode(componentVar.refs['item1'])
    //           .getBoundingClientRect().top)};
    //   p2 = { x:parseInt(ReactDOM
    //     .findDOMNode(componentVar.refs['item2'])
    //     .getBoundingClientRect().left), 
    //         y:parseInt(ReactDOM
    //           .findDOMNode(componentVar.refs['item2'])
    //           .getBoundingClientRect().top)};
    //   //alert(p1.x);
    //   l.attr('x1',p1.x);
    //   l.attr('y1',p1.y);     
    //     l.attr('x2',p2.x);

    //     l.attr('y2',p2.y);
    // }

    // var dragItem = document.querySelector("#item");
    // var dragItem2 = document.querySelector("#item2");
    // var container = document.querySelector("#container");
    
    // var active = false;
    // var currentX;
    // var currentY;
    // var initialX;
    // var initialY;
    // var xOffset = 0;
    // var yOffset = 0;
    
    // container.addEventListener("touchstart", dragStart, false);
    // container.addEventListener("touchend", dragEnd, false);
    // container.addEventListener("touchmove", drag, false);
    
    // container.addEventListener("mousedown", dragStart, false);
    // container.addEventListener("mouseup", dragEnd, false);
    // container.addEventListener("mousemove", drag, false);
    
    // function dragStart(e) {
    //   if (e.type === "touchstart") {
    //     initialX = e.touches[0].clientX - xOffset;
    //     initialY = e.touches[0].clientY - yOffset;
    //   } else {
    //     initialX = e.clientX - xOffset;
    //     initialY = e.clientY - yOffset;
    //   }
    
    //   if (e.target === dragItem) {
    //     active = true;
    //   }

    //   if (e.target === dragItem2) {
    //     active = true;
    //   }
    // }
    
    // function dragEnd(e) {
    //   initialX = currentX;
    //   initialY = currentY;
    
    //   active = false;
    // }
    
    // function drag(e) {
    //   if (active) {
    
    //     e.preventDefault();
    
    //     if (e.type === "touchmove") {
    //       currentX = e.touches[0].clientX - initialX;
    //       currentY = e.touches[0].clientY - initialY;
    //     } else {
    //       currentX = e.clientX - initialX;
    //       currentY = e.clientY - initialY;
    //     }
    
    //     xOffset = currentX;
    //     yOffset = currentY;
    
    //     setTranslate(currentX, currentY, dragItem);
    //     setTranslate(currentX, currentY, dragItem2);
    //   }
    // }
    
    // function setTranslate(xPos, yPos, el) {
    //   el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
    // }
    // console.log(document.getElementById('item1').getBoundingClientRect())

    
  }


  updateCoords = () => {
    console.log("Event: ");
  }

  constructor(props) {
    super(props);    
    
    this.state = {

    }
  }

  render(){
    return (






<div id="content"><div id="div1" class="mydiv"/>
 
    {/* <DraggableItem itemName="item1" ref="itemA"> </DraggableItem> */}
    
  <div id="div2" class="mydiv"/>
    {/* <DraggableItem itemName="item2" ref="itemB"/></div> */}
  <div id="line"></div>

  
  {/* <DraggableItem itemName="item1" ref="itemA" onChange={this.updateCoords}/>
<DraggableItem itemName="item2" ref="itemB"/> */}

{/* 
        <div className="elements">

        <div className="element element1" >        <DraggableItem itemName="item1" ref="itemA"/>

</div>
        <div className="element element2" > <DraggableItem itemName="item2" ref="itemB"/> </div>
    </div>
    <ConnectElements
      selector=".elements"
      elements={[{ from: '.element1', to: '.element2' }]}
    />
 */}
 {/* <svg height="210" width="500">
  <line x1="0" y1="0" x2="200" y2="200" style={{stroke:'rgb(255,0,0)','strokeWidth':2}} />
</svg> */}
{/* <DragPair> */}

{/* </DragPair> */}

{/* <svg height="210" width="500">
  <line x1="0" y1="0" x2="100" y2="100" style={{stroke:'rgb(255,0,0)','strokeWidth':2}} />
</svg> */}

{/* { fromX = document.getElementById("item1").getBoundingClientRect().right, 
fromY = document.getElementById("item1").getBoundingClientRect().top,
    toX = document.getElementById("item2").getBoundingClientRect().right, 
    toY = document.getElementById("item2").getBoundingClientRect().top
} */}
  {/* <svg height="210" width="500">
  <line x1={fromX} y1={fromY} x2={toX} y2={toY} style={{stroke:'rgb(255,0,0)','strokeWidth':2}} />
</svg>; */}

</div>
  );

  }
}
export default App;
