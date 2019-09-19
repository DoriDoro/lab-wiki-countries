import React from "react";
import countries from "./countries";
import { Link } from "react-router-dom";

export default function CountyDetails(props) {
    
  function getCountryBordersName(country) {
    return countries
      .filter(c => {
        for (let cca3 of country.borders) {
          if (cca3 === c.cca3) return c;
        }
      })
      .map(c => {
        return { name: c.name.common, cca3: c.cca3 };
      });
  }
  let cca3 = props.match.params.cca3;

  let country = countries.filter(c => cca3 === c.cca3);
  return (
    <div>
      <h1> {country[0].name.common} </h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td> Capital </td>
            <td> {country[0].capital} </td>
          </tr>
          <tr>
            <td> Area </td>
            <td>
              {" "}
              {country[0].area}km <sup>2</sup>{" "}
            </td>
          </tr>

          <tr>
            <td> Border </td>
            <td>
              <ul>
                {getCountryBordersName(country[0]).map((c, index) => (
                  <li key={index}>
                    {" "}
                    <Link to={"/" + c.cca3}> {c.name} </Link>{" "}
                  </li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
