# Group Image Versions
Image versions are specific versions of images

## Image Version [/image_versions/{id}]
A single Image Version object.

Each Image Version has the following properties:

- **id**: uuid of the image version
- **parent**: parent version that the current version iterated on
- **name**: version name
- **change_log**: String containing description of changes in this version
- **image**: image this version belongs to
- **machines**: provider machines that this version exists on
- **allow_imaging**: true if this version can be imaged
- **licenses**: software licenses required by the image version
- **membership**: membership group this version belongs to
- **scripts**: boot scripts required for the image version
- **user**: user who created this version image
- **identity**: identity of the user who created this version image
- **start_date**: date this version was created
- **end_date**: date the version was deleted or will be deleted


+ Parameters
    + id (required, number) ... id of the Image.
    
+ Model (application/json)

    JSON representation of Image Resource.

    + Body

        {
            "id": "dc897bda-5007-11e5-a49e-3c15c2ddd686",
            "parent": {
                "id": "05565e66-5008-11e5-9bcd-3c15c2ddd686" 
            },
            "name": "1.0",
            "change_log": "21-August-2015 Updated something",
            "image": {
                "id": 1
            },
            "machines": [
                {
                    "id": 1
                }
            ],
            "allow_imaging": true,
            "licenses": [],
            "membership": [],
            "scripts": [],
            "user": {
                "id": 1
            },
            "identity": {
                "id": 1
            },
            "start_date": "2015-10-11T10:50:50.123456Z",
            "end_date": null
        }

### Retrieve a Single Image Version [GET]
+ Response 200 (application/json)

    [Image Version][]
    
### Edit an Image Version [PATCH]
Edit an image version

+ Request (application/json)
    + Body
        {
            "name": "new name"
        }
        
+ Response 200 (application/json)

    [Image Version][]

## Image Version Collection [/image_versions]
Collection of all Image Versions.

This is both a public and private endpoint.  If accessed without being authenticated you will get a list of all public
 image versions.  If authenticated, you will also get any private image versions you have permission to use.

+ Model (application/json)

    JSON representation of the Images Collection.

    + Body

        {
            "count": 1,
            "next": "null",
            "previous": null,
            "results": [
                {
                    "id": "dc897bda-5007-11e5-a49e-3c15c2ddd686",
                    "parent": {
                        "id": "05565e66-5008-11e5-9bcd-3c15c2ddd686" 
                    },
                    "name": "1.0",
                    "change_log": "21-August-2015 Updated something",
                    "image": {
                        "id": 1
                    },
                    "machines": [
                        {
                            "id": 1
                        }
                    ],
                    "allow_imaging": true,
                    "licenses": [],
                    "membership": [],
                    "scripts": [],
                    "user": {
                        "id": 1
                    },
                    "identity": {
                        "id": 1
                    },
                    "start_date": "2015-10-11T10:50:50.123456Z",
                    "end_date": null
                }
            ]
        }


### List all Image Versions [GET]

+ Response 200 (application/json)

    [Image Version Collection][]
