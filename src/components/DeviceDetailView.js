import * as React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-360';
import { selectedDeviceFetch , setSelectedDeviceColor, setGazedDeviceColor } from '../actions';

import { bindActionCreators } from 'redux';

import GazeButton from "react-360-gaze-button";

//import console = require('console');
//import PostButton from './PostButton';

class DeviceDetailView extends React.Component {
    
    componentWillMount() {
        this.props.selectedDeviceFetch();
    }
  
    setGazedColor = index1 => {
      let updateData = [];
      let updatedColor = [];
      this.props.colorNsize.colors.map((item, ind) => {
        if(ind === index1){
            updatedColor.push({
                color: item.color,
                gazed: true
            });
            item.gazed= true;
            this.props.setSelectedDeviceColor(item);
        }
        else{
            updatedColor.push({
                color: item.color,
                gazed: false
            });
        }
        
      });

      this.props.setGazedDeviceColor(updatedColor);

    };
    render() {
     // const { gazed } = this.props.plans;
      return (
        <View style={styles.panelPlans}>
          <Text>Please Select A Device Color and Size</Text>
          { this.props && this.props.colorNsize && this.props.colorNsize.colors && this.props.colorNsize.colors.map((item, index) => {
            return (
              <GazeButton
                duration={1000}
                onClick={this.setGazedColor.bind(this, index)}
                render={(remainingTime, isGazed) => (
                  <View
                    style={
                      item.gazed ? styles.greetingBo_selected : styles.greetingBox
                    }
                    key={item.color}
                  >
                    <Text style={styles.greeting}>
                      {item.gazed
                        ? item.color + " SELECTED"
                        : isGazed
                        ? item.color +
                          "    Selecting...in " +
                          remainingTime +
                          "sec"
                        : item.color}
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
      //color: "white",
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

  const mapStateToProps = (state) => {
    const colorNsize = {
        colors: state.selectedDevice && state.selectedDevice.selected_device && state.selectedDevice.selected_device.colors,
        sizes: state.selectedDevice && state.selectedDevice.selected_device && state.selectedDevice.selected_device.sizes,
    }
    return { colorNsize }
  };

  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
      selectedDeviceFetch: selectedDeviceFetch,
      setSelectedDeviceColor: setSelectedDeviceColor,
      setGazedDeviceColor: setGazedDeviceColor
    }, dispatch);
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(DeviceDetailView);  