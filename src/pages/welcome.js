import React from "react";
import { ipcRenderer } from "electron";
import { Text, TextInput, View } from "react-native-electron";

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.showAlert = this.showAlert.bind(this);
    this.state = { text: "" };
  }

  componentDidMount = () => {
    console.log(this.props.clients);
  };

  _handleClick = () => {
    var res = ipcRenderer.sendSync("get-result", { name: "react" });
    alert(res);
  };
  showAlert() {
    alert("Hello world!");
  }

  render() {
    console.log(this.props.clients);
    return (
      <div
        className="App"
        style={{ display: "flex", flexFlow: "row", height: "100vh" }}
      >
        <button
          onClick={() => this.props.actions.changerNomClient("1", "toto")}
        >
          changer nom
        </button>
      </div>
    );
  }
}

export default Welcome;
