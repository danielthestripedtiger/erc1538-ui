import React from "react";
import ReactDOM from "react-dom";
import BasicTree from "./BasicTree";
import getHierarchicalData from "./getHierarchicalData";
// import "./styles.css";
import Grid from '@material-ui/core/Grid';

function App() {
  let data = getHierarchicalData();
  return (
    <div className="App">
       <Grid container spacing={3}>
       <Grid item xs={3}>
      <h1>Hello CodeSandbox</h1>
      <h1>Hello CodeSandbox</h1>
      <h1>Hello CodeSandbox</h1>
      <h1>Hello CodeSandbox</h1>
      <h1>Hello CodeSandbox</h1>

      </Grid>
      <Grid item xs={6}>

      <BasicTree data={ data } />
      </Grid>
      


      <Grid item xs={3}>


      </Grid>
      
      </Grid>
    </div>
  );
}
export default App;
