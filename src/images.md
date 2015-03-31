# Group Images
Images are snapshots of an instance at some point in time, including all programs and files.  They can be used to create
 a clone of an instance for others to use, or simply to save the state of an instance as a backup or recovery.

## Image [/images/{id}]
A single Image object.

Each Image has the following properties:

- **id**: id of the image
- **uuid**: unique id of image
- **name**: name of image
- **description**: description of image
- **icon**: (optional) if a custom display icon has been uploaded for this image, this field will contain the relative
 path to that image (e.g. "/images/icon.png")
- **created_by**: id of user who created the image
- **tags**: image tags
- **start_date**: the date the image was created
- **end_date**: Atmosphere implements soft deletes for everything (or nearly everything).  Any images with an
 end_date before the moment the request was made will be filtered out of the result set.  however, end_dates can also be
 used to schedule resources deletion by setting them at a future date.  This can also be used to give someone access to
 a resource for a limited time (such as for a workshop session).
- **provider_images**:


+ Parameters
    + id (required, `1`) ... integer id of the Image.
    
+ Model (application/json)

    JSON representation of Image Resource.

    + Body

            {
                "id": 1,
                "uuid": "bdc31c14-f807-11e3-8ef5-b2227cce2b54",
                "name": "Ubuntu 12.04 Updated NoGUI v1",
                "description": "Descriptiong for Ubuntu 12.04 Updated NoGUI v1",
                "icon": null,
                "created_by": 1,
                "tags": [
                    "Ubuntu",
                    "Featured"
                ],
                "start_date": "2014-02-05T01:03:27.903Z",
                "end_date": null,
                "private": false,
                "provider_images": "?"
            }

### Retrieve a Single Image [GET]
+ Response 200 (application/json)

    [Image][]
    
### Edit an Image [PATCH]
+ Response 200 (application/json)

    [Image][]

## Image Collection [/images{?page,page_size}]
Collection of all Images.

This is both a public and private endpoint.  If accessed without being authenticated you will get a list of all public
 images.  If authenticated, you will also get any private images you have permission to use.

+ Parameters
    + page (string, optional) ... Page of results
    + page_size (string, optional) ... Number of results

+ Model (application/json)

    JSON representation of the Images Collection.

    + Body


        {
            "count": 752,
            "next": "https://atmobeta.iplantc.org/api/v2/images?page=2",
            "previous": null,
            "results": [
                {
                    "id": 1,
                    "uuid": "bdc31c14-f807-11e3-8ef5-b2227cce2b54",
                    "name": "Ubuntu 12.04 Updated NoGUI v1",
                    "description": "Description for Ubuntu 12.04 Updated NoGUI v1",
                    "icon": null,
                    "created_by": 1,
                    "tags": [
                        "Ubuntu",
                        "Featured"
                    ],
                    "start_date": "2014-02-05T01:03:27.903Z",
                    "end_date": null,
                    "private": false,
                    "provider_images": "?"
                },
                {
                    "id": 2,
                    "uuid": "bdc31c14-f807-11e3-8ef5-b2227cce2b55",
                    "name": "Ubuntu 12.04 Updated NoGUI v2",
                    "description": "Description for Ubuntu 12.04 Updated NoGUI v2",
                    "icon": null,
                    "created_by": 2,
                    "tags": [
                        "Ubuntu",
                        "Featured"
                    ],
                    "start_date": "2014-02-05T01:03:27.903Z",
                    "end_date": null,
                    "private": false,
                    "provider_images": "?"
                }
            ]
        }

### List all Images [GET]

+ Response 200 (application/json)

    [Image Collection][]
