import React from "react";
import "./css/DynamicForm.css";
export default class DynamicForm extends React.Component {
  constructor(props) {
    super(props);
  }
  onSubmit(e) {
    e.preventDefault();
    if (this.props.onSubmit) {
      this.props.onSubmit(this.state);
    }
  }
  onChange(e, key) {
    this.setState({
      [key]: this[key].value
    });
  }
  renderForm = () => {
    let model = this.props.model;
    let formUi = model.map(data => {
      let key = data.key;
      let type = data.type;
      let props = data.props;
      return (
        <div key={key}>
          <label key={"1" + data.key} htmlfrom={data.key}>
            {data.label}
          </label>
          <input
            {...props}
            ref={key => {
              this[data.key] = key;
            }}
            type={type}
            key={"i" + data.key}
            onChange={e => this.onChange(e, key)}
          />
        </div>
      );
    });
    return formUi;
  };
  render() {
    console.log(this.props);
    let title = this.props.title || "dynamic form";
    return (
      <div className="Accordion">
        gangesh
        {this.renderForm()}
        <h3>{title}</h3>
        <form
          onSubmit={e => {
            this.onSubmit(e);
          }}
        >
          <div>
            <button type="submit">submit</button>
          </div>
        </form>
      </div>
    );
  }
}
