import React from 'react'

class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: "",
      friendly: true,
      gender: "",
      favColor: "blue"
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    const {name, value, type, checked} = event.target
    type === 'checkbox' ? this.setState({ [name]: checked }):this.setState({ [name] : value })
  }

  handleSubmit() {
    console.log(this.state.firstName)
    console.log(this.state.firstName)
    console.log(this.state.firstName)
    console.log(this.state.firstName)
    console.log(this.state.firstName)
    console.log(this.state.firstName)
    console.log(this.state.firstName)
    console.log(this.state.firstName)
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text" 
            value={this.state.firstName} 
            name="firstName" 
            placeholder="First Name" 
            onChange={this.handleChange}
          />
          <br/>

          <input 
            type="text" 
            value={this.state.lastName} 
            name="lastName" 
            placeholder="Last Name" 
            onChange={this.handleChange}
          />
          <br/>

          <textarea 
            value={"Some default value"}
            onChange={this.handleChange}
          />
          <br/>
          <br/>

          <label>
            <input 
              type="checkbox" 
              name="friendly"
              checked={this.state.friendly} 
              onChange={this.handleChange}
            /> is friendly ?
          </label>
          <br/>
          <br/>

          <label>
            <input 
              type="radio" 
              name="gender"
              value="male"
              checked={this.state.gender === 'male'} 
              onChange={this.handleChange}
            /> Male
          </label>
          <br/>

          <label>
            <input 
              type="radio" 
              name="gender"
              value="female"
              checked={this.state.gender === 'female'} 
              onChange={this.handleChange}
            /> Female
          </label>
          <br/>
          <br/>

          <label> Favorite Color : </label>
          <select 
            value={this.state.favColor}
            onChange={this.handleChange}
            name="favColor">
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
          </select>
          

          <hr/>

          <h1>{this.state.firstName}</h1>
          <h1>{this.state.lastName}</h1>

          <h2>Your are a {this.state.gender}</h2>
          <h2>Fav color is {this.state.favColor}</h2>

          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default Form