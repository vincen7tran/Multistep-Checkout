class App extends React.Component {
  state = {
    currentStep: 0,
    personalInfo: {},
    shippingInfo: {},
    creditInfo: {}
  };

  postData = () => {
    axios.post('/checkout', this.state)
      .then(function (response) {
        console.log(response, 'success');
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  
  handleSubmit = (data) => {
    if (this.state.currentStep === 1) this.setState({personalInfo: data, currentStep: 2});
    else if (this.state.currentStep === 2) this.setState({shippingInfo: data, currentStep: 3});
    else if (this.state.currentStep === 3) this.setState({creditInfo: data, currentStep: 4}, () => this.postData());
  }

  reset = () => {
    this.setState({ personalInfo: {}, shippingInfo: {}, creditInfo: {}, currentStep: 0 });
  }
  
  render() {
    return (
      <div>
        {this.state.currentStep === 0 && <button onClick={() => this.setState({ currentStep: 1 })}>Check Out</button>}
        {this.state.currentStep === 1 && <PersonalForm handleSubmit={this.handleSubmit}/> }
        {this.state.currentStep === 2 && <ShippingForm handleSubmit={this.handleSubmit}/> }
        {this.state.currentStep === 3 && <CreditForm handleSubmit={this.handleSubmit}/> }
        {this.state.currentStep === 4 && 
          <div>
           <div>{JSON.stringify(this.state)}</div>
           <button className="ui button" onClick={this.reset}>Purchase</button> 
          </div>
        }
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
      this.props.handleSubmit(this.state);
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

  class ShippingForm extends React.Component {
    constructor(props) {
      super(props);

      this.state ={
        lineOne: '',
        lineTwo: '',
        city: '',
        state: '',
        zip: '',
        phone: '',
      };
    }

    onFormSubmit = (e) => {
      e.preventDefault();
      this.props.handleSubmit(this.state);
    }

    onInputChange = (e) => {
      const name = e.target.name;
      const value = e.target.value;

      this.setState({ [name]: value });
    }

    render() {
      return (
        <form className="ui form" onSubmit={this.onFormSubmit} action="/">
          <h4 className="ui dividing header">Shipping Information</h4>
          <input type="text" name="lineOne" placeholder="Line 1" value={this.state.lineOne} onChange={this.onInputChange}/>
          <input type="text" name="lineTwo" placeholder="Line 2" value={this.state.lineTwo} onChange={this.onInputChange}/>
          <input type="text" name="city" placeholder="City" value={this.state.city} onChange={this.onInputChange}/>
          <input type="text" name="state" placeholder="State" value={this.state.state} onChange={this.onInputChange}/>
          <input type="text" name="zip" placeholder="Zip Code" value={this.state.zip} onChange={this.onInputChange}/>
          <input type="text" name="phone" placeholder="Phone Number" value={this.state.phone} onChange={this.onInputChange}/>
          <input className="ui button" type="submit" />
        </form>
      );
    }
  }

  class CreditForm extends React.Component {
    constructor(props) {
      super(props);

      this.state ={
        cc: '',
        expiry: '',
        cvv: '',
        billingzip: '',
      };
    }

    onFormSubmit = (e) => {
      e.preventDefault();
      this.props.handleSubmit(this.state);
    }

    onInputChange = (e) => {
      const name = e.target.name;
      const value = e.target.value;

      this.setState({ [name]: value });
    }

    render() {
      return (
        <form className="ui form" onSubmit={this.onFormSubmit} action="/">
          <h4 className="ui dividing header">Shipping Information</h4>
          <input type="text" name="cc" placeholder="Credit Card #" value={this.state.cc} onChange={this.onInputChange}/>
          <input type="text" name="expiry" placeholder="Expiry Date" value={this.state.expiry} onChange={this.onInputChange}/>
          <input type="text" name="cvv" placeholder="CVV" value={this.state.cvv} onChange={this.onInputChange}/>
          <input type="text" name="billingzip" placeholder="Billing Zip Code" value={this.state.zip} onChange={this.onInputChange}/>
          <input className="ui button" type="submit" />
        </form>
      );
    }
  }
  
  ReactDOM.render(<App />, document.querySelector('#root'));