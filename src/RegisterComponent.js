import React from 'react'

function RegisterComponent(props) {
  return (
    <div>
      <div style={{border: "1px solid", width: "600px", height: "370px", padding: "2%"}}>
        <h1>Welcome, You have to register.</h1>
        <form>
          <input 
            name="firstName" 
            type="text" 
            placeholder="First Name" 
            value={props.data.firstName}
            onChange={props.handleChange}
          /><br/>

          <input 
            name="lastName" 
            type="text" 
            placeholder="Last Name" 
            value={props.data.lastName}
            onChange={props.handleChange}
          /><br/>

          <input 
            name="age" 
            type="text" 
            placeholder="Age" 
            value={props.data.age}
            onChange={props.handleChange}
          /><br/>
          <br/>

          <label>Gender : 
            <br/>
            <input type="radio" name="gender" value="male" onChange={props.handleChange} checked={props.data.gender === "male"}/>
            <label> Male</label>
            <br/>

            <input type="radio" name="gender" value="female" onChange={props.handleChange}  checked={props.data.gender === "female"}/>
            <label> Female</label>
          </label>
          <br/>
          <br/>

          {/* <label>Dietary Restrictions : </label>
          <select  
            name="dietaryRestrictions"
            onChange={this.handleChange} 
            value={this.state.dietaryRestrictions}>
              <option value="normal">Normal</option>
              <option value="vegtarion">Vegtarion</option>
              <option value="muslim">Muslim</option>
          </select>
          <br/> */}

          <br/>
          <label>
            <input 
              name="isVegan"
              type="checkbox"
              value={props.data.dietaryRestrictions.isVegan}
              onChange={props.handleChange}
              checked={props.data.dietaryRestrictions.isVegan}
            /> Vegan
          </label>

          <br/>
          <label>
            <input 
              name="isKosher"
              type="checkbox"
              onChange={props.handleChange}
              checked={props.data.dietaryRestrictions.isKosher}
            /> Kosher
          </label>

          <br/>
          <label>
            <input 
              name="isLactosFree"
              type="checkbox"
              onChange={props.handleChange}
              checked={props.data.dietaryRestrictions.isLactosFree}
            /> LactosFree
          </label>

          <br/>
          <br/>
          <button>Submit</button>
        </form>
      </div>

      <div style={{border: "1px solid", width: "600px", height: "300px", padding: "2%"}}>
        <h1> Enter Value </h1>
        <h3>{props.data.firstName} {props.data.lastName}</h3>
        <h3>{props.data.age}</h3>
        <h3>{props.data.gender}</h3>
        <h3>{props.data.dietaryRestrictions.isVegan ? "Yes" : "NO"}</h3>
        <h3>{props.data.dietaryRestrictions.isKosher ? "Yes" : "NO"}</h3>
        <h3>{props.data.dietaryRestrictions.isLactosFree ? "Yes" : "NO"}</h3>
      </div>
    </div>
  )
}

export default RegisterComponent