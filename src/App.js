import React from "react";
import ReactDOM from "react-dom";
import BasicTree from "./BasicTree";
import DraggableItem from "./DraggableItem";
import getHierarchicalData from "./getHierarchicalData";
// import "./drag.css";
import "./boxes.css";
import Grid from '@material-ui/core/Grid';
import $ from 'jquery';


$('#box1').draggable({drag:updateLine,stop:updateLine});
$('#box2').draggable({drag:updateLine,stop:updateLine});

function updateLine2() { alert("stop");}
function updateLine() {
  l = $("#line");
  p1 = { x:parseInt($("#box1").css("left")), 
        y:parseInt($("#box1").css("top"))};
  p2 = { x:parseInt($("#box2").css("left")), 
        y:parseInt($("#box2").css("top"))};
  //alert(p1.x);
  l.attr('x1',p1.x);
  
    l.attr('x2',p2.x);
    l.attr('y1',p1.y);
    l.attr('y2',p2.y);
}

class App extends React.Component {

  componentDidMount() {
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
    
  }



  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render(){
    return (

    <div>
<DraggableItem itemName="item1"/>
<DraggableItem itemName="item2"/>

<svg preserveAspectRatio="xMinYMin" width="100%" height="100%" style={{padding:"0",margin:"0",border:"0",background:"blue"}}>
  <line id="line" x1="0" y1="0" x2="500" y2="550" stroke="black"/>
</svg>
<div id="box1"></div>
<div id="box2"></div>



      </div>




  );

  }
}
export default App;
