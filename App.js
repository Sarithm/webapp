import React from "react";
import Jobdata from "./jobdata.json";

const App = () => {
  return (
    <>
      <div className="posts">
        {Jobdata.map((post) => {
          return (
            <div key={post.id} className="post">
              <h1> Job description</h1>
              <h4>{post.position}</h4>
              <p>{post.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;