# Group Volumes
Volumes are network based storage that a user can attach to any instance.  They can then be detached and attached to a
 different instance.

## Volume [/volumes/{id}]
A single Volume object.

Each Volume has the following properties:

- **id**: id for the volume
- **uuid**: unique identifier
- **name**: name of volume
- **size**: id of size of volume
- **user**: user the volume belongs to
- **provider**: provider volume is stored on
- **identity**: identity of volume
- **project**: projects volume is associated with
- **start_date**: date of volume creation
- **end_date**: date of volume deletion

+ Parameters
    + id (number, required) ... id of the Volume.
    
+ Model (application/json)

    JSON representation of Volume Resource.

    + Body
        {
            "id": 1483,
            "uuid": "7ef79cdd-9ac6-4202-8057-7069748c8a0f",
            "url": "https://atmobeta.iplantc.org/api/v2/volumes/1483",
            "name": "whatdoesthisdo",
            "size": 4,
            "user": {
                "id": 3178,
                "url": "https://atmobeta.iplantc.org/api/v2/users/3178",
                "username": "josephgarcia",
                "first_name": "Joseph",
                "last_name": "Garcia",
                "email": "prosif@gmail.com",
                "is_staff": true,
                "is_superuser": true,
                "date_joined": "2015-02-11T22:37:24Z"
            },
            "provider": {
                "id": 4,
                "uuid": "9cfe2f92-9416-5e0b-a00f-94076df25ef3",
                "url": "https://atmobeta.iplantc.org/api/v2/providers/4",
                "name": "iPlant Cloud - Tucson",
                "description": "<No Description Provided>",
                "public": true,
                "active": true,
                "start_date": "2014-02-04T19:09:20.713175Z",
                "end_date": null
            },
            "identity": {
                "id": 6512,
                "uuid": "f712fa8c-8371-5ffd-a91a-532ef316d3f4",
                "url": "https://atmobeta.iplantc.org/api/v2/identities/6512",
                "provider": 4
            },
            "projects": [],
            "start_date": "2015-02-16T19:53:36.190034Z",
            "end_date": null
        }


### Retrieve a Volume [GET]
+ Response 200 (application/json)

    [Volume][]
    
### Destroy a Volume [DELETE]
Destroy a volume.

+ Response 200 (application/json)

    [Volume][]

## Volume Collection [/volumes]
Collection of all Volumes.
    
+ Model (application/json)

    JSON representation of Volumes Collection Resource.

    + Body
        {
            "count": 1,
            "next": null,
            "previous": null,
            "results": [
                {
                    "id": 1483,
                    "uuid": "7ef79cdd-9ac6-4202-8057-7069748c8a0f",
                    "url": "https://atmobeta.iplantc.org/api/v2/volumes/1483",
                    "name": "whatdoesthisdo",
                    "size": 4,
                    "user": {
                        "id": 3178,
                        "url": "https://atmobeta.iplantc.org/api/v2/users/3178",
                        "username": "josephgarcia",
                        "first_name": "Joseph",
                        "last_name": "Garcia",
                        "email": "prosif@gmail.com",
                        "is_staff": true,
                        "is_superuser": true,
                        "date_joined": "2015-02-11T22:37:24Z"
                    },
                    "provider": {
                        "id": 4,
                        "uuid": "9cfe2f92-9416-5e0b-a00f-94076df25ef3",
                        "url": "https://atmobeta.iplantc.org/api/v2/providers/4",
                        "name": "iPlant Cloud - Tucson",
                        "description": "<No Description Provided>",
                        "public": true,
                        "active": true,
                        "start_date": "2014-02-04T19:09:20.713175Z",
                        "end_date": null
                    },
                    "identity": {
                        "id": 6512,
                        "uuid": "f712fa8c-8371-5ffd-a91a-532ef316d3f4",
                        "url": "https://atmobeta.iplantc.org/api/v2/identities/6512",
                        "provider": 4
                    },
                    "projects": [],
                    "start_date": "2015-02-16T19:53:36.190034Z",
                    "end_date": null
                }
            ]
        }
    
### List all Volumes [GET]
+ Response 200 (application/json)

    [Volume Collection][]
