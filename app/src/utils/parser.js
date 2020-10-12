export const parseServersJSON = (serversJSONString) => {
    console.log(serversJSONString)
    const buildAndDeployServers = JSON.parse(serversJSONString);
    return plainToListServers(buildAndDeployServers, buildAndDeployServers.ambienteBuild)
    ;
};

const plainToListServers = (serversObj, containsBuildServer) => {
    
    //Le agrego prop isBuildServer en false a todos los server de deploy
    serversObj.ambientesDeploy = serversObj.ambientesDeploy.map((deployServer) => ({...deployServer, isBuildServer: false}));
    
    let value;

    //Aplano lista y agrego isBuildServer en true en el ambienteBuild, en caso que exista dicha prop
    containsBuildServer ?
        value = [
            {...serversObj.ambienteBuild, isBuildServer: true },
            ...serversObj.ambientesDeploy
        ]
    :
        value = serversObj.ambientesDeploy
    
    return value;
};
