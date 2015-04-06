# Group Project Volumes

## Project Volume [/project_volumes/{id}]
A single Project Volume object

Each Project Volume has the following properties:
- **id**: id of project volume relationship
- **project**: project with volume attached
- **volume**: volume attached to project

+ Parameters
    + id (required, number) ... 'id' of the Project Volume

+ Model (application/json)

    JSON representation of Project Volume resource

    + Body

        {
            "id": 1,
            "project": {
                "id": 1
            },
            "volume": {
                "id": 1,
                "uuid": "923222d2-a508-4b2c-b19e-00a29f1a5bb5"
            }
        }

### Retrieve a Project Volume resource [GET]

+ Response 200 (application/json)
    [Project Volume][]

### Update a Project Volume [PATCH]

+ Response 204 (application/json)
    [Project Volume][]

### Delete a Project Volume [DELETE]

+ Response 204 (application/json)


## Project Volume Collection [/project_volumes{?project__id}]
Collection of all project volume relationships

+ Parameters
    +project__id (number, optional) ... 'id' of the Project

+ Model (application/json)
    JSON representation of Project Volume collection

    + Body
    
        {
            "count": 1,
            "next": null,
            "previous": null,
            "results": [
                {
                    "id": 1,
                    "project": {
                        "id": 1
                    },
                    "volume": {
                        "id": 1,
                        "uuid": "923222d2-a508-4b2c-b19e-00a29f1a5bb5"
                    }
                }
            ]
        }


### Get all Project Volumes [GET]

+ Response 200(application/json)

  [Project Volume Collection][]


### Add Volume to Project [POST]
Add volume to project. You must specify the following properties:

- **project**: project id
- **volume**: volume id

+ Request (application/json)

        {
            "project": 1,
            "volume": 1
        }

+ Response 200 (application/json)

    [Project Volume Collection][]
