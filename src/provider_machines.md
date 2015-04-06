# Group Provider Machines -done-
Represent the physical virtual machine snapshot that gets launched on a provider.  Whether a provider_machine exists
for a given image and provider determines whether that image can be launched on that provider.
 
## Provider Machine [/provider_machines/{id}]
A single Provider Machine object.

Each Provider Machine has the following properties:

- **id**: the id for the provider machine
- **uuid**: uuid for the provider machine
- **image**: image installed on this provider machine
- **provider**: provider this machine is a part of
- **created_by**: user who created this machine
- **start_date**: date of machine creation
- **end_date**: date of machine termination

+ Parameters
    + id (number, required) ... `id` of the Provider.

+ Model(application/json)

    + Body
    
        {
            "id": 1,
            "uuid": "923222d2-a508-4b2c-b19e-00a29f1a5bb5",
            "image": {
                "id": 196,
                "uuid": "923222d2-a508-4b2c-b19e-00a29f1a5bb5"
            },
            "provider": {
                "id": 1,
                "uuid": "923222d2-a508-4b2c-b19e-00a29f1a5bb5"
            },
            "created_by": {
                "id": 1586
            },
            "start_date": "2013-07-25T07:00:00Z",
            "end_date": null
        }

### Retrieve a Provider Machine [GET]
+ Response 200 (application/json)

    [Provider Machine][]

## Provider Machine Collection [/provider_machines]
Collection of all Provider Machines.

+ Model (application/json)

    + Body

            "count": 1,
            "next": null,
            "previous": null,
            "results": [
                {
                    "id": 1,
                    "uuid": "923222d2-a508-4b2c-b19e-00a29f1a5bb5",
                    "image": {
                        "id": 196,
                        "uuid": "923222d2-a508-4b2c-b19e-00a29f1a5bb5"
                    },
                    "provider": {
                        "id": 1,
                        "uuid": "923222d2-a508-4b2c-b19e-00a29f1a5bb5"
                    },
                    "created_by": {
                        "id": 1586
                    },
                    "start_date": "2013-07-25T07:00:00Z",
                    "end_date": null
                }
            ]

### List all Provider Machines [GET]
+ Response 200 (application/json)

    [Provider Machine Collection][]
