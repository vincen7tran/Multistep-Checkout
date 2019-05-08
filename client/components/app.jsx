class App extends React.Component {
  state = {
    checkout: false,
  };

  postPersonalForm = ({ firstName, lastName }) => {
    console.log(firstName, lastName);
  }

  togglePersonalForm = () => {
    this.setState({checkout: !this.state.checkout});
  }

  render() {
    return (
      <div>
        {!this.state.checkout && <button onClick={this.togglePersonalForm}>Check Out</button>}
        {this.state.checkout && <PersonalForm postPersonalForm={this.postPersonalForm}/> }
      </div>
      );
    }
  }

  class PersonalForm extends React.Component {
    constructor(props) {
      super(props);

      this.state ={
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      };
    }

    onFormSubmit = (e) => {
      e.preventDefault();
      this.props.postPersonalForm(this.state);
    }

    render() {
      return (
        <form className="ui form" onSubmit={this.onFormSubmit} action="/">
          <input type="text" name="firstName" placeholder="First Name" value={this.state.firstName} onChange={e => this.setState({firstName: e.target.value})}/>
          <input type="text" name="lastName" placeholder="Last Name" value={this.state.lastName} onChange={e => this.setState({lastName: e.target.value})}/>
          <input type="submit" />
        </form>
      );
    }
  }
  
  ReactDOM.render(<App />, document.querySelector('#root'));
  // <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={e => this.setState({email: e.target.value})}/>
  // <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={e => this.setState({password: e.target.value})}/>