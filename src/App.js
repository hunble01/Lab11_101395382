import logo from './logo.svg';
import axios from "axios";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class PersonList extends Component {
  state = {
    persons: [],
  };

  componentDidMount() {
    axios.get(`https://randomuser.me/api/?results=10`).then((res) => {
      console.log(res.data);
      const persons = res.data.results;
      this.setState({ persons });
    });
  }

  render() {
    return (
      <div className="container mt-4">
        <h1 className="text-center text-white p-2" style={{ backgroundColor: "#28a745" }}>
          User List
        </h1>
        {this.state.persons.map((person, index) => (
          <div
            key={index}
            className="card my-3"
            style={{ backgroundColor: "#17a2b8", color: "#fff" }}
          >
            <div className="row no-gutters">
              <div className="col-md-2 text-center p-3">
                <img
                  src={person.picture.large}
                  className="img-fluid rounded-circle"
                  alt="User"
                />
              </div>
              <div className="col-md-10">
                <div className="card-body">
                  <h5 className="card-title">
                    {person.name.first} {person.name.last}
                  </h5>
                  <p className="card-text">
                    <b>User Name:</b> {person.login.username}
                    <br />
                    <b>Gender:</b> {person.gender.toUpperCase()}
                    <br />
                    <b>Time Zone Description:</b> {person.location.timezone.description}
                    <br />
                    <b>Address:</b> {person.location.street.number}{" "}
                    {person.location.street.name}, {person.location.city},{" "}
                    {person.location.state}, {person.location.country} -{" "}
                    {person.location.postcode}
                    <br />
                    <b>Email:</b> {person.email}
                    <br />
                    <b>Birth Date:</b> {new Date(person.dob.date).toDateString()} (
                    {person.dob.age} years)
                    <br />
                    <b>Register Date:</b> {new Date(person.registered.date).toDateString()}
                    <br />
                    <b>Phone:</b> {person.phone}
                  </p>
                  <button className="btn btn-primary">Details</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default PersonList;


