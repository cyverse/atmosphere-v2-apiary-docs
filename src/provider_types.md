# Group Provider Types -done-

## Provider Type [/provider_types/{id}]
A single Provider Type object.

Each Provider Type has the following properties:

- **id**: provider type id
- **name**: text name of provider type
- **start_date**: date of provider type creation
- **end_date**: date of provider type deletion

+ Parameters
    + id (required, number, '1') ... Number `id` of the Provider.

+ Model(application/json)

    JSON representation of Provider Type

    + Body
        {
            "id": 1,
            "url": "https://atmobeta.iplantc.org/api/v2/provider_types/1",
            "name": "Eucalyptus",
            "start_date": "2012-10-29T23:21:36.253000Z",
            "end_date": null
        }

### Retrieve a Provider Type [GET]
+ Response 200 (application/json)

    [Provider Type][]

## Provider Type Collection [/provider_machines]
Collection of all Provider Types.

+ Parameters
    + page (string, optional) ... Page of results
    + page_size (string, optional) ... Number of results

+ Model (application/json)

    JSON representation of Provider Type Collection Resource.

    + Body

        "count": 1,
        "next": null,
        "previous": null,
        "results": [
            {
              "id": 1,
              "url": "https://atmobeta.iplantc.org/api/v2/provider_types/1",
              "name": "Eucalyptus",
              "start_date": "2012-10-29T23:21:36.253000Z",
              "end_date": null
            }
        ]

### List all Provider Machines [GET]
+ Response 200 (application/json)

    [Provider Type Collection][]
