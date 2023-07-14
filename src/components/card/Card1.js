

import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button,CardD } from 'reactstrap';
import axios from 'axios';
import { useState } from 'react';

const Card1 = (props) => {
  
  return (
    <Card style={{
      display: 'inline-block', width: 300, padding: 10,
      margin:10
  }} >
  <CardImg height="300px" width="100%" src={props.Imgurl} alt="GFG Logo" />

  <CardBody>
      <CardTitle tag="h5">{props.Title}</CardTitle>
      <CardText>{`- ${props.Author===null?'NA':props.Author}`}</CardText>
      <div>
  {props.Id===4?<div></div>:<Button onClick={()=>{
      
      axios
      .post('http://localhost:3001/news', {
        title: props.Title,
        urlToImage: props.Imgurl,
        author: props.Author
      })
      .then(response => {
        // Handle the successful response
        alert(`added to ReadList`)
      })
      .catch(error => {
        // Handle the error
        alert("error")
      });
    

    }}>Read Later</Button>}
    </div>
  </CardBody>
</Card>

  );
};

export default Card1;

