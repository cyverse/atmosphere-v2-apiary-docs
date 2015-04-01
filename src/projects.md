# Group Projects
Projects are a way for users to group related resources.  Right now users can add Instances and Volumes to a group, but
 we also plan to support adding documents, hyperlinks, Images, and letting users control access to their
 Projects (i.e. adding users, removing users, and specifying permissions such as read-only access or modifying content)

## Project [/projects/{id}]
A single Project object.

Each Project has the following properties:

- **id**: the id of the project
- **name**: project name
- **description**: project description
- **owner**: username of the person who created the project
- **instances**: instances in the project
- **volumes**: volumes in the project
- **images**: applications (images) in the project
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
                "id": 1,
                "url": "https://atmobeta.iplantc.org/api/v2/users/1",
                "username": "user",
                "first_name": "user",
                "last_name": "name",
                "email": "useremail@useremail.com",
                "is_staff": false,
                "is_superuser": false,
                "date_joined": "2015-02-11T22:37:24Z"
            },
            "instances": [
                {
                    "id": 1,
                    "uuid": "1b99ab3a-d7d9-11e4-b9d6-1681e6b88ec1",
                    "url": "https://atmobeta.iplantc.org/api/v2/instances/1",
                    "name": "test",
                    "status": "suspended",
                    "size": {
                        "id": 23,
                        "url": "https://atmobeta.iplantc.org/api/v2/sizes/23",
                        "alias": "1",
                        "name": "tiny1",
                        "cpu": 1,
                        "disk": 0,
                        "mem": 4096,
                        "active": true,
                        "start_date": "2014-02-04T19:09:07.655411Z",
                        "end_date": null
                    },
                    "ip_address": "0.0.0.0",
                    "shell": false,
                    "vnc": false,
                    "identity": {
                        "id": 1,
                        "uuid": "1b99ab3a-d7d9-11e4-b9d6-1681e6b88ec2",
                        "url": "https://atmobeta.iplantc.org/api/v2/identities/1",
                        "provider": 1
                    },
                    "user": 1,
                    "provider": 1,
                    "image": {
                        "id": 868,
                        "url": "https://atmobeta.iplantc.org/api/v2/images/868",
                        "uuid": "1b99ab3a-d7d9-11e4-b9d6-1681e6b88ec3",
                        "name": "functional genomics_v1.0",
                        "description": "For practice bioinfomatics data tools",
                        "icon": null,
                        "start_date": "2014-09-05T18:08:12Z",
                        "end_date": null
                    },
                    "start_date": "2015-03-03T19:08:06Z",
                    "end_date": null
                }
            ],
            "volumes": [
                {
                    "id": 1,
                    "uuid": "",
                    "url": "https://atmobeta.iplantc.org/api/v2/volumes/1",
                    "name": "test",
                    "size": 4,
                    "identity": {
                        "id": 1,
                        "uuid": "1b99ab3a-d7d9-11e4-b9d6-1681e6b88ec4",
                        "url": "https://atmobeta.iplantc.org/api/v2/identities/1",
                        "provider": 1
                    },
                    "provider": 1,
                    "start_date": "2015-02-16T19:53:36.190034Z",
                    "end_date": null
                }
            ],
            "images": [],
            "start_date": "2015-03-16T19:32:18.070860Z",
            "end_date": null

            }

### Retrieve a Project [GET]
+ Response 200 (application/json)

    [Project][]
        
### Update a Project [PUT]
+ Request (application/json)

        {
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
              "url": "https://atmobeta.iplantc.org/api/v2/projects/1",
              "name": "project",
              "description": "my project full of things",
              "owner": {
                  "id": 1,
                  "url": "https://atmobeta.iplantc.org/api/v2/users/1",
                  "username": "user",
                  "first_name": "user",
                  "last_name": "name",
                  "email": "useremail@useremail.com",
                  "is_staff": false,
                  "is_superuser": false,
                  "date_joined": "2015-02-11T22:37:24Z"
              },
              "instances": [
                  {
                      "id": 1,
                      "uuid": "1b99ab3a-d7d9-11e4-b9d6-1681e6b88ec1",
                      "url": "https://atmobeta.iplantc.org/api/v2/instances/1",
                      "name": "test",
                      "status": "suspended",
                      "size": {
                          "id": 23,
                          "url": "https://atmobeta.iplantc.org/api/v2/sizes/23",
                          "alias": "1",
                          "name": "tiny1",
                          "cpu": 1,
                          "disk": 0,
                          "mem": 4096,
                          "active": true,
                          "start_date": "2014-02-04T19:09:07.655411Z",
                          "end_date": null
                      },
                      "ip_address": "0.0.0.0",
                      "shell": false,
                      "vnc": false,
                      "identity": {
                          "id": 1,
                          "uuid": "1b99ab3a-d7d9-11e4-b9d6-1681e6b88ec2",
                          "url": "https://atmobeta.iplantc.org/api/v2/identities/1",
                          "provider": 1
                      },
                      "user": 1,
                      "provider": 1,
                      "image": {
                          "id": 868,
                          "url": "https://atmobeta.iplantc.org/api/v2/images/868",
                          "uuid": "1b99ab3a-d7d9-11e4-b9d6-1681e6b88ec3",
                          "name": "functional genomics_v1.0",
                          "description": "For practice bioinfomatics data tools",
                          "icon": null,
                          "start_date": "2014-09-05T18:08:12Z",
                          "end_date": null
                      },
                      "start_date": "2015-03-03T19:08:06Z",
                      "end_date": null
                  }
              ],
              "volumes": [
                  {
                      "id": 1,
                      "uuid": "",
                      "url": "https://atmobeta.iplantc.org/api/v2/volumes/1",
                      "name": "test",
                      "size": 4,
                      "identity": {
                          "id": 1,
                          "uuid": "1b99ab3a-d7d9-11e4-b9d6-1681e6b88ec4",
                          "url": "https://atmobeta.iplantc.org/api/v2/identities/1",
                          "provider": 1
                      },
                      "provider": 1,
                      "start_date": "2015-02-16T19:53:36.190034Z",
                      "end_date": null
                  }
              ], s
              "images": [],
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
