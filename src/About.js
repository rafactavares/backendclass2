import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div>
        <h3>SPA App - About</h3>
        <p>Text for Home in SPA App.</p>
        <p>This SPA App has made by:</p>
        <table>
        <thead>
            <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>1</td>
            <td>Rafael Tavares</td>
            <td>22266@student.dorset-college.ie</td>
            </tr>
            <tr>
            <td>2</td>
            <td>Rafael Tavares</td>
            <td>22266@student.dorset-college.ie</td>
            </tr>
            <tr>
            <td>3</td>
            <td>Rafael Tavares</td>
            <td>22266@student.dorset-college.ie</td>
            </tr>
        </tbody>
        </table>
      </div>
    );
  }
}

export default About;