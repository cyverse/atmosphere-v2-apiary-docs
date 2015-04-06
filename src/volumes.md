# Group Volumes -done-
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
+ Request

    + Body
    
        {
            name: "new name"
        }


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
