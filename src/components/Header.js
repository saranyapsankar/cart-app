import React from "react";

class Header extends React.Component {
  state = {
    count: ""
  };
  render() {
    return (
      <div className="header">
        <div className="title">
          <h2> Contact Manager</h2>
        </div>
        <div>
          <input
            className="input"
            type="text"
            name="count"
            placeholder="Count"
            value={this.state.count}
            onChange={(e) => this.setState({ count: e.target.value })}
          />
          <button
            className="btn"
            onClick={() => this.props.addSeatHandler(this.state)}
          >
            Add
          </button>
        </div>
      </div>
    );
  }
}

export default Header;
