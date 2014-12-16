# Group Provider -updated-
Providers represent the different cloud providers managed by Atmosphere.

## '/providers/{id}' [/providers/{id}]
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

    ['/providers/{id}'][]

## '/providers' [/providers]
Collection of all Providers.

+ Model (application/json)

    JSON representation of Provider Collection Resource.

    + Body

            [
                {
                    "id": 1,
                    "name": "planetTatooine",
                    "description": "planetTatooine"
                }
            ]
            
### List all Providers [GET]
+ Response 200 (application/json)

    ['/providers'][]
