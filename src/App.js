import React, { Component } from "react";

import "./App.css";
import DynamicForm from "./components/DynamicForm";
const data = require("./data.json");

class App extends Component {
  state = {
    data
  };
  onSubmit(model) {
    model.id = +new Date();
    this.setState({
      data: [model, ...this.state.data]
    });
    this.state.data.push(model);
  }

  render() {
    const resultData = this.state.data;
    return (
      <div className="App">
        <DynamicForm
          title="registration"
          model={[
            { key: "name", label: "name", props: { require: true } },
            { key: "age", label: "age", type: "number" },
            { key: "doj", label: "doj", type: "text" }
          ]}
          onSubmit={model => {
            this.onSubmit(model);
          }}
        />
        <div className="appJsonData">{JSON.stringify(resultData)}</div>
      </div>
    );
  }
}

export default App;
