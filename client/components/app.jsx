class App extends React.Component {
  state = {
    currentStep: 0,
    checkout: false,
    personalInfo: {},
  };

  postPersonalForm = (personalData) => {
    // axios.post('/user', {
    //   firstName,
    //   lastName
    // })
    // .then(function (response) {
    //   console.log(response, 'success');
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
    this.setState({personalInfo: personalData, currentStep: 2});
  }

  render() {
    return (
      <div>
        {this.state.currentStep === 0 && <button onClick={() => this.setState({ currentStep: 1 })}>Check Out</button>}
        {this.state.currentStep === 1 && <PersonalForm postPersonalForm={this.postPersonalForm}/> }
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

    onInputChange = (e) => {
      const name = e.target.name;
      const value = e.target.value;

      this.setState({ [name]: value });
    }

    render() {
      return (
        <form className="ui form" onSubmit={this.onFormSubmit} action="/">
          <h4 className="ui dividing header">Personal Information</h4>
          <input type="text" name="firstName" placeholder="First Name" value={this.state.firstName} onChange={this.onInputChange}/>
          <input type="text" name="lastName" placeholder="Last Name" value={this.state.lastName} onChange={this.onInputChange}/>
          <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.onInputChange}/>
          <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.onInputChange}/>
          <input className="ui button" type="submit" />
        </form>
      );
    }
  }
  
  ReactDOM.render(<App />, document.querySelector('#root'));