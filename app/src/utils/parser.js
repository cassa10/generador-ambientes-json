export const parseServersJSON = (serversJSONString) => {
    const buildAndDeployServers = JSON.parse(serversJSONString);
    return buildAndDeployServers.ambienteBuild
        ?[buildAndDeployServers.ambienteBuild,...buildAndDeployServers.ambientesDeploy]
        :buildAndDeployServers.ambientesDeploy
    ;
};
