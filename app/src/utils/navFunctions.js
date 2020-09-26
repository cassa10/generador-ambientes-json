import {routes} from "../routes";

export const goToHomePage = (pushHistory) => pushHistory(routes.homePage);

export const goToGraphPage = (pushHistory, servers) => () => pushHistory({pathname: routes.graphPage, state: servers });

