# Group Resource Requests
Resource requests are made by users who require more than the default amount of allocation units or machine sizes

## Resource Requests Collection [/resource_requests{?status__name}]

### List all Resource Requests

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
       
