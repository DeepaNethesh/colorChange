import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css'

class App extends React.Component {

  state = {
    color: 'Purple'
  }
  changeHandle = e => {
    this.setState({
      color: e.target.value
    })
  }
  render() {
    const styleObject = {
      background: this.state.color
    }
    return (
      <div className='container'>
        <div style={styleObject} className='ui card'>
          <div className='content'>
            <h1>Hello, World!</h1>
            <div className='header'>
              Color: {this.state.color}
            </div>
            <div className='ui search'>
            <input 
            className='prompt'
        onChange={this.changeHandle}
        value={this.state.color}
        type ='text' />
            </div>
          </div>

        </div>
        
      </div>
    )
  }

}

ReactDOM.render(
  
    <App />,
 
  document.getElementById('root')
);