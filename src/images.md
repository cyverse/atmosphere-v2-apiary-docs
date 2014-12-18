# Group Images -updated-
Images are snapshots of an instance at some point in time, including all programs and files.  They can be used to create
 a clone of an instance for others to use, or simply to save the state of an instance as a backup or recovery.

## Image [/images/{id}]
A single Image object.

Each Image has the following properties:

- **id**: unique id of the image
- **icon**: (optional) if a custom display icon has been uploaded for this image, this field will contain the relative
 path to that image (e.g. "/images/icon.png")
- **created_by**: username of the person who created the image
- **name**: name of the image
- **tags**: tags applied to the image (an array of strings).
- **description**: description of the image
- **start_date**: the date the image was created
- **end_date**: Atmosphere implements soft deletes for everything (or nearly everything).  Any images with an
 end_date before the moment the request was made will be filtered out of the result set.  however, end_dates can also be
 used to schedule resources deletion by setting them at a future date.  This can also be used to give someone access to
 a resource for a limited time (such as for a workshop session).
- **private**: if this field is true, it means the access to the image is limited to a group of people that includes you
- **versions**: represents all the previous versions of this image, which
  includes the current version.  It also shows which cloud providers that image version is available for.

+ Parameters
    + id (required, string, `bdc31c14-f807-11e3-8ef5-b2227cce2b54`) ... String `uuid` of the Image.
    
+ Model (application/json)

    JSON representation of Image Resource.

    + Body

            {
                "id": "bdc31c14-f807-11e3-8ef5-b2227cce2b54",
                "icon": null,
                "created_by": "username",
                "name": "Ubuntu 12.04 Updated NoGUI v1",
                "tags": [
                    "Ubuntu",
                    "Featured"
                ],
                "description": "Descriptiong for Ubuntu 12.04 Updated NoGUI v1",
                "start_date": "2014-02-05T01:03:27.903Z",
                "end_date": null,
                "private": false,
                "versions": [
                    {
                        "alias": "813557f2-f808-11e3-8ef5-b2227cce2b54",
                        "version": "1",
                        "start_date": "2014-02-04T23:56:40.077Z",
                        "end_date": null,
                        "provider": 1
                    }
                ]
            }

### Retrieve a Single Image [GET]
+ Response 200 (application/json)

    [Image][]
    
### Edit an Image [PATCH]
+ Response 200 (application/json)

    [Image][]

## Image Collection [/images]
Collection of all Images.

This is both a public and private endpoint.  If accessed without being authenticated you will get a list of all public
 images.  If authenticated, you will also get any private images you have permission to use.

+ Model (application/json)

    JSON representation of the Images Collection.

    + Body

            {
                "count": 1,
                "next": null, 
                "previous": null, 
                "results": [
                    {
                        "id": "bdc31c14-f807-11e3-8ef5-b2227cce2b54",
                        "icon": null,
                        "created_by": "username",
                        "name": "Ubuntu 12.04 Updated NoGUI v1",
                        "tags": [
                            "Ubuntu",
                            "Featured"
                        ],
                        "description": "Descriptiong for Ubuntu 12.04 Updated NoGUI v1",
                        "start_date": "2014-02-05T01:03:27.903Z",
                        "end_date": null,
                        "private": false,
                        "versions": [
                            {
                                "alias": "813557f2-f808-11e3-8ef5-b2227cce2b54",
                                "version": "1",
                                "start_date": "2014-02-04T23:56:40.077Z",
                                "end_date": null,
                                "provider": 1
                            }
                        ]
                    }
                ]
            }

### List all Images [GET]

+ Response 200 (application/json)

    [Image Collection][]
