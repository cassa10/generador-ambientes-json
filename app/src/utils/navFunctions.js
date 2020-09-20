import {routes} from "../routes";

export const goToHomePage = (pushHistory) => () => pushHistory(routes.homePage);

export const goToGraphPage = (pushHistory) => () => pushHistory(routes.graphPage);

