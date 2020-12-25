import React from "react"

export default class ExampleForTwo extends React.Component {
  state = {   
    randColor: '#FF7b95',
    nextColor: '#C48383',
    arr: ['#FF6633', '#E6B3B3', '#991AFF', '#4D8066', '#809980', '#E6FF80', '#1AFF33'],
    arrNext: ['#FF0202', '#FF7102', '#FFDD02', '#02FF86', '#02EEFF', '#022AFF', '#AA02FF'],
    i: 0,
    j: 1
  }
  randColor = () => {
    let randColor = Math.floor(Math.random() * this.state.arr.length)
    this.setState({
      randColor: this.state.arr[randColor]
    })
  }
  nextColor = () => {
    this.setState({
      nextColor: this.state.arrNext[this.state.i]
    })
    this.state.i++;
    if(this.state.i==this.state.arrNext.length) {
      this.state.i=0;
    }
  }

  render(){
    return(
      <div style={{display: 'flex'}}>
        
        <div className="withRandoms" style={{margin: '1em'}}>
          <p style={{textAlign: 'center'}}>With Random Colors</p>
          <div style={{background: this.state.randColor, width: '200px', height: '200px'}}>                 
          </div>
          <button onClick={this.randColor} 
                style={{color: '#1c75be', fontWeight: 'bold', background: 'transparent', border: '1px solid #999999', 
                padding: '10px', marginTop: '10px', borderRadius: '7px', width: '200px'}}>
            Click here!
          </button>  
        </div>

        <div className="withotRandoms" style={{margin: '1em'}}>
        <p style={{textAlign: 'center'}}>Without Random Colors</p>
        <div style={{background: this.state.nextColor, width: '200px', height: '200px'}}>                  
          </div>
          <button onClick={this.nextColor} 
                style={{color: '#1c75be', fontWeight: 'bold', background: 'transparent', border: '1px solid #999999', 
                padding: '10px', marginTop: '10px', borderRadius: '7px', width: '200px'}}>
            Click here!
          </button>  
        </div>

      </div>
    )
  }
}