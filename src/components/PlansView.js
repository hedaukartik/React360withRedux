import _ from 'lodash';
import * as React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-360';
import { plansFetch, setSelectedPlan, setGazedPlan } from '../actions';

import { bindActionCreators } from 'redux';

import GazeButton from "react-360-gaze-button";

//import console = require('console');
//import PostButton from './PostButton';

class PlansView extends React.Component {
    
    componentWillMount() {
        this.props.plansFetch();
    }
  
    setGazed = index1 => {
      let updateData = [];
      this.props.plans.plans.map((item, ind) => {
        if (index1 == ind) {
          updateData.push({
            name: item.name,
            description: item.description,
            gazed: true,
            selected: true
          });
          this.props.setSelectedPlan(item);
        } else {
          updateData.push({
            name: item.name,
            gazed: false,
            selected: false,
            description: item.description
          });
        }
        
      });
      this.props.setGazedPlan(updateData);
    //   this.setState({
    //     plans: [...updateData]
    //   });
    };
    render() {
     // const { gazed } = this.props.plans;
      return (
        <View style={styles.panelPlans}>
          <Text>Please Select A Plan: </Text>
          { this.props && this.props.plans && this.props.plans.plans && this.props.plans.plans.map((item, index) => {
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
                        ? item.name + " SELECTED"
                        : isGazed
                        ? item.name +
                          "    Selecting...in " +
                          remainingTime +
                          "sec"
                        : item.name}
                    </Text>
                    <Text style={styles.greetingBox1}>{item.description}</Text>
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

  const mapStateToProps = (state) => {
    
    return { plans: state.plans }
  };

  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
      plansFetch: plansFetch,
      setSelectedPlan: setSelectedPlan,
      setGazedPlan : setGazedPlan
    }, dispatch);
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(PlansView);  