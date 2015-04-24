# Group Project Instances

## Project Instance [/project_instances/{id}]
Get a single project instance

Each Project Instance has the following properties

- **id**: the id of the project instance
- **project**: project the instance is a part of
- **instance** instance that is part of the project

+ Parameters
  + id (number, required) ... 'id' of the Project Instance.

+ Model (application/json)

    JSON representation of Project Resource

    + Body
    
        {
            "id": 1,
            "project": {
                "id": 1
            },
            "instance": {
                "id": 1,
                "uuid": "923222d2-a508-4b2c-b19e-00a29f1a5bb5"
            }
        }

### Retrieve a single Project Instance [GET]

+ Response 200 (application/json)

    [Project Instance][]

### Remove Instance from Project [DELETE]

  + Response 204 (application/json)

## Project Instance Collection [/project_instances{?project__id}]

+ Parameters
  + project__id (number, optional) ... 'id' of project to filter by

+ Model (application/json)

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
                    "instance": {
                        "id": 1,
                        "uuid": "923222d2-a508-4b2c-b19e-00a29f1a5bb5"
                    }
                }
            ]
        }

### List all project instances [GET]

+ Response 200(application/json)

    [Project Instance Collection][]


### Add Instance to Project [POST]
Add an instance to a project. You must specify the following properties:
- **project**: project id
- **instance**: instance id

+ Request (application/json)

        {
            "project": 1,
            "instance": 1
        }

+ Response 200 (application/json)

    [Project Instance][]
