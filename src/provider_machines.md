## Provider Machine [/provider_machines/{id}]
A single Provider Machine object.

Each Provider Machine has the following properties:

- **id**: provider machine id
- **uuid**: unique universal id
- **image**:
- **provider**:
- **created_by**:
- **start_date**:
- **end_date**:

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

    [Provider Machine][]

## Provider Machine Collection [/provider_machines]
Collection of all Provider Machines.

+ Parameters
    + page (string, optional) ... Page of results
    + page_size (string, optional) ... Number of results

+ Model (application/json)

    JSON representation of Provider Machine Collection Resource.

    + Body

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

### List all Provider Machines [GET]
+ Response 200 (application/json)

    [Provider Machine Collection][]
