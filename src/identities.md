# Group Identities -done?-
Identities are like user account information. A user has at least one identity per provider, and each identity
 contains information about how many resources can be consumed on that provider.  If a user has multiple identities
 under a single provider, it means they can allocate more resources by using a different identity.

## Identity [/identity/{id}]
A single Identity object.

Each Identity has the following properties:

- **id**: id of the Identity
- **uuid**: unique identifier for of Identity
- **quota**: quota of Identity
- **allocation**: allocation of Identity
- **provider**: provider of Identity
- **user**: user of Identity

+ Parameters
    + id (required, number, 1) ... Number `id` of the Identity.
    
+ Model (application/json)

    JSON representation of Identity Resource.

    + Body

            {
                "id": 1,
                "uuid": "f268aebc-d956-11e4-b9d6-1681e6b88ec1"
                "quota": {
                    "id": 1,
                    "cpu" 16,
                    "memory": 16,
                    "storage": 16,
                    "storage_count": 16,
                    "suspended_count": 16
                },
                "allocation": {
                    "id": 1,
                    "threshold": 10080,
                    "delta": 10080
                },
                "provider": {
                    "id": 1,
                    "uuid": "f268aebc-d956-11e4-b9d6-1681e6b88ec1",
                    "name": "iPlant Cloud - Tucson",
                    "description": "<No Description Provided>",
                    "public": true,
                    "active": true,
                    "start_date": "1999-09-09T00:00.000000Z",
                    "end_date": null
                },
                "user":{
                    "id": 1,
                    "username": "atmouser",
                    "first_name": "atmo",
                    "last_name": "user",
                    "email": "atmouser@atmoemail.com",
                    "is_staff": false,
                    "is_superuser": false,
                    "date_joined": "1999-09-09T00:00.000000Z"
                }
            }

### Retrieve an Identity [GET]

+ Response 200 (application/json)

    [Identity][]
    
## Identity Collection [/identities]
Collection of all Identities.

+ Model (application/json)

    JSON representation of Identity Collection Resource.

    + Body

            {
            "count": 2,
            "next": null,
            "prev": null,
            "results": [
                {
                    "id": 1,
                    "uuid": "f268aebc-d956-11e4-b9d6-1681e6b88ec1",
                    "quota": {
                        "id": 1,
                        "cpu" 16,
                        "memory": 16,
                        "storage": 16,
                        "storage_count": 16,
                        "suspended_count": 16
                    },
                    "allocation": {
                        "id": 1,
                        "threshold": 10080,
                        "delta": 10080
                    },
                    "provider": {
                        "id": 1,
                        "uuid": "f268aebc-d956-11e4-b9d6-1681e6b88ec1",
                        "name": "iPlant Cloud - Tucson",
                        "description": "<No Description Provided>",
                        "public": true,
                        "active": true,
                        "start_date": "1999-09-09T00:00.000000Z",
                        "end_date": null
                    },
                    "user":{
                        "id": 1,
                        "username": "atmouser",
                        "first_name": "atmo",
                        "last_name": "user",
                        "email": "atmouser@atmoemail.com",
                        "is_staff": false,
                        "is_superuser": false,
                        "date_joined": "1999-09-09T00:00.000000Z"
                    }
                },
                {
                    "id": 2,
                    "uuid": "f268aebc-d956-11e4-b9d6-1681e6b88ec2",
                    "quota": {
                        "id": 1,
                        "cpu" 16,
                        "memory": 16,
                        "storage": 16,
                        "storage_count": 16,
                        "suspended_count": 16
                    },
                    "allocation": {
                        "id": 1,
                        "threshold": 10080,
                        "delta": 10080
                    },
                    "provider": {
                        "id": 2,
                        "uuid": "f268aebc-d956-11e4-b9d6-1681e6b88ec2",
                        "name": "iPlant Workshop Cloud - Tucson",
                        "description": "<No Description Provided>",
                        "public": true,
                        "active": true,
                        "start_date": "1999-09-09T00:00.000000Z",
                        "end_date": null
                    },
                    "user":{
                        "id": 2,
                        "username": "atmouser2",
                        "first_name": "atmo",
                        "last_name": "user2",
                        "email": "atmouser2@atmoemail.com",
                        "is_staff": false,
                        "is_superuser": false,
                        "date_joined": "1999-09-09T00:00.000000Z"
                    }
                }
            ]
            }
            
### List all Identities [GET]
+ Response 200 (application/json)

    [Identity Collection][]
