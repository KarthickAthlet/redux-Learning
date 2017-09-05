import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as courseAction from '../../redux_actions/courseAction';

class CourseExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: {
        title: 'C Language',
        courseIndex: 1,
        userClickCount: 1
      }
    };

    // Event binding:
    this.updateValueInKeyStroke = this.updateValueInKeyStroke.bind(this);
    this.updateCounterInButtonClick = this.updateCounterInButtonClick.bind(this);
    this.courseRow = this.courseRow.bind(this);
  }

  updateValueInKeyStroke(event) {
    let updatedValue = event.target.value;
    // console.log('Keys are typing...', updatedValue);
    this.setState({
      courses: {
        title: updatedValue,
        courseIndex: this.state.courses.courseIndex,
        userClickCount: this.state.courses.userClickCount
      }
    });
  }

  updateCounterInButtonClick(event) {
    // let clickCount = this.state.courses.userClickCount + 1;
    // console.log('Button Clicked 1.0 ' + clickCount);
    // this.setState({
    //   courses: {
    //     title: this.state.courses.title,
    //     courseIndex: this.state.courses.courseIndex,
    //     userClickCount: clickCount
    //   }
    // });

    this.props.dispatch(courseAction.CourseActionAdd(this.state.courses));
  }

  courseRow(course, index) {
    return <div key={index}> {course.title}</div>;
  }

  render() {
    return (
      <div className="CourseExample">
        courses:
        {this.props.courses.map(this.courseRow)}
        ************************
        {this.state.courses.courseIndex} : {this.state.courses.title}
        <hr></hr>
        Count Value:{this.state.courses.userClickCount}
        <hr></hr>
        <input type='text' onKeyPress={this.updateValueInKeyStroke} />
        <hr></hr>
        <input type='button' onClick={this.updateCounterInButtonClick} value='Click Me To update title' />
      </div>
    );
  }
}


CourseExample.PropTypes = {
  dispatch: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    courses: state.CourseReducers
  };
}
export default connect(mapStateToProps)(CourseExample);
