import * as types from "../constants/clientActionType";

const SIMULATION = {
  clients: [
    {
      id: "1",
      nom: "gabriel kwan"
    },
    {
      id: "2",
      nom: "michael kwan"
    }
  ]
};

const initState = {
  clients: [...SIMULATION.clients]
};

const client = (state = initState, action) => {
  let newState = { ...state };
  let { clients } = state;

  switch (action.type) {
    case types.CHANGER_NOM_CLIENT:
      let { idClient, newName } = action;
      clients = clients.map(client => {
        if (client.id === idClient) client.nom = newName;
        return client;
      });
      return (newState.clients = clients);
    default:
      return state;
  }
};

export default client;
