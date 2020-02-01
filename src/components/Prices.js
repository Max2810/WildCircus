import React from 'react'
import Reservation from './Reservation'

function Prices() {
  return (
    <div>
      <h2>Prices</h2>
      <div className="tableau">
        <table>
          <thead>
            <tr>
              <th className="th1"></th>
              <th>Adult</th>
              <th>Children under 12 years</th>
              <th>Groups (more than 10 people)</th>
              <th>School</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Weeks off Wednesday</td>
              <td>8€</td>
              <td>6€</td>
              <td>6€ per person</td>
              <td>5€ per person</td>
            </tr>
            <tr>
              <td>Weekend and wednesday</td>
              <td>10€</td>
              <td>8€</td>
              <td>8€ per person</td>
              <td>7€ per person</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Reservation />
    </div>
  );
}

export default Prices;