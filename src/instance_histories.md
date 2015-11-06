# Group Instance Histories
This endpoint returns a list of all instances that a user has launched since the time their account was created.

## Instance Histories [/instance_histories/{id}]
A single Instance History object.

Each Instance History object has the following properties:

- **id**: id
- **uuid**: unique id
- **url**: The URL for the details page for this instance history.
- **instance**: The instance object that 'owns' this history.
- **status**: The status name applied to this history.
- **size**: The instance size that was applied to this history.
- **provider**: The provider that created the instance (and its history).
- **image**: The image the instance was based off.
- **start_date**: the date the instance was launched
- **end_date**: the date the instance was deleted

    
+ Parameters
    + uuid (required, string, '36f0795e-f80b-11e3-8ef5-b2227cce2b55') ... String `uuid` of the Instance.
    
+ Model (application/json)

    JSON representation of Instance Histories Resource.

    + Body

            {
                "id": 86732,
                "uuid": "a5c3b562-fecd-4f3b-abd6-7ac1ab5924d4",
                "url": "https://atmobeta.iplantc.org/api/v2/instance_histories/a5c3b562-fecd-4f3b-abd6-7ac1ab5924d4",
                "instance": {
                    "id": 21513,
                    "uuid": "edf972fb-81f4-4425-a0eb-c427caeb46d7",
                    "url": "https://atmobeta.iplantc.org/api/v2/instances/edf972fb-81f4-4425-a0eb-c427caeb46d7",
                    "name": "austin localdev",
                    "status": "suspended",
                    "ip_address": "0.0.0.0",
                    "shell": false,
                    "vnc": false,
                    "user": 1,
                    "provider": 6,
                    "start_date": "2015-10-08T15:49:18Z",
                    "end_date": null
                },
                "status": "suspended",
                "size": {
                    "id": 122,
                    "uuid": "2d60f4d1-8cb4-4248-80fe-b560a5f7f1e7",
                    "url": "https://atmobeta.iplantc.org/api/v2/sizes/2d60f4d1-8cb4-4248-80fe-b560a5f7f1e7",
                    "alias": "1",
                    "name": "tiny",
                    "cpu": 1,
                    "disk": 0,
                    "mem": 4096,
                    "active": true,
                    "start_date": "2014-10-29T18:18:17.492359Z",
                    "end_date": null
                },
                "provider": {
                    "id": 6,
                    "uuid": "d9ec29bb-b93c-430d-8f1b-29217c6348d4",
                    "url": "https://atmobeta.iplantc.org/api/v2/providers/d9ec29bb-b93c-430d-8f1b-29217c6348d4",
                    "name": "iPlant Cloud - Austin",
                    "description": "Reserved for image developers, tool developers, and prepublication preparation. Allocation is granted by separate science committee, based on availability and the nature of the project.",
                    "public": false,
                    "active": true,
                    "start_date": "2014-10-29T18:15:13.712495Z",
                    "end_date": null
                },
                "image": {
                    "id": 1192,
                    "url": "https://atmobeta.iplantc.org/api/v2/images/3ef5fc54-b9db-4977-b82e-6ee9d14e8419",
                    "uuid": "3ef5fc54-b9db-4977-b82e-6ee9d14e8419",
                    "name": "Ubuntu 12.04 Unity GUI v2",
                    "description": "Imported Application - Ubuntu 12.04 Unity GUI v2",
                    "icon": null,
                    "start_date": "2015-09-24T23:26:03.611509Z",
                    "end_date": null,
                    "user": 1926
                },
                "start_date": "2015-10-30T03:12:03.436847Z",
                "end_date": null
                "end_date": null
            }

### Retrieve an Instance Histories [GET]
Get a specific instance history object.

+ Response 200 (application/json)

    [Instance Histories][]

## Instance Histories Collection [/instance_histories]
The history of all of the user's instances since the date their account was created.
    
+ Model (application/json)

    JSON representation of Instances Histories Collection Resource.

    + Body

            {
                "count": 1,
                "next": null,
                "previous": null,
                "results": [
                    {
                        "id": 86732,
                        "uuid": "a5c3b562-fecd-4f3b-abd6-7ac1ab5924d4",
                        "url": "https://atmobeta.iplantc.org/api/v2/instance_histories/a5c3b562-fecd-4f3b-abd6-7ac1ab5924d4",
                        "instance": {
                            "id": 21513,
                            "uuid": "edf972fb-81f4-4425-a0eb-c427caeb46d7",
                            "url": "https://atmobeta.iplantc.org/api/v2/instances/edf972fb-81f4-4425-a0eb-c427caeb46d7",
                            "name": "austin localdev",
                            "status": "suspended",
                            "ip_address": "0.0.0.0",
                            "shell": false,
                            "vnc": false,
                            "user": 1,
                            "provider": 6,
                            "start_date": "2015-10-08T15:49:18Z",
                            "end_date": null
                        },
                        "status": "suspended",
                        "size": {
                            "id": 122,
                            "uuid": "2d60f4d1-8cb4-4248-80fe-b560a5f7f1e7",
                            "url": "https://atmobeta.iplantc.org/api/v2/sizes/2d60f4d1-8cb4-4248-80fe-b560a5f7f1e7",
                            "alias": "1",
                            "name": "tiny",
                            "cpu": 1,
                            "disk": 0,
                            "mem": 4096,
                            "active": true,
                            "start_date": "2014-10-29T18:18:17.492359Z",
                            "end_date": null
                        },
                        "provider": {
                            "id": 6,
                            "uuid": "d9ec29bb-b93c-430d-8f1b-29217c6348d4",
                            "url": "https://atmobeta.iplantc.org/api/v2/providers/d9ec29bb-b93c-430d-8f1b-29217c6348d4",
                            "name": "iPlant Cloud - Austin",
                            "description": "Reserved for image developers, tool developers, and prepublication preparation. Allocation is granted by separate science committee, based on availability and the nature of the project.",
                            "public": false,
                            "active": true,
                            "start_date": "2014-10-29T18:15:13.712495Z",
                            "end_date": null
                        },
                        "image": {
                            "id": 1192,
                            "url": "https://atmobeta.iplantc.org/api/v2/images/3ef5fc54-b9db-4977-b82e-6ee9d14e8419",
                            "uuid": "3ef5fc54-b9db-4977-b82e-6ee9d14e8419",
                            "name": "Ubuntu 12.04 Unity GUI v2",
                            "description": "Imported Application - Ubuntu 12.04 Unity GUI v2",
                            "icon": null,
                            "start_date": "2015-09-24T23:26:03.611509Z",
                            "end_date": null,
                            "user": 1926
                        },
                        "start_date": "2015-10-30T03:12:03.436847Z",
                        "end_date": null
                    }
                ]
            }
    
### List all Instances [GET]
Get a list of all the instances the user has created.

+ Response 200 (application/json)

    [Instance Histories Collection][]

