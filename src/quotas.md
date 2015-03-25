# Group Quota Requests
Quota requests are user requests for quota increases

## Quota Request [/quota_requests/{id}]
A single Quota Request object.

Each quota request has the following properties:

- **id**: the id of the request
- **created_by**: the name of the user who submitted the request
- **admin_message**: admin response to user request
- **quota**: quota to be granted to user
- **status**: current status of request
- **request**: the text field for user requests
- **description**: more thorough user description of request and reason

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

### Update a Quota Request [PUT]
+ Request (application/json)

        {
          "quota": 1
        }

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
                "count": 10,
                "next": null,
                "previous": null,
                "results": [
                    {
                        "id": 1,
                        "created_by": "User",
                        "admin_message": "Default",
                        "quota": null,
                        "status": "pending",
                        "request": "I want 10,000 CPUs",
                        "description": "Description of reason for request"
                    },
                    {
                        "id": 2,
                        "created_by": "Other_user",
                        "admin_message": "Default",
                        "quota": null,
                        "status": "pending",
                        "request": "I want 10,000 CPUs",
                        "description": "Description of reason for request"
                    },
                    {
                        "id": 3,
                        "created_by": "Science_person",
                        "admin_message": "Default",
                        "quota": null,
                        "status": "pending",
                        "request": "I want more everything",
                        "description": "I like everything"
                    },
                    {
                        "id": 4,
                        "created_by": "Tornado_Tom",
                        "admin_message": "Default",
                        "quota": null,
                        "status": "pending",
                        "request": "Stuff",
                        "description": "Purposes"
                    },
                    {
                        "id": 5,
                        "created_by": "Ragin_Ricardo",
                        "admin_message": "Default",
                        "quota": null,
                        "status": "pending",
                        "request": "Stuff",
                        "description": "Purposes"
                    },
                    {
                        "id": 6,
                        "created_by": "Salad_Sally",
                        "admin_message": "Default",
                        "quota": null,
                        "status": "Default",
                        "request": "Stuff",
                        "description": "Purposes"
                    },
                    {
                        "id": 7,
                        "created_by": "Zippy_Zardansen",
                        "admin_message": "Default",
                        "quota": null,
                        "status": "pending",
                        "request": "Stuff",
                        "description": "Purposes"
                    },
                    {
                        "id": 8,
                        "created_by": "Flippin_Fernanda",
                        "admin_message": "Default",
                        "quota": null,
                        "status": "pending",
                        "request": "Stuff",
                        "description": "Purposes"
                    },
                    {
                        "id": 9,
                        "created_by": "Chargin_Charlie",
                        "admin_message": "Default",
                        "quota": null,
                        "status": "pending",
                        "request": "Stuff",
                        "description": "Purposes"
                    },
                    {
                        "id": 10,
                        "created_by": "Dancin_Dana",
                        "admin_message": "Default",
                        "quota": null,
                        "status": "pending",
                        "request": "Stuff",
                        "description": "Purposes"
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
