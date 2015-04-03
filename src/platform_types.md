# Group Platform Types

## Platform Type [/platform_types/{id}]
A single Platform Type object.

Each Platform Type has the following properties:

- **id**: id for the Platform Type
- **name**: name of Platform Type
- **start_date**: date of Platform Type creation
- **end_date**: date of Platform Type deletion


+ Parameters
    + id (required, number, '1') ... Number `id` of the Provider.

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

+ Parameters
    + page (string, optional) ... Page of results
    + page_size (string, optional) ... Number of results

+ Model (application/json)

    JSON representation of Platform Type Collection Resource.

    + Body
         {
            "count": 2,
            "next": null,
            "previous": null,
            "results": [
                {
                    "id": 1,
                    "name": "Xen",
                    "start_date": "2013-10-18T07:00:00Z",
                    "end_date": null
                },
                {
                    "id": 2,
                    "name": "KVM",
                    "start_date": "2013-10-18T07:00:00Z",
                    "end_date": null
                }
            ]
         }

### List all Platform Types [GET]
+ Response 200 (application/json)

    [Platform Type Collection][]
