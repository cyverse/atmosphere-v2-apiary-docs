# Group Sizes
Sizes represent the different instance configurations offered by that cloud provider.  Each configuration includes the
 number of CPUs, memory, and disk space.  Sizes with fewer resources will consume AUs at a slower rate.

## Size Collection [/sizes]

The follow parameters can be used to filter responses:

- **provider__id**: show only sizes that are available on this provider
    
### List all Sizes [GET]
For a combination of provider and identity.

+ Response 200 (application/json)

        [
            {
                "id": 1,
                "alias": "3",
                "name": "small1",
                "cpu": 2,
                "disk": 0,
                "mem": 8192,
                "active": true,
                "provider": {
                    "id": 1,
                    "uuid": "9e002b3c-d7d2-11e4-8cb8-8bda92940e85"
                },
                "start_date": "2014-02-04T21:04:30Z",
                "end_date": null
            }
        ]
        
## Size [/size/{id}]
A single Size object with all its details.

+ Parameters
    + id (required, number, 1) ... Number `id` of the Size.

### Retrieve a Size [GET]
+ Response 200 (application/json)

    + Body

            {
                "id": 1,
                "alias": "3",
                "name": "small1",
                "cpu": 2,
                "disk": 0,
                "mem": 8192,
                "active": true,
                "provider": {
                    "id": 1,
                    "uuid": "9e002b3c-d7d2-11e4-8cb8-8bda92940e85"
                },
                "start_date": "2014-02-04T21:04:30Z",
                "end_date": null
            }
