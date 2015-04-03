# Group Platform Types -done-

## Platform Type [/platform_types/{id}]
A single Platform Type object.

Each Platform Type has the following properties:

- **id**: id for the Platform Type
- **name**: name of Platform Type
- **start_date**: date Platform Type was created
- **end_date**: date Platform Type was deleted


+ Parameters
    + id (required, number) ... Number `id` of the Platform Type.

+ Model(application/json)

    JSON representation of Platform Type Resource

    + Body

        {
            "id": 1,
            "name": "Xen",
            "start_date": "2013-10-18T07:00:00Z",
            "end_date": null
        }


### Retrieve a Platform Type [GET]
+ Response 200 (application/json)

    [Platform Type][]

## Platform Type Collection [/platform_types]
Collection of all Platform Types.

+ Model (application/json)

    JSON representation of Platform Type Collection Resource.

    + Body
    
        {
            "count": 1,
            "next": null,
            "previous": null,
            "results": [
                {
                    "id": 1,
                    "name": "Xen",
                    "start_date": "2013-10-18T07:00:00Z",
                    "end_date": null
                }
            ]
        }

### List all Platform Types [GET]
+ Response 200 (application/json)

    [Platform Type Collection][]
