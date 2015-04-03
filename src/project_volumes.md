# Group Project Volumes

## Project Volume [/project_volumes/{id}]
A single Project Volume object

Each Project Volume has the following properties:
- **id**: id of project volume relationship
- **project**: project with volume attached
- **volume**: volume attached to project

+ Parameters
    + id (number, required) ... integer id of the project volume relationship

+ Model (application/json)

    JSON representation of Project Volume resource

    + Body

        {
            "id": 1,
            "url": "https://atmobeta.iplantc.org/api/v2/project_volumes/1",
            "project": {
                "id": 1,
                "url": "https://atmobeta.iplantc.org/api/v2/projects/1",
                "name": "name",
                "description": "description",
                "owner": "user",
                "start_date": "2015-03-17T01:50:51.966674Z",
                "end_date": null
            },
            "volume": {
                "id": 1,
                "uuid": "923222d2-a508-4b2c-b19e-00a29f1a5bb5",
                "url": "https://atmobeta.iplantc.org/api/v2/volumes/1",
                "name": "name",
                "size": 4,
                "user": {
                    "id": 3178,
                    "url": "https://atmobeta.iplantc.org/api/v2/users/3178",
                    "username": "user",
                    "first_name": "User",
                    "last_name": "Name",
                    "email": "user@iplantcollaborative.org",
                    "is_staff": true,
                    "is_superuser": true,
                    "date_joined": "2015-02-11T22:37:24Z"
                },
                "provider": {
                    "id": 4,
                    "uuid": "923222d2-a508-4b2c-b19e-00a29f1a5bb5",
                    "url": "https://atmobeta.iplantc.org/api/v2/providers/4",
                    "name": "iPlant Cloud - Tucson",
                    "description": "<No Description Provided>",
                    "public": true,
                    "active": true,
                    "start_date": "2014-02-04T19:09:20.713175Z",
                    "end_date": null
                },
                "identity": {
                    "id": 1,
                    "uuid": "923222d2-a508-4b2c-b19e-00a29f1a5bb5",
                    "url": "https://atmobeta.iplantc.org/api/v2/identities/1",
                    "provider": 4
                },
                "projects": [
                    1
                ],
                "start_date": "2015-02-16T19:53:36.190034Z",
                "end_date": null
            }
        }

### Retrieve a Project Volume resource [GET]
Get a specific Project Volume

+ Response 200 (application/json)
    [Project Volume][]

### Update a Project Volume [PATCH]
Update a Project Volume

+ Response 204 (application/json)
    [Project Volume][]

### Delete a Project Volume [DELETE]
Remove a volume from a project

+ Response 204 (application/json)



## Project Volume Collection [/project_volumes]
Collection of all project volume relationships

+ Model (application/json)
    JSON representation of Project Volume collection

    + Body
        {
            "count": 1,
            "next": null,
            "previous": null,
            "results": [
                {
                    "id": 1,
                    "url": "https://atmobeta.iplantc.org/api/v2/project_volumes/1",
                    "project": {
                        "id": 1,
                        "url": "https://atmobeta.iplantc.org/api/v2/projects/1",
                        "name": "name",
                        "description": "description",
                        "owner": "user",
                        "start_date": "2015-03-17T01:50:51.966674Z",
                        "end_date": null
                    },
                    "volume": {
                        "id": 1,
                        "uuid": "923222d2-a508-4b2c-b19e-00a29f1a5bb5",
                        "url": "https://atmobeta.iplantc.org/api/v2/volumes/1",
                        "name": "name",
                        "size": 4,
                        "user": {
                            "id": 3178,
                            "url": "https://atmobeta.iplantc.org/api/v2/users/3178",
                            "username": "user",
                            "first_name": "User",
                            "last_name": "Name",
                            "email": "user@iplantcollaborative.org",
                            "is_staff": true,
                            "is_superuser": true,
                            "date_joined": "2015-02-11T22:37:24Z"
                        },
                        "provider": {
                            "id": 4,
                            "uuid": "923222d2-a508-4b2c-b19e-00a29f1a5bb5",
                            "url": "https://atmobeta.iplantc.org/api/v2/providers/4",
                            "name": "iPlant Cloud - Tucson",
                            "description": "<No Description Provided>",
                            "public": true,
                            "active": true,
                            "start_date": "2014-02-04T19:09:20.713175Z",
                            "end_date": null
                        },
                        "identity": {
                            "id": 1,
                            "uuid": "923222d2-a508-4b2c-b19e-00a29f1a5bb5",
                            "url": "https://atmobeta.iplantc.org/api/v2/identities/1",
                            "provider": 4
                        },
                        "projects": [
                            1
                        ],
                        "start_date": "2015-02-16T19:53:36.190034Z",
                        "end_date": null
                    }
                }
            ]
        }



### Get all project volumes [GET]

+ Response 200(application/json)

  [Project Volume Collection][]

### Add Volume to Project [POST]
Add volume to project. You must specify the following properties:

 - **project**: project id
 - **volume**: volume id

 + Request (application/json)

        {
          "project": 1,
          "volume": 1
        }

+ Response 200 (application/json)

    [Project Volume][]


## Single Project Volume Collection [/project_volumes{?project__id}]
Get volumes of a single project

+ Parameters
    +project__id (number, optional) ... id of the Project

+ Model (application/json)
JSON Representation of Single Project Volume collection

      + Body
          {
            "count": 1,
            "next": null,
            "previous": null,
            "results": [
                {
                    "id": 1,
                    "url": "https://atmobeta.iplantc.org/api/v2/project_volumes/1",
                    "project": {
                        "id": 1,
                        "url": "https://atmobeta.iplantc.org/api/v2/projects/1",
                        "name": "name",
                        "description": "description",
                        "owner": "user",
                        "start_date": "2015-03-17T01:50:51.966674Z",
                        "end_date": null
                    },
                    "volume": {
                        "id": 1,
                        "uuid": "923222d2-a508-4b2c-b19e-00a29f1a5bb5",
                        "url": "https://atmobeta.iplantc.org/api/v2/volumes/1",
                        "name": "name",
                        "size": 4,
                        "user": {
                            "id": 3178,
                            "url": "https://atmobeta.iplantc.org/api/v2/users/3178",
                            "username": "user",
                            "first_name": "User",
                            "last_name": "Name",
                            "email": "user@iplantcollaborative.org",
                            "is_staff": true,
                            "is_superuser": true,
                            "date_joined": "2015-02-11T22:37:24Z"
                        },
                        "provider": {
                            "id": 4,
                            "uuid": "923222d2-a508-4b2c-b19e-00a29f1a5bb5",
                            "url": "https://atmobeta.iplantc.org/api/v2/providers/4",
                            "name": "iPlant Cloud - Tucson",
                            "description": "<No Description Provided>",
                            "public": true,
                            "active": true,
                            "start_date": "2014-02-04T19:09:20.713175Z",
                            "end_date": null
                        },
                        "identity": {
                            "id": 1,
                            "uuid": "923222d2-a508-4b2c-b19e-00a29f1a5bb5",
                            "url": "https://atmobeta.iplantc.org/api/v2/identities/1",
                            "provider": 4
                        },
                        "projects": [
                            1
                        ],
                        "start_date": "2015-02-16T19:53:36.190034Z",
                        "end_date": null
                    }
                }
            ]
        }


### Retrieve a Single Project's Volumes [GET]
+ Response 200 (application/json)

    [Single Project Volume Collection][]

