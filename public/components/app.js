function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class App extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      checkout: false
    });

    _defineProperty(this, "postPersonalForm", ({
      firstName,
      lastName
    }) => {
      console.log(firstName, lastName);
    });

    _defineProperty(this, "togglePersonalForm", () => {
      this.setState({
        checkout: !this.state.checkout
      });
    });
  }

  render() {
    return React.createElement("div", null, !this.state.checkout && React.createElement("button", {
      onClick: this.togglePersonalForm
    }, "Check Out"), this.state.checkout && React.createElement(PersonalForm, {
      postPersonalForm: this.postPersonalForm
    }));
  }

}

class PersonalForm extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "onFormSubmit", e => {
      e.preventDefault();
      this.props.postPersonalForm(this.state);
    });

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    };
  }

  render() {
    return React.createElement("form", {
      className: "ui form",
      onSubmit: this.onFormSubmit,
      action: "/"
    }, React.createElement("input", {
      type: "text",
      name: "firstName",
      placeholder: "First Name",
      value: this.state.firstName,
      onChange: e => this.setState({
        firstName: e.target.value
      })
    }), React.createElement("input", {
      type: "text",
      name: "lastName",
      placeholder: "Last Name",
      value: this.state.lastName,
      onChange: e => this.setState({
        lastName: e.target.value
      })
    }), React.createElement("input", {
      type: "submit"
    }));
  }

}

