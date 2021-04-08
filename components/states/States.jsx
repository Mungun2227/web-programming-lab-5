import React from 'react';
import './States.css';

/**
 * Define States, a React componment of CS142 project #4 problem #2.  The model
 * data for this view (the state names) is available
 * at window.cs142models.statesModel().
 */
class States extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      states: window.cs142models.statesModel(),
      inputValue: '',
    }
    console.log('window.cs142models.statesModel()', window.cs142models.statesModel());
  }
  handleChange(event) {
    console.log(event.target.value);
    this.setState({ inputValue: event.target.value });
  }
  render() {
    return (
      <div className="container">
        <input type="text" value={this.state.inputValue} onChange={this.handleChange.bind(this)}></input>
        {this.state.inputValue ? (
          this.state.states.map((el, index) => {
            if(el.toLowerCase().includes(this.state.inputValue.toLowerCase())) {
              return <div key={index}>{el}</div>
            }
          })
         ) : (
          this.state.states.map((el, index) => (
            <div key={index}>{el}</div>
          ))
        )}
      </div>
    );
  }
}

export default States;
