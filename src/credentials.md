# Group Credentials
Credentials are the identifying information relared to your account. Using credentials you can connect to the Cloud Provider externally.
 Future support will allow users to bring their own credentials and modify those credentials that they have brought.
 Sharing Credentials is accomplished by creating a new identity and sharing that identity with the group(s) that require access.
 Be careful when sharing access to your own Credentials!

## Credential [/credentials/{id}]
A single Credential object.

Each Credential has the following properties:

- **id**: the id of the credential *(DEPRECATED)*
- **uuid**: the uuid of the credential
- **url**: the URL of the credential
- **identity**: The identity that 'owns' the credential
- **key**: the key-name of the credential
- **value**: the value of the credential

+ Parameters
    + uuid (number, required) ... uuid of the Credential.
    
+ Model (application/json)

    JSON representation of Credential Resource.

    + Body
    
        {
            "id": 1,
            "uuid": "3f048788-258e-4819-be88-9271553cc2ce",
            "url": "https://atmobeta.cyverse.org/api/v2/credentials/3f048788-258e-4819-be88-9271553cc2ce",
            "identity": {
                "id": "1",
                "uuid": "4bb68750-ecdb-41b6-974b-6b1771c9ea77",
                "url": "https://atmobeta.cyverse.org/api/v2/identities/4bb68750-ecdb-41b6-974b-6b1771c9ea77",
                "provider": 1
            },
            "key": "ex_tenant_name",
            "value": "example_user"
        }

### Retrieve a Credential [GET]
+ Response 200 (application/json)

    [Credential][]
        
### Update a Credential [PATCH]
You can update the following properties for credentials you own *( Future Feature)*:
- **key**: the key-name of the credential
- **value**: the value of the credential

+ Request (application/json)
  
        {
            "key": "ex_project_name",
            "value": "example_project"
        }

+ Response 200 (application/json)

    [Credential][]
    
### Delete a Credential [DELETE]
Delete a Credential.  Credentials can only be deleted if you were the one who created it. Deleteing a Credential will stop any
 connected identities from being able to connect to the cloud. *( Future Feature)*

+ Response 200 (application/json)

    [Credential][]


## Credentials Collection [/credentials]
Collection of all Credentials.

+ Model (application/json)

    JSON representation of Credentials Collection Resource.

    + Body

        {
            "count": 1,
            "next": null,
            "previous": null,
            "results":
            [
                {
                    "id": 1,
                    "uuid": "3f048788-258e-4819-be88-9271553cc2ce",
                    "url": "https://atmobeta.cyverse.org/api/v2/credentials/3f048788-258e-4819-be88-9271553cc2ce",
                    "identity": {
                        "id": "1",
                        "uuid": "4bb68750-ecdb-41b6-974b-6b1771c9ea77",
                        "url": "https://atmobeta.cyverse.org/api/v2/identities/4bb68750-ecdb-41b6-974b-6b1771c9ea77",
                        "provider": 1
                    },
                    "key": "ex_tenant_name",
                    "value": "example_user"
                }
            ]
        }


### List all Credentials [GET]
+ Response 200 (application/json)

    [Credentials Collection][]

### Create a Credential [POST]
Create a Credential.  You must specify the following properties *(Future Feature)*:
- **identity**: The identity that 'owns' the credential
- **key**: the key-name of the credential
- **value**: the value of the credential

+ Request (application/json)

        {
            "identity": "4bb68750-ecdb-41b6-974b-6b1771c9ea77",
            "key": "key",
            "value": "username"
        }

+ Response 201 (application/json)
  [Credential][]
