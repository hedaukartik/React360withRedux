import React from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  asset,
  NativeModules
} from "react-360";

const { AudioModule } = NativeModules;
AudioModule.playEnvironmental({
  source: asset("static_assets/ChillingMusic.wav"),
  volume: 0.9 // play at 3/10 original volume
});

import GazeButton from "react-360-gaze-button";

finalSelectedItem = {
  plan: undefined,
  planDescription: undefined,
  device: undefined,
  deviceDetails: undefined,
  orderToken: 27201
};
export class homePanel extends React.Component {
  constructor(options) {
    super(options);
  }

  setGazed = index1 => {};
  render() {
    return (
      <View style={styles2.greetingBox}>
        <Text style={styles2.greetingHeader}>
          {" "}
          Amdocs Virtual Reality for Ordering{" "}
        </Text>
        <Text style={styles2.greetingHeader}> {"(AVR-O)"} </Text>
        <View>
          <Text style={styles2.greetingHeader1}> {"Start Ordering .."} </Text>
          <Image
            source={asset("blue.png")}
            style={{ height: 200, width: 200 }}
          />
        </View>
      </View>
    );
  }
}

export class endPanel extends React.Component {
  constructor(options) {
    super(options);
    this.state = {
      summary: {
        planName: finalSelectedItem.plan ? finalSelectedItem.plan : "",
        planNamedecrptipn: finalSelectedItem.planDescription
          ? finalSelectedItem.planDescription
          : "",
        device: finalSelectedItem.device ? finalSelectedItem.device : "",
        deviceDetails: finalSelectedItem.deviceDetails
          ? finalSelectedItem.deviceDetails
          : ""
      },
      token: ""
    };
  }

  setGazed = index1 => {
    if (finalSelectedItem.device && finalSelectedItem.plan) {
      if (finalSelectedItem.orderToken + "A" != this.state.token ) {
        this.setState({
          token: finalSelectedItem.orderToken + 1 + "A"
        });
      finalSelectedItem.orderToken = finalSelectedItem.orderToken;
      }
        
    } else {
      this.setState({ token: "Please select plan and device" });
    }
  };

  //onExit ={this.setState({token : ""})}
  exit1 = () => {
    this.setState({ token: "" });
  };

  render() {
    const {
      planName,
      planNamedecrption,
      device,
      deviceDetails
    } = this.state.summary;
    return (
      <GazeButton
        duration={1000}
        onExit={this.exit1.bind(this)}
        onClick={this.setGazed.bind(this, 1)}
        render={(remainingTime, isGazed) => (
          <View style={styles2.greetingBox}>
            <Text style={styles2.greetingHeader}>
              Thank you for ordering with Amdocs VRO !!!{" "}
            </Text>

            <Text style={styles2.greetingHeader}>
              Your Order Token ID is :{" "}
            </Text>
            <Text style={styles2.greetingHeader2}> {this.state.token} </Text>
          </View>
        )}
      />
    );
  }
}

export default class plansPanel extends React.Component {
  constructor(options) {
    super(options);
    this.state = {
      plans: [
        {
          name: "Combo 1",
          decrptipn: " (100MB Local Data, 100 mins of Outgoing Calls)",
          gazed: false,
          selected: false
        },
        {
          name: "Combo 2",
          decrptipn:
            " (2GB Local Data, 200 mins of Outgoing Calls, Free Incoming Calls, 1000 Local SMS/MMS, Singtel WiFi)",
          gazed: false,
          selected: false
        },
        {
          name: "Combo 3",
          decrptipn:
            " (3GB Local Data, Free Incoming Calls, Unlimited* Outgoing Calls)",
          gazed: false,
          selected: false
        },
        {
          name: "Combo 6",
          decrptipn:
            " (6GB Local Data, Free Incoming Calls, Unlimited* mins of Outgoing Calls)",
          gazed: false,
          selected: false
        }
      ]
    };
  }

