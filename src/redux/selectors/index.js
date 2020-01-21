import { createSelector } from "reselect";

function getClient(state) {
  return state.client;
}

export const getCliName = createSelector([getClient], function(clientState) {
  return clientState.clients.filter(cli => cli.id === "1");
});
