import React, { useState, useEffect } from "react";
import PlayerCard from "./PlayerCard";
import players from "../../Players-data/data.json";
import BudgetCart from "../Budget-cart/BudgetCart";

const PlayersPage = () => {
  const [allPlayers, setAllPlayers] = useState([]);
  const [playerList, setPlayerList] = useState([]);

  const selectPlayer = (player) => {
    let newPlayers = [...playerList, player];
    setPlayerList(newPlayers);
  };
  useEffect(() => {
    setAllPlayers(players);
  }, []);

  return (
    <div>
      <h2 className="text-center mt-3">
        Select the best players and make your Team
      </h2>

      <div className="mt-3 d-flex flex-column-reverse flex-md-row ">
        <div className="w-100 m-auto ">
          <div className="d-flex flex-column justify-content-center mt-5 ">
            {allPlayers.map((player) => (
              <PlayerCard
                player={player}
                key={player.id}
                playerList={playerList}
                selectPlayer={selectPlayer}
              />
            ))}
          </div>
        </div>
        <div className="mt-5">
          <BudgetCart playerList={playerList} />
        </div>
      </div>
    </div>
  );
};

export default PlayersPage;
