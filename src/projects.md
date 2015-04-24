# Group Projects
Projects are a way for users to group related resources.  Right now users can add Instances and Volumes to a project, but
 we also plan to support adding documents, hyperlinks, Images, and letting users control access to their
 Projects (i.e. adding users, removing users, and specifying permissions such as read-only access or modifying content)

## Project [/projects/{id}]
A single Project object.

Each Project has the following properties:

- **id**: the id of the project
- **name**: project name
- **description**: project description
- **owner**: user who created the project
- **start_date**: date of project creation
- **end_date**: date of project deletion

+ Parameters
    + id (number, required) ... id of the Project.
    
+ Model (application/json)

    JSON representation of Project Resource.

    + Body
    
        {
            "id": 1,
            "url": "https://atmobeta.iplantc.org/api/v2/projects/1",
            "name": "project",
            "description": "my project full of things",
            "owner": {
                "id": 1
            },
            "start_date": "2015-03-16T19:32:18.070860Z",
            "end_date": null
        }

### Retrieve a Project [GET]
+ Response 200 (application/json)

    [Project][]
        
### Update a Project [PATCH]
+ Request (application/json)
  
        {
            "name": "new name",
            "description": "A new description for my project."
        }

+ Response 200 (application/json)

    [Project][]
    
### Delete a Project [DELETE]
Delete a Project.  Projects can only be deleted once all resources (instances and volumes) have been transferred out of
 it or deleted.  Attempting to delete a project with resources still inside will return a status code of 409 (conflict)

+ Response 200 (application/json)

    [Project][]


## Projects Collection [/projects]
Collection of all Projects.

+ Model (application/json)

    JSON representation of Projects Collection Resource.

    + Body

        {
            "count": 1,
            "next": null,
            "previous": null,
            "results":
            [
                {
                    "id": 1,
                    "name": "project",
                    "description": "my project full of things",
                    "owner": {
                        "id": 1
                    },
                    "start_date": "2015-03-16T19:32:18.070860Z",
                    "end_date": null
                }
            ]
        }


### List all Projects [GET]
+ Response 200 (application/json)

    [Projects Collection][]

### Create a Project [POST]
Create a Project.  You must specify the following properties:
- **name**: a name for the project
- **description**: a description of the project

+ Request (application/json)

        {
            "name": "My Awesome Project",
            "description": "A description of my awesome project."
        }

+ Response 201 (application/json)
  [Project][]
