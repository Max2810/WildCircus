import React from 'react'

function Prices() {
  return (
    <div>
      <section>
        <h2><a id="Prices"></a>Prices</h2>
        <table class="tableau">
          <thead>
            <tr>
              <th class="th1"></th>
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
      </section>
    </div>
  );
}

export default Prices;