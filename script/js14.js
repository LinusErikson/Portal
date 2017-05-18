class Stuff extends React.Component {
  constructor() {
    super();
    this.state = { stuff: ['bil','båt','hund','katt'] };
  }
  
  render() {
   return (
      <div>
        <h1>stuff</h1>
        {
          this.state.stuff.map(stuff => (
             <li>
               {stuff}
             </li>
            ))
        }
      </div>
    );
}}

ReactDOM.render(<Stuff />, document.getElementById('container'));
