# Group Project Volumes

## Project Volumes [/projects/{id}/volumes]
The Volumes in the Project.

+ Parameters
    + id (required, number, '1') ... Number `id` of the Project.

### Retrieve a Project's Volumes [GET]
+ Response 200 (application/json)

    [Volume Collection][]


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

    [Volume][]

### Remove Volume from Project [DELETE]
+ Response 204 (application/json)
