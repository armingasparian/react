import React from "react"

export default class ExampleForThree extends React.Component {
  state = {   
    randColor: '#FF7b95',
    arr: ['#FF7102', '#FF6633', '#E6B3B3', '#022AFF', '#FF0202','#991AFF', '#4D8066', 
          '#FFDD02', '#809980', '#02FF86', '#E6FF80', '#AA02FF', '#1AFF33'],
    top: 25,
    left: 250,
  }
  randColor = () => {
    let randColor = Math.floor(Math.random() * this.state.arr.length)
    this.setState({
      randColor: this.state.arr[randColor]
    })
    let left = Math.floor(Math.random() * 1000)
    this.setState({
      left:left
    })
    let top = Math.floor(Math.random() * 750)
    this.setState({
      top: top
    })
  }

  render(){
    return(
      <div>
        <button onClick={this.randColor} 
                style={{color: '#1c75be', fontWeight: 'bold', background: '#D3E5E7', border: '1px solid #999999', 
                padding: '10px', marginTop: '10px', borderRadius: '7px', width: '200px'}}>
            Click here!
        </button>
        <div className="withRandoms" style={{left: this.state.left, 
          top: this.state.top, position: 'absolute', background: this.state.randColor,
          width: '150px', height: '150px', zIndex: '-1'}}>                 
        </div>    
      </div>    
    )
  }
}