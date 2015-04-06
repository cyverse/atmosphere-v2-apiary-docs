# Group Providers
Providers represent the different cloud providers managed by Atmosphere.

## Provider [/providers/{id}]
A single Provider object.

Each Provider has the following properties:

- **id**: the id for the provider
- **uuid**: uuid for provider
- **name**: name of the provider
- **description**: description of the provider
- **public**: if provider is publicly accessible
- **active**: if provider is active
- **type**: type of provider
- **virtualization**: type of virtualization
- **sizes**: sizes available on this provider
- **start_date**: provider start date
- **end_date**: provider end date


+ Parameters
    + id (number, required) ... `id` of the Provider.

+ Model(application/json)

    + Body
    
          {
              "id": 4,
              "uuid": "f268aebc-d956-11e4-b9d6-1681e6b88ec1",
              "name": "iPlant Cloud - Tucson",
              "description": "<No Description Provided>",
              "public": true,
              "active": true,
              "type": {
                  "id": 2
              },
              "virtualization": {
                  "id": 2
              },
              "start_date": "2014-02-04T19:09:20.713175Z",
              "end_date": null
          }


### Retrieve a Provider [GET]
+ Response 200 (application/json)

    [Provider][]

## Provider Collection [/providers]
Collection of all Providers.

+ Model (application/json)

    + Body
    
          {
              "count": 1,
              "next": null,
              "previous": null,
              "results": [
               {
                    "id": 4,
                    "uuid": "f268aebc-d956-11e4-b9d6-1681e6b88ec1",
                    "name": "iPlant Cloud - Tucson",
                    "description": "<No Description Provided>",
                    "public": true,
                    "active": true,
                    "type": {
                        "id": 2
                    },
                    "virtualization": {
                        "id": 2
                    },
                    "start_date": "2014-02-04T19:09:20.713175Z",
                    "end_date": null
               }
              ]
          }
            
### List all Providers [GET]
+ Response 200 (application/json)

    [Provider Collection][]
