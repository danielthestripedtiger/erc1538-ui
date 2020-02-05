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

class DragPair extends React.Component {

  componentDidMount() {
var draggable1 = this.props.children[0];
var draggable2 = this.props.children[0];
// console.log(draggable1.props.itemName);
  }

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render(){
    return (

    <div>
    {/* <svg height="210" width="500">
  <line x1="0" y1="0" x2="200" y2="200" style={{stroke:'rgb(255,0,0)','strokeWidth':2}} />
</svg> */}
    </div>

  );

  }
}
export default DragPair;
