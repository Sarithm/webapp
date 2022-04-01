import React from "react";
import Jobdata from "./jobdata.json";
import axios from "axios";
import "./Jobdata.css";
import Fileuploadpage from "./Fileuploadpage";
//import { Container, Paper, Box } from "@mui/material";

const App = () => {
  return (
    <>
      <div className="posts">
        { axios({
            url: "https://mi2uxpz57d.execute-api.us-west-2.amazonaws.com/v1/resumes-sarithm/anutest/jobdesc.json",
            method: "GET",
            config: {
            headers: {
                "Content-Type":
                "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            },
            },
        }).then((response) => {
            console.log(response.data);
            return (
                <div key={response.data.id} className="post">
                  <h1> Job description</h1>
                  <h4>{response.data.position}</h4>
                  <p>{response.data.description}</p>
                </div>
              );
        })};
      </div>
    </>
  );
  
};

export default App;