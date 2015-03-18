# Group Quota Requests
Quota requests are user requests for quota increases

## Quota Request [/quota_requests/{id}]
A single Quota Request object.

Each quota request has the following properties:

- **id**: the id of the tag
- **name**: the name of the tag
- **description**: a description of what the tag means

+ Parameters
    + id (required, number, `1`) ... Number `id` of the quota request.
    
+ Model (application/json)

    JSON representation of Quota Request Resource.

    + Body

            {
                "id": 1,
                "created_by": "User",
                "admin_message": "Approved",
                "quota": "1000 CPU",
                "status": "pending",
                "request": "I want 10,000 CPUs",
                "description": "Description of reason for request"
            }

### Retrieve a quota request [GET]
+ Response 200 (application/json)

    [Quota Request][]

## Quota Request Collection [/quota_requests{?page,page_size}]
Collection of all Quota Requests.

+ Parameters
    + page (string, optional) ... Page of results
    + page_size (string, optional) ... Number of results

+ Model (application/json)

    JSON representation of Quota Request Collection Resource.

    + Body

            {
                "count": 2,
                "next": null,
                "previous": null,
                "results": [
                    {
                        "id": 1,
                        "created_by": "User",
                        "admin_message": "Approved",
                        "quota": null,
                        "status": "pending",
                        "request": "I want 10,000 CPUs",
                        "description": "Description of reason for request"
                    },
                    {
                        "id": 2,
                        "created_by": "Other user",
                        "admin_message": "Nah",
                        "quota": null,
                        "status": "pending",
                        "request": "I want 10,000 CPUs",
                        "description": "Description of reason for request"
                    }
                ]
            }

### List all Quota Requests [GET]
+ Response 200 (application/json)

    [Quota Request Collection][]

### Create a Quota Request [POST]
Create a Quota Request.  You must specify the following properties:

- **name**: a name for the tag
- **description**: a description of the tag

+ Request (application/json)

        {
            "name": "Tag name",
            "description": "A description of the tag."
        }

+ Response 201 (application/json)

    [Quota Request][]
