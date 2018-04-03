# Group Project Images

## Project Image [/project_images/{id}]
Get a single project image

Each Project Image has the following properties

- **id**: the id of the project image
- **project**: project the image is a part of
- **image** image that is part of the project

+ Parameters
  + id (number, required) ... 'id' of the Project Image.

+ Model (application/json)

    JSON representation of Project Resource

    + Body
    
        {
            "id": 1,
            "project": {
                "id": 1
            },
            "image": {
                "id": 1,
                "uuid": "923222d2-a508-4b2c-b19e-00a29f1a5bb5"
            }
        }

### Retrieve a single Project Image [GET]

+ Response 200 (application/json)

    [Project Image][]

### Remove Image from Project [DELETE]

  + Response 204 (application/json)

## Project Image Collection [/project_images{?project__id}]

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
                    "url": "https://atmobeta.cyverse.org/api/v2/project_images/1",
                    "project": {
                        "id": 1,
                        "url": "https://atmobeta.cyverse.org/api/v2/projects/c264cbc9-c905-48ba-9b01-1d216af0feba",
                        "uuid": "c264cbc9-c905-48ba-9b01-1d216af0feba",
                        "name": "testing",
                        "description": "testing",
                        "owner": "sgregory",
                        "start_date": "2015-09-17T22:12:18.407676Z",
                        "end_date": null
                    },
                    "image": {
                        "id": 1,
                        "url": "https://atmobeta.cyverse.org/api/v2/images/12341123-fe98-5161-b8fa-aa485826288d",
                        "uuid": "12341123-fe98-5161-b8fa-aa485826288d",
                        "name": "Ubuntu 14.04.2 XFCE BootScript",
                        "description": "iPlant Base Image for Ubuntu 14.04 with XFCE desktop and BootScripts to change permissions on /opt/my_software",
                        "icon": null,
                        "start_date": "2016-02-17T14:52:28.065410Z",
                        "end_date": null,
                        "user": 1
                    }
                }
            ]
        }

### List all project images [GET]

+ Response 200(application/json)

    [Project Image Collection][]


### Add Image to Project [POST]
Add an image to a project. You must specify the following properties:
- **project**: project id
- **image**: image id

+ Request (application/json)

        {
            "project": 1,
            "image": 1
        }

+ Response 200 (application/json)

    [Project Image][]
