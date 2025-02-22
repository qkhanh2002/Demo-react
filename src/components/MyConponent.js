import React from "react";
import UserInfor from "./Userinfor";
import DisplayInfor from "./Displayinfor";
class MyComponent extends React.Component {
  state = {
    listUser: [
      { id: 1, name: "khanh", age: 23 },
      { id: 2, name: "kha", age: 24 },
      { id: 3, name: "k", age: 25 },
    ],
  };
  render() {
    return (
      <div>
        <UserInfor></UserInfor>
        <br></br>
        <DisplayInfor listUser={this.state.listUser}></DisplayInfor>
      </div>
    );
  }
}
export default MyComponent;
