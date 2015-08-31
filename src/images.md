# Group Images
Images are snapshots of an instance at some point in time, including all programs and files.  They can be used to create
 a clone of an instance for others to use, or simply to save the state of an instance as a backup or recovery.

## Image [/images/{id}]
A single Image object.

Each Image has the following properties:

- **id**: id of the image
- **uuid**: unique id of image
- **name**: name of image
- **created_by**: id of user who created the image
- **description**: description of image
- **end_date**: Atmosphere implements soft deletes for everything (or nearly everything).  Any images with an
 end_date before the moment the request was made will be filtered out of the result set.  however, end_dates can also be
 used to schedule resources deletion by setting them at a future date.  This can also be used to give someone access to
 a resource for a limited time (such as for a workshop session).
- **is_public**: true if the image is publicly visible, false if it is private
- **icon**: (optional) if a custom display icon has been uploaded for this image, this field will contain the relative
 path to that image (e.g. "/images/icon.png")
- **start_date**: the date the image was created
- **tags**: image tags
- **versions**: list of different versions of the image


+ Parameters
    + id (required, number) ... id of the Image.
    
+ Model (application/json)

    JSON representation of Image Resource.

    + Body

        {
            "id": 1,
            "uuid": "f268aebc-d956-11e4-b9d6-1681e6b88ec1",
            "name": "name",
            "created_by": {
                "id": 1
            },
            "description": "description",
            "end_date": null,
            "is_public": true,
            "icon": null, 
            "start_date": "2015-03-30T18:30:45.501948Z",
            "tags": [
                {
                    "id": 1
                },
                {
                    "id": 2
                }
            ],
            "versions": [
                {
                    "id": 1
                }
            ]
        }

### Retrieve a Single Image [GET]
+ Response 200 (application/json)

    [Image][]
    
### Edit an Image [PATCH]
Images can only be edited by the user who created it.

+ Request (application/json)
    + Body
        {
            "name": "new name",
            "description": "new description",
        }
        
+ Response 200 (application/json)

    [Image][]

## Image Collection [/images{?created_by__username,tags__name,search}]
Collection of all Images.

This is both a public and private endpoint.  If accessed without being authenticated you will get a list of all public
 images.  If authenticated, you will also get any private images you have permission to use.

+ Model (application/json)

    JSON representation of the Images Collection.

    + Body

        {
            "count": 1,
            "next": "null",
            "previous": null,
            "results": [
                {
                    "id": 1,
                    "uuid": "f268aebc-d956-11e4-b9d6-1681e6b88ec1",
                    "name": "name",
                    "created_by": {
                        "id": 1
                    },
                    "description": "description",
                    "end_date": null,
                    "is_public": true,
                    "icon": null, 
                    "start_date": "2015-03-30T18:30:45.501948Z",
                    "tags": [
                        {
                            "id": 1
                        },
                        {
                            "id": 2
                        }
                    ],
                    "versions": [
                        {
                            "id": 1
                        }
                    ]
                }
            ]
        }


### List all Images [GET]

+ Parameters
    + created_by__username (string, optional) ... return images created by user with `username`
    + tags__name (string, optional) ... return images with a tag of this `name`
    + search (string, optional) ... return images whose name, description, or tag name or description match the search criteria

+ Response 200 (application/json)

    [Image Collection][]
