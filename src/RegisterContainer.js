import React from 'react'
import RegisterComponent from './RegisterComponent'

class Register extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      dietaryRestrictions: {
        isVegan: false,
        isKosher: false, 
        isLactosFree: false
      }
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const {name, value, type, checked} = event.target

    if (type === 'checkbox') {
      this.setState((prevState) => {
        return {
          dietaryRestrictions: {
            ...prevState.dietaryRestrictions,
            [name]: checked
          }
        }
      })
    } else {
      this.setState({
        [name]: value
      })
    }
  }

  render() {
    return (<RegisterComponent handleChange={this.handleChange} data={this.state} />)
  }
}

export default Register