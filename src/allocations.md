# Group Allocation
Allocations represent Atmosphere AU values.

## Allocation [/allocations/{id}]
A single Allocation object.

Each Allocation has the following properties:

- **id**: unique id for the provider
- **threshold**: amount of CPU minutes allocated

+ Parameters
    + id (required, number) ... `id` of the Allocation.

+ Model(application/json)

    JSON representation of Provider Resource

    + Body

            {
                "id": 1,
                "threshold": 10080
            }


### Retrieve an Allocation [GET]
+ Response 200 (application/json)

    [Allocation][]

## Allocation Collection [/allocations]
Collection of all Providers.

+ Model (application/json)

    JSON representation of Allocation Collection Resource.

    + Body
        {
            "count": 2,
            "next": null,
            "previous": null,
            "results": [
                {
                    "id": 1,
                    "threshold": 10080
                },
                {
                    "id": 2,
                    "threshold": 20160
                }
            ]
        }

### List all Allocations [GET]
+ Response 200 (application/json)

    [Allocation Collection][]
