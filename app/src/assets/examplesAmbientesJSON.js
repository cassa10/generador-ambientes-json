export const ambientesJSON = `
{
    "ambientesDeploy": [
        {
            "nombre":"Ambientes-1", 
            "dryRun": false,
            "enabled": true,
            "preDeploy":[],
            "postDeploy":[],
            "servidoresDeployParalelos":[
                {
                    "nombre": "Ambientes-1.A",
                    "host": "10.76.28.133",
                    "path": "/home/z001534/bd-loader3",
                    "os": "linux",
                    "dryRun": false,
                    "enabled": true
                },  
                {
                    "nombre": "Ambientes-1.B",
                    "host": "10.76.28.133",
                    "path": "/home/z001534/bd-loader4",
                    "os": "linux",
                    "dryRun": false,
                    "enabled": true
                },  
                {
                    "nombre": "Ambientes-1.C",
                    "host": "10.76.28.133",
                    "path": "/home/z001534/bd-loader4",
                    "os": "linux",
                    "dryRun": false,
                    "enabled": true
                }
            ]
        },
        {
            "nombre":"Ambientes-2", 
            "dryRun": false,
            "enabled": true,
            "preDeploy":[],
            "postDeploy":[],
            "servidoresDeployParalelos":[
                {
                    "nombre": "Ambientes-2.X",
                    "host": "10.76.28.133",
                    "path": "/home/z001534/bd-loader3",
                    "os": "linux",
                    "dryRun": false,
                    "enabled": true
                },  
                {
                    "nombre": "Ambientes-2.Y",
                    "host": "10.76.28.133",
                    "path": "/home/z001534/bd-loader4",
                    "os": "linux",
                    "dryRun": false,
                    "enabled": false
                },  
                {
                    "nombre": "Ambientes-2.Z",
                    "host": "10.76.28.133",
                    "path": "/home/z001534/bd-loader4",
                    "os": "linux",
                    "dryRun": false,
                    "enabled": false
                }
            ]
        },
        {
            "nombre": "Ambiente 3",
            "host": "10.76.28.133",
            "path": "/home/z001534/bd-loader3",
            "os": "linux",
            "dryRun": false,
            "enabled": false,
            "preDeploy":[],
            "postDeploy":[]
        },
        {
            "nombre":"Ambientes-4", 
            "dryRun": false,
            "enabled": true,
            "preDeploy":[],
            "postDeploy":[],
            "servidoresDeployParalelos":[
                {
                    "nombre": "Ambientes-4.A",
                    "host": "10.76.28.133",
                    "path": "/home/z001534/bd-loader3",
                    "os": "linux",
                    "dryRun": false,
                    "enabled": false
                },  
                {
                    "nombre": "Ambientes-4.B",
                    "host": "10.76.28.133",
                    "path": "/home/z001534/bd-loader4",
                    "os": "linux",
                    "dryRun": false,
                    "enabled": true
                },  
                {
                    "nombre": "Ambientes-4.C",
                    "host": "10.76.28.133",
                    "path": "/home/z001534/bd-loader4",
                    "os": "linux",
                    "dryRun": false,
                    "enabled": true
                }
            ]
        },
        {
            "nombre": "Ambiente 5",
            "host": "10.76.28.133",
            "path": "/home/z001534/bd-loader3",
            "os": "linux",
            "requiereTicketHelix": false,
            "esperarPruebas": true,
            "dryRun": false,
            "enabled": true,
            "preDeploy":[],
            "postDeploy":[]
        }
    ]
}
`;