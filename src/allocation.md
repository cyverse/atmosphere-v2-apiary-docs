# Group Allocation
Allocations represent Atmosphere AU values.

## Allocation [/allocations/{id}]
A single Allocation object.

Each Allocation has the following properties:

- **id**: unique id for the provider
- **url**: url the allocation can be found at
- **threshold**: amount of CPU minutes allocated
- **description**: a description of the provider


+ Parameters
    + id (required, number, '1') ... Number `id` of the Provider.

+ Model(application/json)

    JSON representation of Provider Resource

    + Body

            {
                "id": 1,
                "name": "planetTatooine",
                "description": "planetTatooine"
            }


### Retrieve an Allocation [GET]
+ Response 200 (application/json)

    [Allocation][]

## Allocation Collection [/allocations]
Collection of all Providers.

+ Model (application/json)

    JSON representation of Allocation Collection Resource.

    + Body

            [
                {
                    "id": 1,
                    "name": "planetTatooine",
                    "description": "planetTatooine"
                },
                {
                    "id": 2,
                    "name": "stormCloud",
                    "description": "full of lightning"
                }
            ]

### List all Allocations [GET]
+ Response 200 (application/json)

    [Allocation Collection][]
