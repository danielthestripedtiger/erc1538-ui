import React from "react";
import styled from 'styled-components';

const Item = styled.div`
width: 500px;
height: 100px;
background-color: rgb(245, 230, 99);
border: 5px solid rgba(136, 136, 136, .5);
border-radius: 5%;
touch-action: none;
user-select: none;
&:active {
    background-color: rgba(168, 218, 220, 1.00);
  };
&:hover {
    cursor: pointer;
    border-width: 10px;
 }
`;

class DraggableItem extends React.Component {

  componentDidMount() {
    var dragItem = document.querySelector("#"+this.props.itemName);
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
    }
    
  }

  constructor(props) {
    super(props);
    this.state = {
      currX : 0,
      currY : 0
    }
  }

  render(){
    return (

    <div>
      <Item id={this.props.itemName} />
    </div>

  );

  }
}
export default DraggableItem;
