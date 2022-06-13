import React, { Component, PureComponent } from "react";
import { Text, StyleSheet, View } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-web";

class Test2 extends Component {
  constructor(props) {
    // Calling super class constructor
    super(props);

    // Creating state
    this.state = {
      data: this.props.name,
    };

    // Binding event handler
    this.handleEvent = this.handleEvent.bind(this);
  }

  handleEvent() {
    console.log(this.props.name);
  }

  render() {
    return (
      <View
        style={{
          width: "100%",
          height: "10%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: "25%",
            height: "50%",
            backgroundColor: "lightgreen",
            borderRadius: 100,
            margin: 10,
          }}
        >
          <TextInput
            style={{ flex: 1, justifyContent: "center", paddingLeft: 10 }}
            defaultValue={this.state.data}
          ></TextInput>
        </View>
        <TouchableOpacity
          style={{
            width: "10%",
            height: "50%",
            borderRadius: 50,
            backgroundColor: "lightblue",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={this.handleEvent}
        >
          <Text>Click</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

class Test extends Component {
  state = { name: "", open: "no" };

  opene() {
    this.setState({ opene: "yes" });
    //<Test2 name={this.state.name} />
    //console.log(this.state.name);
    //this.render(        <View style={{width:'10%',height:'20%',backgroundColor:'yellow'}}></View>)
  }
  render() {
    return (
      <>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <View
            style={{
              width: "25%",
              height: "5%",
              backgroundColor: "green",
              borderRadius: 100,
              margin: 10,
            }}
          >
            <TextInput
              style={{ flex: 1, justifyContent: "center", paddingLeft: 10 }}
              onChangeText={(val) => this.setState({ name: val })}
            ></TextInput>
          </View>
          <TouchableOpacity
            style={{
              width: "10%",
              height: "5%",
              borderRadius: 50,
              backgroundColor: "blue",
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={
              this.state.open == "no"
                ? () => this.setState({ open: "yes" })
                : () => this.setState({ open: "no" })
            }
          >
            <Text>{this.state.open == "no" ? "Open" : "Close"}</Text>
          </TouchableOpacity>
          {this.state.open == "yes" && <Test2 name={this.state.name} />}
        </View>
      </>
    );
  }
}

export default Test;
