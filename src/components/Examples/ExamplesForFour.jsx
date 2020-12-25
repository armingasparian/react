import React from "react"

export default class ExampleForFour extends React.Component {
  state = {   
    randColor: '#FF7b95',
    arr: ['#FF7102', '#FF6633', '#E6B3B3', '#022AFF', '#FF0202','#991AFF', '#4D8066', 
          '#FFDD02', '#809980', '#02FF86', '#E6FF80', '#AA02FF', '#1AFF33'],
    count: [1]
  }
  
  randColor = () => {
    let randColor = Math.floor(Math.random() * this.state.arr.length)
    this.setState({
      randColor: this.state.arr[randColor]
    })
    this.state.count.push(1)
  }

  render(){
    return(
      <div>
        <button onClick={this.randColor} 
                style={{color: '#1c75be', fontWeight: 'bold', background: '#D3E5E7', border: '1px solid #999999', 
                padding: '10px', marginTop: '10px', borderRadius: '7px', width: '200px', position: 'relative', zIndex: '2'}}>
            Click here!
        </button>
        {this.state.count.map((e, i) => <div className="withRandoms" style={{left: Math.floor(Math.random() * 1000), 
              top: Math.floor(Math.random() * 750), position: 'absolute',
              background: this.state.arr[ Math.floor(Math.random() * this.state.arr.length)],
              width: '80px', height: '80px', borderRadius: '50%'}}>
                {i}
            </div>
          )}
      </div>    
    )
  }
}