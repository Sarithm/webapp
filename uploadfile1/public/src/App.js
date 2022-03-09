import axios from "axios";
import React, { Component } from "react";
class App extends Component {
  state = {
    file: null,
  };

  handleFile(e) {
    let file = e.target.files[0];
    this.setState({ file: file });
  }

  handleUpload(e) {
    let file = this.state.file;
    let formdata = new FormData();
    formdata.append("", file);
    formdata.append("name", "resumes");
    axios({
      url: "https://mi2uxpz57d.execute-api.us-west-2.amazonaws.com/v1/resumes-sarithm/anutest/testfile",
      method: "POST",
      config: {
        headers: {
          "Content-Type":
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        },
      },

      data: formdata,
    }).then(
      (res) => {},
      (err) => {}
    );
  }

  render() {
    return (
      <div className="app">
        <form>
          <div className="">
            <input type="file" name="file" onChange={(e) => this.handleFile} />
          </div>
          <br />

          <button type="button" onClick={(e) => this.handleUpload(e)}>
            Upload
          </button>
        </form>
      </div>
    );
  }
}
export default App;
