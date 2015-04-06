# Group Identities
Identities are like user account information. A user has at least one identity per provider, and each identity
 contains information about how many resources can be consumed on that provider.  If a user has multiple identities
 under a single provider, it means they can allocate more resources by using a different identity.

## Identity [/identities/{id}]
A single Identity object.

Each Identity has the following properties:

- **id**: id of the identity
- **uuid**: uuid for the identity
- **quota**: quota assigned to the identity
- **allocation**: allocation assigned to the identity
- **provider**: provider the identity is for
- **user**: user this identity belongs to

+ Parameters
    + id (required, number) ... `id` of the Identity.
    
+ Model (application/json)

    JSON representation of Identity Resource.

    + Body

            {
                "id": 1,
                "uuid": "f268aebc-d956-11e4-b9d6-1681e6b88ec1"
                "quota": {
                    "id": 1
                },
                "allocation": {
                    "id": 1
                },
                "provider": {
                    "id": 1,
                    "uuid": "c9b2829c-da3f-11e4-9e60-7780dea86e3f"
                },
                "user":{
                    "id": 1
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
                        "id": 1
                    },
                    "allocation": {
                        "id": 1
                    },
                    "provider": {
                        "id": 1,
                        "uuid": "f268aebc-d956-11e4-b9d6-1681e6b88ec1"
                    },
                    "user":{
                        "id": 1
                    }
                },
                {
                    "id": 2,
                    "uuid": "f268aebc-d956-11e4-b9d6-1681e6b88ec2",
                    "quota": {
                        "id": 1
                    },
                    "allocation": {
                        "id": 1
                    },
                    "provider": {
                        "id": 2,
                        "uuid": "f268aebc-d956-11e4-b9d6-1681e6b88ec2"
                    },
                    "user":{
                        "id": 2
                    }
                }
            ]
            }
            
### List all Identities [GET]
+ Response 200 (application/json)

    [Identity Collection][]
