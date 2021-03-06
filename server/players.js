import { savePlayers, loadPlayers } from "./persistence";

export class Player {
  constructor(id) {
    this.id = id;
    this.name='';
  }
}

export const players = loadPlayers().map(
  (playerData) => new Player(playerData.id)
);

export const getAllPlayers = () => {
  return players;
};

export const getPlayerById = (id) => {
  return players.find((player) => player.id === id);
};

export const addPlayer = (id) => {
  const player = new Player(id);
  //players.push(player);

  //savePlayers(players);

  return player;
};
