# Group Tokens
Tokens are used to gain API or UI access to Atmosphere.

## Token [/tokens/{key}]
A single Token object.

Each Token has the following properties:

- **key**: the key of the token
- **url**: the key of the token detail page
- **user**: the owner of the token
- **issuedTime**: The datetime that the token was created
- **issuer**: How this token was created *This field can be null*
- **expireTime**: The datetime that this token will expire *This field can be null*
- **remote_ip**: The IP address of the request that created *This field can be null*
- **api_server_url**: What API server is this token scoped to? *This field can be null*

+ Parameters
    + key (number, required) ... `key` of the Token.
    
+ Model (application/json)

    + Body

            {
                "key": "TGT-5028365-cwkmbeSTOtX9Tbi0hAehRVoGVmeNwrp60fgl7vRM5SRWGm0HSA-auth.cyverse.org",
                "url": "https://atmobeta.cyverse.org/api/v2/tokens/TGT-5028365-cwkmbeSTOtX9Tbi0hAehRVoGVmeNwrp60fgl7vRM5SRWGm0HSA-auth.cyverse.org",
                "user": {
                    "id": 1,
                    "uuid": "333fe333-7c12-45a8-b15f-e75a75963d64",
                    "url": "https://atmobeta.cyverse.org/api/v2/users/333fe333-7c12-45a8-b15f-e75a75963d64",
                    "username": "example_user"
                },
                "api_server_url": null,
                "remote_ip": null,
                "issuer": null,
                "issuedTime": "2015-10-30T03:11:59.733913Z",
                "expireTime": null
            }

### Retrieve a Token [GET]
+ Response 200 (application/json)

    [Token][]

### Update a Token [PATCH]
Currently only Atmosphere staff can update token information. The following properties can be updated:
- **user**: a user of the token
- **issuer**: a description of the token

+ Request (application/json)

        {
            user: "new-user",
            issuer: "new description of token"
        }

+ Response 200 (application/json)

    [Token][]


### Delete a Token [DELETE]

+ Response 204 (application/json)


## Token Collection [/tokens]
Collection of all Tokens.

+ Model (application/json)

    + Body

            {
                "count": 1,
                "next": null,
                "previous": null,
                "results": [
                    {
                        "key": "TGT-5028365-cwkmbeSTOtX9Tbi0hAehRVoGVmeNwrp60fgl7vRM5SRWGm0HSA-auth.cyverse.org",
                        "url": "https://atmobeta.cyverse.org/api/v2/tokens/TGT-5028365-cwkmbeSTOtX9Tbi0hAehRVoGVmeNwrp60fgl7vRM5SRWGm0HSA-auth.cyverse.org",
                        "user": {
                            "id": 1,
                            "uuid": "333fe333-7c12-45a8-b15f-e75a75963d64",
                            "url": "https://atmobeta.cyverse.org/api/v2/users/333fe333-7c12-45a8-b15f-e75a75963d64",
                            "username": "example_user"
                        },
                        "api_server_url": null,
                        "remote_ip": null,
                        "issuer": null,
                        "issuedTime": "2015-10-30T03:11:59.733913Z",
                        "expireTime": null
                    }
                ]
            }

### List current Tokens [GET]
+ Response 200 (application/json)

    [Token Collection][]
