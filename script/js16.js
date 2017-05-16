class Countries extends React.Component {
  constructor() {
    super();
    this.state = { countries: [] };
    
  }

  componentDidMount() {  
  fetch('https://forverkliga.se/JavaScript/api/simple.php?world=all')
      .then(response => response.json())
      .then(json => this.setState({ countries: json }));debugger;
  }
  
  
  delete(item){
    const newState = this.state.countries;
    if (newState.indexOf(item) > -1) {
      newState.splice(newState.indexOf(item), 1);
      this.setState({data: newState})
    }
  }
  

  render() {debugger;
    return (
    <div>
        <h1>Countries</h1>
        {
          this.state.countries.length == 0 ? 'Loading countries..' : this.state.countries.map(country => (
             <ul>
              {country.name} <button onClick={this.delete.bind(this, country)}>delete</button>
             </ul>
            ))
        }
         <label>{this.state.countries.length}</label>
     </div>
    );
  }
}

ReactDOM.render(<Countries />, document.getElementById('container'));
