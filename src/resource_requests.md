# Group Resource Requests
Resource requests are made by users who require more than the default amount of allocation units or machine sizes

Each resource request has the following properties:
- **id**: the id of the request
- **uuid**: the UUID of the request
- **request**: the request itself
- **description**: user's reason for making the request
- **status**: the current status of the request
- **created_by**: the user who created the request
- **user**: the user whom this request is for
- **identity**: the user's identity for the provider the request was made for
- **provider**: the provider the user made the request for
- **admin_message**: the admin's response to the request
- **quota**: the new quota set after the request has been acted on
- **alocation**: the new allocation set after the request has been acted on
- **current_quota**: the id of user's current quota
- **current_allocation**: the id of the user's current allocation




## Resource Requests Collection [/resource_requests{?status__name}]

### List all Resource Requests [GET]

+ Parameters
    + status__name (string, optional) ... 'name' of status type eg. 'approved' or 'pending'

+ Response 200 (application/json)
{
    "count": 1,
    "next": null,
    "previous": null,
    "results": [
        {
            "id": 1,
            "uuid": "748b002b-894e-43c6-a0a4-c5945dd5e511",
            "request": "1000 AU",
            "description": "To do things X and Y",
            "status": {
                "id": 1,
                "name": "pending"
            },
            "created_by": {
                "id": 0000,
                "username": "username"
            },
            "user": {
                "id": 0000,
                "username": "username"
            },
            "identity": {
                "id": "0",
                "uuid": "748b002b-894e-43c6-a0a4-c5945dd5e511"
                "provider": 4
            },
            "provider": {
                "id": 4,
                "uuid": "748b002b-894e-43c6-a0a4-c5945dd5e511",
            },
            "admin_message": "",
            "quota": null,
            "allocation": null,
            "current_quota": 25,
            "current_allocation": 9
        }
    ]
}

### Create a Resource Request [POST]
Authenticated users can create resource requests by sending a POST request with the following info:
- **request**: Textual representation of what the user is asking for, eg. A 4 CPU instance running for one week, or an additional 200 AU.
- **description**: More in-depth explanation of why the user is requesting these resources
- **identity**: id of the identity the resources are being requested for

+ Request (application/json)
    + Body
        {
            "request": '100 AU',
            "description": "to do more science",
            "identity": 1
        }

+ Response 201 (application/json)

## Resource Request [/resource_requests/{id}]
A single Resource Request object with all its details.

+ Parameters
    + id (required, number, 1) ... Number `id` of the Resource Request.

### Retrieve a Resource Request [GET]
+ Response 200 (application/json)

    + Body
         {
            "id": 1,
            "uuid": "748b002b-894e-43c6-a0a4-c5945dd5e511",
            "request": "1000 AU",
            "description": "To do things X and Y",
            "status": {
                "id": 1,
                "name": "pending"
            },
            "created_by": {
                "id": 0000,
                "username": "username"
            },
            "user": {
                "id": 0000,
                "username": "username"
            },
            "identity": {
                "id": "0",
                "uuid": "748b002b-894e-43c6-a0a4-c5945dd5e511"
                "provider": 4
            },
            "provider": {
                "id": 4,
                "uuid": "748b002b-894e-43c6-a0a4-c5945dd5e511",
            },
            "admin_message": "",
            "quota": null,
            "allocation": null,
            "current_quota": 25,
            "current_allocation": 9
        }   

### Update a Resource Request [PATCH]
Admins can update the following properties for a resource request:
- **quota**: the user's new quota
- **allocation**: the user's new allocation
- **status**: the request's new status
- **admin_message**: the response to the request, which will be emailed to the user

+ Request (application/json)

    + Body
    
        {
            "quota": 1,
            "allocation": 1,
            "status": 4,
            "admin_message": "We have approved your request."
        }

+ Response 200 (application/json)
    
    + Body
         {
            "id": 1,
            "uuid": "748b002b-894e-43c6-a0a4-c5945dd5e511",
            "request": "1000 AU",
            "description": "To do things X and Y",
            "status": {
                "id": 4,
                "name": "approved"
            },
            "created_by": {
                "id": 0000,
                "username": "username"
            },
            "user": {
                "id": 0000,
                "username": "username"
            },
            "identity": {
                "id": "0",
                "uuid": "748b002b-894e-43c6-a0a4-c5945dd5e511"
                "provider": 4
            },
            "provider": {
                "id": 4,
                "uuid": "748b002b-894e-43c6-a0a4-c5945dd5e511",
            },
            "admin_message": "We have approved your request",
            "quota": 1,
            "allocation": 1,
            "current_quota": 1,
            "current_allocation": 1
        }
