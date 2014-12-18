# Group Volume -updated-
Volumes are network based storage that a user can attach to any instance.  They can then be detached and attached to a
 different instance.

## Volume [/provider/{providerId}/identity/{identityId}/volume/{id}]
A single Volume object.

Each Volume has the following properties:

- **id**: unique id for the volume
- **created_by**: user id of the person who created the volume
- **name**: name of the volume
- **description**: description of the volume
- **status**: status of the volume (detaching, attaching, available or in-use)
- **size**: size of the volume in Gigabytes
- **attach_data**: if the volume is attached to an instance, provides details about which instance it's attached to and
 where the volume is mounted to on the instance
- **provider**: provider the volume is created on
- **identity**: identity that created the volume

+ Parameters
    + id (required, string, '13138b97-786a-4e57-9acc-5d41cfd21f75') ... String `alias` of the Volume.
    
+ Model (application/json)

    JSON representation of Volume Resource.

    + Body

            {
                "id": "232333c94-7864-4157-9cq-5441ff321F11",
                "name": "My_Other_Volume",
                "created_by": 1,
                "description": "",
                "status": "available",
                "size": 1,
                "attach_data": {},
                "provider": {
                  "id": "1",
                  "name": "iPlant Tucson"
                },
                "identity": {
                    "id": 1,
                    "created_by": "username",
                    "provider_id": 1
                },
                "start_date": "2014-05-13T00:24:58Z"
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

            [
                {
                    "id": "232333c94-7864-4157-9cq-5441ff321F11",
                    "name": "My_Other_Volume",
                    "created_by": 1,
                    "description": "",
                    "status": "available",
                    "size": 1,
                    "attach_data": {
                        "instance_id": "bac30113-423d-44bd-8d7a-41136e9ers34",
                        "device": "/dev/vdc"
                    },
                    "provider": {
                      "id": "1",
                      "name": "iPlant Tucson"
                    },
                    "identity": {
                        "id": 1,
                        "created_by": "username",
                        "provider_id": 1
                    },
                    "start_date": "2014-05-13T00:24:58Z"
                }
            ]
    
### List all Volumes [GET]
+ Response 200 (application/json)

    [Volume Collection][]

### Create a Volume [POST]
Create a volume.  You must specify the following properties:

- **name**: the name of the volume
- **size**: the size of the volume in Gigabytes
- **description**: a description of the volume

+ Request (application/json)

        {
            "name": "New Volume",
            "size": 1,
            "description": "Description of new volume"
        }

+ Response 201 (application/json)

    [Volume][]
