# Group Users

## User [/users/{id}]
A single User object.

Each Instance has the following properties:

- **id**: id of the user
- **url**: url of the user
- **username**: username of user

+ Parameters
    + id (number, required) ... 'id' of the Instance.
    
+ Model (application/json)

    JSON representation of Instance Resource.

    + Body

      {
        "id": 1,
        "url": "https://atmobeta.iplantc.org/api/v2/users/1337f0ef-a112-45a8-b15f-e75a75963d64",
        "username": "example_user",
      }

### Retrieve a User [GET]
Get a specific user.

+ Response 200 (application/json)

    [User][]


## User Collection [/users]
Collection of all Users
    
+ Model (application/json)

    JSON representation of Instances Collection Resource.

    + Body

        {
            "count": 1,
            "next": null,
            "previous": null,
            "results": [
                {
                    "id": 1,
                    "url": "https://atmobeta.iplantc.org/api/v2/users/1337f0ef-a112-45a8-b15f-e75a75963d64",
                    "username": "example_user",
                }
            ]
        }
    
### List all Users [GET]

+ Response 200 (application/json)

    [User Collection][]
