# Group image_version licenses

## image_version license [/image_version_licenses/{id}]
Get a single image_version license

Each image_version license has the following properties

- **id**: the id of the image_version_license pairing
- **image_version**: image_version the license is associated with
- **license** license that is associated with the image_version

+ Parameters
  + id (number, required) ... 'id' of the image_version license.

+ Model (application/json)

    JSON representation of image_version Resource

    + Body
    
        {
            "id": 1,
            "url": "https://atmobeta.iplantc.org/api/v2/image_version_licenses/1",
            "image_version": {
                "id": "0005099e-bdbd-4964-9c81-e1a5a4788fc6",
                "url": "https://atmobeta.iplantc.org/api/v2/image_versions/0005099e-bdbd-4964-9c81-e1a5a4788fc6",
                "name": "1.0"
            },
            "license": {
                "id": 1,
                "url": "https://atmobeta.iplantc.org/api/v2/licenses/d4d143cc-bf99-4ec4-8d15-e0702d0f6ee6",
                "uuid": "d4d143cc-bf99-4ec4-8d15-e0702d0f6ee6",
                "title": "Testing",
                "type": "Full Text",
                "text": "Testing the update method"
            }
        }

### Retrieve a single image_version license [GET]

+ Response 200 (application/json)

    [image_version license][]

### Remove license from image_version [DELETE]

  + Response 204 (application/json)

## image_version license Collection [/image_version_licenses{?version_id}]

+ Parameters
  + version_id (number, optional) ... 'id' of image_version to filter by

+ Model (application/json)

    + Body

        {
            "count": 1,
            "next": null,
            "previous": null,
            "results": [
                {
                    "id": 1,
                    "image_version": {
                        "id": 1
                    },
                    "license": {
                        "id": 1,
                        "uuid": "923222d2-a508-4b2c-b19e-00a29f1a5bb5"
                    }
                }
            ]
        }

### List all image_version licenses [GET]

+ Response 200(application/json)

    [image_version license Collection][]


### Add license to image_version [POST]
Add an license to a image_version. You must specify the following properties:
- **image_version**: image_version id
- **license**: license id

+ Request (application/json)

        {
            "image_version": "0005099e-bdbd-4964-9c81-e1a5a4788fc6",
            "license": "d4d143cc-bf99-4ec4-8d15-e0702d0f6ee6"
        }

+ Response 200 (application/json)

    [image_version license][]
