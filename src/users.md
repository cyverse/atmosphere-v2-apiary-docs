# Group Users -done-

## User [/users/{id}]
A single User object.

Each Instance has the following properties:

- **id**: id
- **username**: username of user
- **first_name**: user's first name
- **last_name**: user's last name
- **email**: user's email address
- **is_staff**: boolean true if user is staff
- **is_superuser**: boolean true if user is superuser
- **date_joined**: date user joined

+ Parameters
    + id (required, '1') ... integer id of the Instance.
    
+ Model (application/json)

    JSON representation of Instance Resource.

    + Body

      {
        "id": 1,
        "url": "https://atmobeta.iplantc.org/api/v2/users/1",
        "username": "user",
        "first_name": "User",
        "last_name": "Name",
        "email": "user@iplantcollaborative.org",
        "is_staff": false,
        "is_superuser": false,
        "date_joined": "2014-03-04T17:16:01.667744Z"
      }

### Retrieve a User [GET]
Get a specific user.

+ Response 200 (application/json)

    [User][]
    
### Delete a User [DELETE]
Delete a user.

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
                  "url": "https://atmobeta.iplantc.org/api/v2/users/1",
                  "username": "user",
                  "first_name": "User",
                  "last_name": "Name",
                  "email": "user@iplantcollaborative.org",
                  "is_staff": false,
                  "is_superuser": false,
                  "date_joined": "2014-03-04T17:16:01.667744Z"
                }
            ]
        }
    
### List all Users [GET]

+ Response 200 (application/json)

    [User Collection][]
