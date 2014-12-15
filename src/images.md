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
- **versions**: admittedly, this field is poorly named, but it represents all the previous versions of this image, which
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
    
### Edit an Image [GET]
+ Response 200 (application/json)

    [Image][]

## Images Collection [/images]
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

## Request an Image [/provider/{providerId}/identity/{identityId}/request_image/]
Images are created by sending a request to Atmosphere support.  This is the endpoint used to make that request.

+ Parameters
    + id (required, string, 'b94d4964-8de3-4965-a87a-f4cf44d33165') ... String `alias` of the Instance.
    + providerId (required, number, '4') ... Number `id` of the Provider.

### Request an Image [POST]
To request an image, you need to specify the following properties:

- **name**: the name of the image
- **instance**: alias property of the instance you want imaged
- **provider**: the id of the provider you want the image to be created for
- **description**: A description of the image for display purposes
- **software**: What software is installed on the instance
- **sys**: (**todo:** add details for what this field controls)
- **exclude**: Files on the instance that should be excluded from the image, like ssh keys
- **tags**: tags that should be applied to the image
- **vis**: This field can be one of public, private, or a user-list. If public, everyone can view and create an instance
  from the image.  If this field is private, the user who created the image will be able to see or launch it.  If user
  specific, only those users that are listed will be able to see or launch the image.

+ Request (application/json)

        {
            instance: "74089c18-f80a-11e3-8ef5-b2227cce2b54",
            ip_address: "127.0.0.1",
            provider: 1,
            description: "I would like to request an image of this instance for [reasons].",
            software: "Description of software installed on the machine.",
            sys: "I'm not sure what this field means.",
            exclude: "I do not need any files excluded from the image.",
            tags: [
                "ESD",
                "BGF",
                "apache2",
                "SpliceGrapher"
            ],
            vis: "public"
        }
