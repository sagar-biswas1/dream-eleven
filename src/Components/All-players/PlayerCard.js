import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faBookmark } from "@fortawesome/free-solid-svg-icons";

const PlayerCard = (props) => {
  const {
    name,
    country,
    height,
    salary,
    image,
    age,
    club,
    league,
    matches,
    goals,
    assists,
    yellowCard,
    redCard,
  } = props.player;
  const selectPlayer = props.selectPlayer;
  const positionInArray = props.playerList.indexOf(props.player);
  return (
    <div className="row ms-5 mt-3" style={{ maxWidth: "800px" }}>
      <div className="col-10 col-md-12 ">
        <div className="card card-body border-0">
          <div className=" align-items-center align-items-lg-start text-center text-lg-left flex-column flex-lg-row d-flex justify-content-between">
            <div className="mb-3 mb-lg-0">
              <img
                src={image}
                width="150"
                height="150"
                alt=""
                style={{ objectFit: "contain" }}
              />
              <p>{country}</p>
            </div>

            <div className="card-body ">
              <h6 className="card-title ">Name : {name}</h6>
              <ul className="list-inline list-inline-dotted mb-3 mb-lg-2">
                <li className="list-inline-item">Club : {club}</li>
              </ul>
              <p className="mb-3">
                Age : {age} , Height : {height}
              </p>
              {/*  */}
              <table className="table table-sm mt-5">
                <thead>
                  <tr>
                    <th scope="col">League</th>
                    <th scope="col">Matches</th>
                    <th scope="col">Goals</th>
                    <th scope="col">Assists</th>
                    <th scope="col">
                      <img
                        src="https://ssl.gstatic.com/onebox/sports/game_feed/yellow_card_icon.svg"
                        alt=""
                      />
                    </th>
                    <th scope="col">
                      <img
                        src="https://ssl.gstatic.com/onebox/sports/game_feed/red_card_icon.svg"
                        alt=""
                      />
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row" style={{ maxWidth: "155px" }}>
                      {league}
                    </th>
                    <td>{matches}</td>
                    <td>{goals}</td>
                    <td>{assists}</td>
                    <td>{yellowCard}</td>
                    <td>{redCard}</td>
                  </tr>
                </tbody>
              </table>
              {/*  */}
            </div>

            <div className="mt-3  text-center">
              <h6 className="mb-0 "> Salary : {salary} million </h6>
              <div>
                <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                <i className="fa fa-star"></i> <i className="fa fa-star"></i>
              </div>

              <div>
                <button
                  type="button"
                  className="btn btn-info mt-2"
                  onClick={() => {
                    selectPlayer(props.player);
                  }}
                  disabled={positionInArray !== -1}
                >
                  {positionInArray !== -1 ? (
                    <FontAwesomeIcon icon={faBookmark} />
                  ) : (
                    <FontAwesomeIcon icon={faPlusCircle} />
                  )}

                  <span className="mx-1">
                    {positionInArray !== -1
                      ? "Player Selected"
                      : "Select Player"}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default PlayerCard;