  setGazed = index1 => {
    let updateData = [];
    this.state.plans.map((item, ind) => {
      if (index1 == ind) {
        updateData.push({
          name: item.name,
          decrptipn: item.decrptipn,
          gazed: true,
          selected: true
        });
        finalSelectedItem.plan = item.name;
        finalSelectedItem.decrptipn = item.name;
        finalSelectedItem.orderToken = finalSelectedItem.orderToken + 1;
      } else {
        updateData.push({
          name: item.name,
          gazed: false,
          selected: false,
          decrptipn: item.decrptipn
        });
      }
    });

    this.setState({
      plans: [...updateData]
    });
  };
  render() {
    const { gazed } = this.state;
    return (
      <View style={styles.panelPlans}>
        <Text style={styles2.greetingHeader}>Please Select A Plan: </Text>
        {this.state.plans.map((item, index) => {
          return (
            <GazeButton
              duration={1000}
              onClick={this.setGazed.bind(this, index)}
              render={(remainingTime, isGazed) => (
                <View
                  style={
                    item.gazed ? styles.greetingBo_selected : styles.greetingBox
                  }
                  key={item.name}
                >
                  <Text style={styles.greeting}>
                    {item.gazed
                      ? item.name + "    SELECTED"
                      : isGazed
                      ? item.name +
                        "    Selecting...in " +
                        remainingTime +
                        "sec"
                      : item.name}
                  </Text>
                  <Text style={styles.greetingBox1}>{item.decrptipn}</Text>
                </View>
              )}
            />
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  panelPlans: {
    // Fill the entire surface
    width: 500,
    height: 500,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    justifyContent: "center",
    alignItems: "center"
  },

  greetingBo_selected: {
    backgroundColor: "#639dda",
    borderColor: "#000",
    color: "#d6424c",
    borderWidth: 2,
    padding: 18,
    width: 500,
    height: 100
  },

  greetingBox: {
    padding: 18,
    backgroundColor: "#000000",
    borderColor: "#639dda",
    borderWidth: 2,
    width: 500,
    height: 110
  },
  greeting: {
    fontSize: 30
  },
  greetingBox1: {
    fontSize: 18
  }
});

export class devicePanel extends React.Component {
  constructor(options) {
    super(options);
    this.state = {
      devices: [
        {
          name: "Iphone XR",
          decrptipn: "Lorem Ipsum, Lorem Ipsum, Lorem Ipsum",
          gazed: false,
          selected: false
        },
        {
          name: "Samsung Galaxy S8",
          decrptipn: "Lorem Ipsum, Lorem Ipsum, Lorem Ipsum",
          gazed: false,
          selected: false
        },
        {
          name: "Iphone 6s",
          decrptipn: "Lorem Ipsum, Lorem Ipsum, Lorem Ipsum",
          gazed: false,
          selected: false
        },
        {
          name: "Note 7",
          decrptipn: "Lorem Ipsum, Lorem Ipsum, Lorem Ipsum",
          gazed: false,
          selected: false
        }
      ]
    };
  }

  setGazed = index1 => {
    let updateData = [];
    this.state.devices.map((item, ind) => {
      if (index1 == ind) {
        updateData.push({
          name: item.name,
          gazed: true,
          selected: true
        });
        finalSelectedItem.device = item.name;
        finalSelectedItem.deviceDetails = item.name;
        finalSelectedItem.orderToken = finalSelectedItem.orderToken + 1;
      } else {
        updateData.push({
          name: item.name,
          gazed: false,
          selected: false
        });
      }
    });

    this.setState({
      devices: [...updateData]
    });
  };
  render() {
    const { gazed } = this.state;
    return (
      <View style={styles1.panelPlans}>
        <Text style={styles2.greetingHeader}>Please Select A Device: </Text>
        {this.state.devices.map((item, index) => {
          return (
            <GazeButton
              duration={1000}
              onClick={this.setGazed.bind(this, index)}
              render={(remainingTime, isGazed) => (
                <View
                  style={
                    item.gazed ? styles.greetingBo_selected : styles.greetingBox
                  }
                  key={item.name}
                >
                  <Text style={styles1.greeting}>
                    {item.gazed
                      ? item.name + "    SELECTED"
                      : isGazed
                      ? item.name +
                        "    Selecting...in " +
                        remainingTime +
                        "sec"
                      : item.name}
                  </Text>
                </View>
              )}
            />
          );
        })}
      </View>
    );
  }
}

const styles1 = StyleSheet.create({
  panelPlans: {
    // Fill the entire surface
    width: 500,
    height: 500,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    justifyContent: "center",
    alignItems: "center"
  },
  panelDevices: {
    // Fill the entire surface
    width: 500,
    height: 500,
    backgroundColor: "rgba(255, 255, 255, 0.4)"
  },
  greetingBox: {
    padding: 20,
    backgroundColor: "#000000",
    borderColor: "#639dda",
    borderWidth: 2,
    width: 500,
    height: 100
  },
  greeting: {
    fontSize: 30
  }
});

export class summmaryPanel extends React.Component {
  constructor(options) {
    super(options);
    this.state = {
      summary: {
        planName: finalSelectedItem.plan ? finalSelectedItem.plan : "",
        planNamedecrptipn: finalSelectedItem.planDescription
          ? finalSelectedItem.planDescription
          : "",
        device: finalSelectedItem.device ? finalSelectedItem.device : "",
        deviceDetails: finalSelectedItem.deviceDetails
          ? finalSelectedItem.deviceDetails
          : ""
      },
      isdeviceOn: ""
    };
  }

  setGazed = index1 => {
    this.setState({
      summary: {
        planName: finalSelectedItem.plan ? finalSelectedItem.plan : "",
        planNamedecrptipn: finalSelectedItem.planDescription
          ? finalSelectedItem.planDescription
          : "",
        device: finalSelectedItem.device ? finalSelectedItem.device : "",
        deviceDetails: finalSelectedItem.deviceDetails
          ? finalSelectedItem.deviceDetails
          : ""
      },
      isdeviceOn: finalSelectedItem.device ? "phone.png" : ""
    });
  };
  render() {
    const {
      planName,
      planNamedecrption,
      device,
      deviceDetails
    } = this.state.summary;
    return (
      <GazeButton
        duration={1000}
        onClick={this.setGazed.bind(this, 1)}
        render={(remainingTime, isGazed) => (
          <View style={styles2.greetingBox}>
            <Text style={styles2.greetingHeader}>Your Order Summary: </Text>

            <Text style={styles2.greeting}>
              {"Plan :  "} {planName}
            </Text>
            <Text style={styles2.greeting}>
              {"Device Name:  "} {device}
            </Text>

            <View>
              <Image
                source={asset(this.state.isdeviceOn)}
                style={{ height: 200, width: 200 }}
              />
            </View>

            <View>
              <Text style={{ color: "#fff", fontSize: 25 }}>
                {" Generate Order Token .."}
              </Text>
              <Image
                source={asset("blue.png")}
                style={{ height: 50, width: 50 }}
              />
            </View>
          </View>
        )}
      />
    );
  }
}

const styles2 = StyleSheet.create({
  panelPlans: {
    // Fill the entire surface
    width: 500,
    height: 500,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    justifyContent: "center",
    alignItems: "center"
  },

  panelDevices: {
    // Fill the entire surface
    width: 500,
    height: 500,
    backgroundColor: "rgba(255, 255, 255, 0.4)"
  },
  greetingBox: {
    padding: 20,
    backgroundColor: "#000000",
    borderColor: "#639dda",
    borderWidth: 2,
    width: 500,
    height: 500
  },
  greeting: {
    fontSize: 30
  },
  greetingHeader: {
    fontSize: 40,
    color: "#0791ff",
    backgroundColor: "#000000",
    borderColor: "#639dda",
    borderWidth: 1
  },

  greetingHeader1: {
    fontSize: 25,
    color: "#0791ff",
    backgroundColor: "#000000",
    borderColor: "#639dda",
    borderWidth: 1,
    borderWidth: 1
  },
  greetingHeader2: {
    fontSize: 50,
    color: "#fff",
    backgroundColor: "#000000",
    borderColor: "#639dda",
    borderWidth: 1
  }
});

AppRegistry.registerComponent("plansPanel", () => plansPanel);
AppRegistry.registerComponent("devicePanel", () => devicePanel);
AppRegistry.registerComponent("summmaryPanel", () => summmaryPanel);
AppRegistry.registerComponent("endPanel", () => endPanel);
AppRegistry.registerComponent("homePanel", () => homePanel);
