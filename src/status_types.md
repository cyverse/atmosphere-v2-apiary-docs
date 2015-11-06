# Group Status Types
Status Types are an enumeration of all possible 'states' of a 'Request' object in Atmosphere. Example states are "pending", "closed", "approved", and "rejected".

## Status Type [/status_types/{id}]
A single Status Type object.

Each Status Type has the following properties:

- **id**: id for the status type
- **url**: url for the status type
- **uuid**: uuid for the status type
- **name**: text name of status type
- **description**: Longer decription of when/how this status type is used.
- **start_date**: date of status type creation
- **end_date**: date of status type deletion

+ Parameters
    + id (number, required) ... `id` of the Status Type.

+ Model(application/json)

    + Body
    
        {
            "id": 1,
            "url": "https://atmobeta.iplantc.org/api/v2/status_types/e69f3223-f64d-46e7-a933-c2d68f7088ec",
            "uuid": "e69f3223-f64d-46e7-a933-c2d68f7088ec",
            "name": "pending",
            "description": "",
            "start_date": "2015-01-26T07:00:00Z",
            "end_date": null
        }

### Retrieve a Status Type [GET]
+ Response 200 (application/json)

    [Status Type][]

## Status Type Collection [/status_types]
Collection of all Status Types.

+ Model (application/json)

    JSON representation of Status Type Collection Resource.

    + Body

        "count": 1,
        "next": null,
        "previous": null,
        "results": [
            {
                "id": 1,
                "url": "https://atmobeta.iplantc.org/api/v2/status_types/e69f3223-f64d-46e7-a933-c2d68f7088ec",
                "uuid": "e69f3223-f64d-46e7-a933-c2d68f7088ec",
                "name": "pending",
                "description": "",
                "start_date": "2015-01-26T07:00:00Z",
                "end_date": null
            }
        ]

### List all Status Types [GET]
+ Response 200 (application/json)

    [Status Type Collection][]
