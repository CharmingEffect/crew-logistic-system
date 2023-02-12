import React, { Component } from "react";

class Widget extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="row">
          <div className="col-4">
            <i className={this.props.icon_name}></i>
          </div>
          <div className="col-8 text-right">
            <span> {this.props.name}</span>
            <h2 className="font-bold">{this.props.count}</h2>
            <span className="font-bold">{this.props.a}</span>
            <p className="font-bold">{this.props.b}</p>
            <p className="font-bold">{this.props.c}</p>
          </div>
        </div>
      </>
    );
  }
}

export default Widget;
