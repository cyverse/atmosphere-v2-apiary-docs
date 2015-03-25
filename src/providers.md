# Group Providers
Providers represent the different cloud providers managed by Atmosphere.

## Provider [/providers/{id}]
A single Provider object.

Each Provider has the following properties:

- **id**: unique id for the provider
- **name**: the display name for the provider
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


### Retrieve a Provider [GET]
+ Response 200 (application/json)

    [Provider][]

## Provider Collection [/providers]
Collection of all Providers.

+ Model (application/json)

    JSON representation of Provider Collection Resource.

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
            
### List all Providers [GET]
+ Response 200 (application/json)

    [Provider Collection][]
