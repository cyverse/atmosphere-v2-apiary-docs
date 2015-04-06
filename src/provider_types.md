# Group Provider Types -done-
The types of cloud providers that Atmosphere supports (OpenStack, Eucalyptus, Amazon EC2, etc.)

## Provider Type [/provider_types/{id}]
A single Provider Type object.

Each Provider Type has the following properties:

- **id**: id for the provider type
- **name**: text name of provider type
- **start_date**: date of provider type creation
- **end_date**: date of provider type deletion

+ Parameters
    + id (number, required) ... `id` of the Provider.

+ Model(application/json)

    + Body
    
        {
            "id": 1,
            "name": "OpenStack",
            "start_date": "2012-10-29T23:21:36.253000Z",
            "end_date": null
        }

### Retrieve a Provider Type [GET]
+ Response 200 (application/json)

    [Provider Type][]

## Provider Type Collection [/provider_machines]
Collection of all Provider Types.

+ Model (application/json)

    JSON representation of Provider Type Collection Resource.

    + Body

        "count": 1,
        "next": null,
        "previous": null,
        "results": [
            {
              "id": 1,
              "name": "OpenStack",
              "start_date": "2012-10-29T23:21:36.253000Z",
              "end_date": null
            }
        ]

### List all Provider Machines [GET]
+ Response 200 (application/json)

    [Provider Type Collection][]