ReactDOM.render(React.createElement(App, null), document.querySelector('#root')); // <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={e => this.setState({email: e.target.value})}/>
// <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={e => this.setState({password: e.target.value})}/>
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL2FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjaGVja291dCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwic3RhdGUiLCJyZW5kZXIiLCJ0b2dnbGVQZXJzb25hbEZvcm0iLCJwb3N0UGVyc29uYWxGb3JtIiwiUGVyc29uYWxGb3JtIiwiY29uc3RydWN0b3IiLCJwcm9wcyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImVtYWlsIiwicGFzc3dvcmQiLCJvbkZvcm1TdWJtaXQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIlJlYWN0RE9NIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIl0sIm1hcHBpbmdzIjoiOztBQUFBLE1BQU1BLEdBQU4sU0FBa0JDLEtBQUssQ0FBQ0MsU0FBeEIsQ0FBa0M7QUFBQTtBQUFBOztBQUFBLG1DQUN4QjtBQUNOQyxNQUFBQSxRQUFRLEVBQUU7QUFESixLQUR3Qjs7QUFBQSw4Q0FLYixDQUFDO0FBQUVDLE1BQUFBLFNBQUY7QUFBYUMsTUFBQUE7QUFBYixLQUFELEtBQTZCO0FBQzlDQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUgsU0FBWixFQUF1QkMsUUFBdkI7QUFDRCxLQVArQjs7QUFBQSxnREFTWCxNQUFNO0FBQ3pCLFdBQUtHLFFBQUwsQ0FBYztBQUFDTCxRQUFBQSxRQUFRLEVBQUUsQ0FBQyxLQUFLTSxLQUFMLENBQVdOO0FBQXZCLE9BQWQ7QUFDRCxLQVgrQjtBQUFBOztBQWFoQ08sRUFBQUEsTUFBTSxHQUFHO0FBQ1AsV0FDRSxpQ0FDRyxDQUFDLEtBQUtELEtBQUwsQ0FBV04sUUFBWixJQUF3QjtBQUFRLE1BQUEsT0FBTyxFQUFFLEtBQUtRO0FBQXRCLG1CQUQzQixFQUVHLEtBQUtGLEtBQUwsQ0FBV04sUUFBWCxJQUF1QixvQkFBQyxZQUFEO0FBQWMsTUFBQSxnQkFBZ0IsRUFBRSxLQUFLUztBQUFyQyxNQUYxQixDQURGO0FBTUM7O0FBcEI2Qjs7QUF1QmhDLE1BQU1DLFlBQU4sU0FBMkJaLEtBQUssQ0FBQ0MsU0FBakMsQ0FBMkM7QUFDekNZLEVBQUFBLFdBQVcsQ0FBQ0MsS0FBRCxFQUFRO0FBQ2pCLFVBQU1BLEtBQU47O0FBRGlCLDBDQVdIQyxDQUFELElBQU87QUFDcEJBLE1BQUFBLENBQUMsQ0FBQ0MsY0FBRjtBQUNBLFdBQUtGLEtBQUwsQ0FBV0gsZ0JBQVgsQ0FBNEIsS0FBS0gsS0FBakM7QUFDRCxLQWRrQjs7QUFHakIsU0FBS0EsS0FBTCxHQUFZO0FBQ1ZMLE1BQUFBLFNBQVMsRUFBRSxFQUREO0FBRVZDLE1BQUFBLFFBQVEsRUFBRSxFQUZBO0FBR1ZhLE1BQUFBLEtBQUssRUFBRSxFQUhHO0FBSVZDLE1BQUFBLFFBQVEsRUFBRTtBQUpBLEtBQVo7QUFNRDs7QUFPRFQsRUFBQUEsTUFBTSxHQUFHO0FBQ1AsV0FDRTtBQUFNLE1BQUEsU0FBUyxFQUFDLFNBQWhCO0FBQTBCLE1BQUEsUUFBUSxFQUFFLEtBQUtVLFlBQXpDO0FBQXVELE1BQUEsTUFBTSxFQUFDO0FBQTlELE9BQ0U7QUFBTyxNQUFBLElBQUksRUFBQyxNQUFaO0FBQW1CLE1BQUEsSUFBSSxFQUFDLFdBQXhCO0FBQW9DLE1BQUEsV0FBVyxFQUFDLFlBQWhEO0FBQTZELE1BQUEsS0FBSyxFQUFFLEtBQUtYLEtBQUwsQ0FBV0wsU0FBL0U7QUFBMEYsTUFBQSxRQUFRLEVBQUVZLENBQUMsSUFBSSxLQUFLUixRQUFMLENBQWM7QUFBQ0osUUFBQUEsU0FBUyxFQUFFWSxDQUFDLENBQUNLLE1BQUYsQ0FBU0M7QUFBckIsT0FBZDtBQUF6RyxNQURGLEVBRUU7QUFBTyxNQUFBLElBQUksRUFBQyxNQUFaO0FBQW1CLE1BQUEsSUFBSSxFQUFDLFVBQXhCO0FBQW1DLE1BQUEsV0FBVyxFQUFDLFdBQS9DO0FBQTJELE1BQUEsS0FBSyxFQUFFLEtBQUtiLEtBQUwsQ0FBV0osUUFBN0U7QUFBdUYsTUFBQSxRQUFRLEVBQUVXLENBQUMsSUFBSSxLQUFLUixRQUFMLENBQWM7QUFBQ0gsUUFBQUEsUUFBUSxFQUFFVyxDQUFDLENBQUNLLE1BQUYsQ0FBU0M7QUFBcEIsT0FBZDtBQUF0RyxNQUZGLEVBR0U7QUFBTyxNQUFBLElBQUksRUFBQztBQUFaLE1BSEYsQ0FERjtBQU9EOztBQXpCd0M7O0FBNEIzQ0MsUUFBUSxDQUFDYixNQUFULENBQWdCLG9CQUFDLEdBQUQsT0FBaEIsRUFBeUJjLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixPQUF2QixDQUF6QixFLENBQ0E7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIGNoZWNrb3V0OiBmYWxzZSxcbiAgfTtcblxuICBwb3N0UGVyc29uYWxGb3JtID0gKHsgZmlyc3ROYW1lLCBsYXN0TmFtZSB9KSA9PiB7XG4gICAgY29uc29sZS5sb2coZmlyc3ROYW1lLCBsYXN0TmFtZSk7XG4gIH1cblxuICB0b2dnbGVQZXJzb25hbEZvcm0gPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7Y2hlY2tvdXQ6ICF0aGlzLnN0YXRlLmNoZWNrb3V0fSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIHshdGhpcy5zdGF0ZS5jaGVja291dCAmJiA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMudG9nZ2xlUGVyc29uYWxGb3JtfT5DaGVjayBPdXQ8L2J1dHRvbj59XG4gICAgICAgIHt0aGlzLnN0YXRlLmNoZWNrb3V0ICYmIDxQZXJzb25hbEZvcm0gcG9zdFBlcnNvbmFsRm9ybT17dGhpcy5wb3N0UGVyc29uYWxGb3JtfS8+IH1cbiAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBjbGFzcyBQZXJzb25hbEZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgIHRoaXMuc3RhdGUgPXtcbiAgICAgICAgZmlyc3ROYW1lOiAnJyxcbiAgICAgICAgbGFzdE5hbWU6ICcnLFxuICAgICAgICBlbWFpbDogJycsXG4gICAgICAgIHBhc3N3b3JkOiAnJ1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBvbkZvcm1TdWJtaXQgPSAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5wcm9wcy5wb3N0UGVyc29uYWxGb3JtKHRoaXMuc3RhdGUpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInVpIGZvcm1cIiBvblN1Ym1pdD17dGhpcy5vbkZvcm1TdWJtaXR9IGFjdGlvbj1cIi9cIj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZmlyc3ROYW1lXCIgcGxhY2Vob2xkZXI9XCJGaXJzdCBOYW1lXCIgdmFsdWU9e3RoaXMuc3RhdGUuZmlyc3ROYW1lfSBvbkNoYW5nZT17ZSA9PiB0aGlzLnNldFN0YXRlKHtmaXJzdE5hbWU6IGUudGFyZ2V0LnZhbHVlfSl9Lz5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibGFzdE5hbWVcIiBwbGFjZWhvbGRlcj1cIkxhc3QgTmFtZVwiIHZhbHVlPXt0aGlzLnN0YXRlLmxhc3ROYW1lfSBvbkNoYW5nZT17ZSA9PiB0aGlzLnNldFN0YXRlKHtsYXN0TmFtZTogZS50YXJnZXQudmFsdWV9KX0vPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgLz5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgXG4gIFJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcm9vdCcpKTtcbiAgLy8gPGlucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiRW1haWxcIiB2YWx1ZT17dGhpcy5zdGF0ZS5lbWFpbH0gb25DaGFuZ2U9e2UgPT4gdGhpcy5zZXRTdGF0ZSh7ZW1haWw6IGUudGFyZ2V0LnZhbHVlfSl9Lz5cbiAgLy8gPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIiB2YWx1ZT17dGhpcy5zdGF0ZS5wYXNzd29yZH0gb25DaGFuZ2U9e2UgPT4gdGhpcy5zZXRTdGF0ZSh7cGFzc3dvcmQ6IGUudGFyZ2V0LnZhbHVlfSl9Lz4iXX0=