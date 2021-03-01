import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdBadge, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
const BudgetCart = ({ playerList }) => {
  let totalBudget = playerList.reduce(
    (total, player) => total + player.salary,
    0
  );
  return (
    <div className="card text-dark bg-info mb-3" style={{ maxWidth: "400px" }}>
      <div className="card-header">
        <p className="text-center">
          <FontAwesomeIcon icon={faIdBadge} />
          <span className="mx-2"> Summery</span>
        </p>
      </div>
      <div className="card-body">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Salary(Million)</th>
            </tr>
          </thead>
          <tbody>
            {playerList.map((player) => (
              <tr key={player.id}>
                <th scope="row">
                  <FontAwesomeIcon icon={faCheckCircle} /> {player.name}
                </th>
                <td>{player.salary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="card-footer fw-bold ">
        Total Budget : {totalBudget} million
      </div>
    </div>
  );
};

export default BudgetCart;
