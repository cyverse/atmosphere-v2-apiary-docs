# Group Volumes
Volumes are network based storage that a user can attach to any instance.  They can then be detached and attached to a
 different instance.

## Volume [/volumes/{id}]
A single Volume object.

Each Volume has the following properties:

- **id**: id for the volume
- **uuid**: uuid for the volume
- **name**: name of volume
- **size**: id of size of volume
- **user**: user the volume belongs to
- **provider**: provider volume is stored on
- **identity**: identity of volume
- **start_date**: date of volume creation
- **end_date**: date of volume deletion

+ Parameters
    + id (number, required) ... id of the Volume.
    
+ Model (application/json)

    + Body
    
        {
            "id": 1483,
            "uuid": "7ef79cdd-9ac6-4202-8057-7069748c8a0f",
            "name": "name",
            "size": 4,
            "user": {
                "id": 3178
            },
            "provider": {
                "id": 4,
                "uuid": "9cfe2f92-9416-5e0b-a00f-94076df25ef3"
            },
            "identity": {
                "id": 6512,
                "uuid": "f712fa8c-8371-5ffd-a91a-532ef316d3f4"
            },
            "projects": [],
            "start_date": "2015-02-16T19:53:36.190034Z",
            "end_date": null
        }


### Retrieve a Volume [GET]
+ Response 200 (application/json)

    [Volume][]

### Update a Volume [PATCH]
You can update the following properties for volumes you own:
- **name**: the name of the volume

+ Request (application/json)

    + Body
    
        {
            name: "new name"
        }
    [Volume][]

### Terminate a Volume [DELETE]
Terminate a volume.

+ Response 200 (application/json)

    [Volume][]


## Volume Collection [/volumes]
Collection of all Volumes.
    
+ Model (application/json)

    + Body
    
        {
            "count": 1,
            "next": null,
            "previous": null,
            "results": [
                {
                    "id": 1483,
                    "uuid": "7ef79cdd-9ac6-4202-8057-7069748c8a0f",
                    "name": "name",
                    "size": 4,
                    "user": {
                        "id": 3178
                    },
                    "provider": {
                        "id": 4,
                        "uuid": "9cfe2f92-9416-5e0b-a00f-94076df25ef3"
                    },
                    "identity": {
                        "id": 6512,
                        "uuid": "f712fa8c-8371-5ffd-a91a-532ef316d3f4"
                    },
                    "start_date": "2015-02-16T19:53:36.190034Z",
                    "end_date": null
                }
            ]
        }

### List all Volumes [GET]
+ Response 200 (application/json)

    [Volume Collection][]

### Create an Volume [POST]
To Create a new volume, you need to specify the following properties:
- **name**: The name of your new instance
- **identity**: The identity you want to use to create your instance. (This also determines what cloud provider you will be launching on)
- **size**: The integer size (in GB) requested when creating your volume.
- **project**: _(Optional)_ The UUID of the project  that you want to add this instance to. (If not selected, you will be required to add it to a project in the Troposphere UI)
- **snapshot**: _(Optional)_ The UUID of the snapshot that you would like to use as a 'Base' for your volume.
- **image**: _(Optional)_ The UUID of the image that you would like to use as a 'Base' for your volume.
- **description**: _(Optional)_ The description of your volume (Included in the cloud metadata)

+ Request (application/json)

        {
            "name": "My First Volume",
            "identity": "b3c83812-10d8-4ae5-8f2a-dc922182e65e",
            "size": 1,
            "project": "fae4003e-7125-43b8-b466-c59b6a2d120a",
            "description": "My first description",
            "snapshot": null,
            "image": null
        }
+ Response 201 (application/json)
        {
            "id": 1,
            "uuid": "12345678-6c44-4843-abef-876543212345",
            "name": "My First Volume",
            "description": "My first description",
            "identity": {
                "id": "1",
                "uuid": "12345678-8e6d-46dd-be89-e3f1eac9da78",
                "url": "https://atmobeta.iplantc.org/api/v2/identities/12345678-8e6d-46dd-be89-e3f1eac9da78",
                "provider": 5
            },
            "user": {
                "id": 1,
                "uuid": "12345678-2c7b-4ea7-84ad-1f07842811a3",
                "url": "https://atmobeta.iplantc.org/api/v2/users/12345678-2c7b-4ea7-84ad-1f07842811a3",
                "username": "sgregory"
            },
            "provider": {
                "id": 5,
                "uuid": "12345678-d7bb-4541-9705-af41015e6442",
                "url": "https://atmobeta.iplantc.org/api/v2/providers/12345678-d7bb-4541-9705-af41015e6442",
                "name": "iPlant Workshop Cloud - Tucson",
                "description": "Reserved for educational needs, workshops, and classes.",
                "public": false,
                "active": true,
                "start_date": "2014-06-06T20:37:32.160599Z",
                "end_date": null
            },
            "projects": [
                1
            ],
            "size": 1,
            "url": "https://atmobeta.iplantc.org/api/v2/volumes/12345678-6c44-4843-abef-876543212345",
            "start_date": "2014-09-25T17:14:27Z",
            "end_date": null
        }

    [Volume][]
