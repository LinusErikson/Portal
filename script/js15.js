var sum1;
var sum2;

class Math extends React.Component {
  constructor(props) {
    super();
    this.state = {
      leftField: '',
      rightField: '',
      output: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    

        if(name == "leftField")   
          sum1=  parseFloat(value);
       
        if(name == "rightField")
          sum2= parseFloat(value);
        
        var total = sum1 + sum2;
    
        if(!isNaN(total))
           this.setState({output: total});
              
              else{
                  this.setState({output: 'Endast siffror'});}
                
    
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form>
          <input
            name="leftField"
            type="text"
            value={this.state.leftField}
            onChange={this.handleInputChange} />
    
        
          <input
            name="rightField"
            type="text"
            value={this.state.rightField}
            onChange={this.handleInputChange} />
        
          <label name="output"> = {this.state.output}</label>
      
      </form>
    );
  }
}

ReactDOM.render(
  <Math />,
  document.getElementById('container')
);
