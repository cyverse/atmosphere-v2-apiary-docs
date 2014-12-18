# Group Image Requests -new-
Requests made for imaging of an instance.

## Image Request [/image_requests/{id}]
A single Image Request object.

Each Image has the following properties:

- **id**: unique id of the image
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

### Retrieve an Image Request [GET]
+ Response 200 (application/json)

    [Image Request][]

## Image Request Collection [/image_requests]
Collection of all Image Requests.

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

### List all Image Requests [GET]

+ Response 200 (application/json)

    [Image Request Collection][]

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

+ Response 200 (application/json)

    [Image Request][]
