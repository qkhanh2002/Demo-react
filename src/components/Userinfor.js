import React from "react";
class UserInfor extends React.Component {
  state = {
    name: "khanh",
    address: "HaNoi",
    age: 23,
  };
  handleClick = (event) => {
    console.log("click");
    console.log("My name is", this.state.name);
    this.setState({
      name: "kha",
    });
  };
  onMouseOver = (event) => {
    console.log(event.pageX); // `pageX` đúng chính tả
  };
  render() {
    return (
      <div>
        My name is {this.state.name} and I'm from{this.state.address}
        <button onClick={this.handleClick}>Click me</button>
        <button onMouseOver={this.onMouseOver}>Hover me</button>
        Im a child
      </div>
    );
  }
}
export default UserInfor;
