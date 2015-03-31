# Group Allocation
Allocations represent Atmosphere AU values.

## Allocation [/allocations/{id}]
A single Allocation object.

Each Allocation has the following properties:

- **id**: unique id for the provider
- **threshold**: amount of CPU minutes allocated
- **delta**: a description of the provider


+ Parameters
    + id (required, number, '1') ... Number `id` of the Provider.

+ Model(application/json)

    JSON representation of Provider Resource

    + Body

            {
                "id": 1,
                "threshold": 10080,
                "delta": 20160
            }


### Retrieve an Allocation [GET]
+ Response 200 (application/json)

    [Allocation][]

## Allocation Collection [/allocations]
Collection of all Providers.

+ Parameters
    + page (string, optional) ... Page of results
    + page_size (string, optional) ... Number of results

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
                  "threshold": 10080,
                  "delta": 20160
              },
              {
                  "id": 2,
                  "threshold": 20160,
                  "delta": 20160
              }
            ]
        }

### List all Allocations [GET]
+ Response 200 (application/json)

    [Allocation Collection][]
