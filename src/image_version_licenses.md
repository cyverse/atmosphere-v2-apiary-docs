# Group Image Version Licenses

## Image Version License [/image_version_licenses/{id}]
Get a single Image Version License

Each Image Version License has the following properties

- **id**: the id of the image_version_license pairing
- **image_version**: Image Version the license is associated with
- **license** license that is associated with the Image Version

+ Parameters
  + id (number, required) ... 'id' of the Image Version license.

+ Model (application/json)

    JSON representation of Image Version Resource

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

### Retrieve a single Image Version License [GET]

+ Response 200 (application/json)

    [Image Version License][]

### Remove License from Image Version [DELETE]

  + Response 204 (application/json)

## Image Version License Collection [/image_version_licenses{?version_id}]

+ Parameters
  + version_id (number, optional) ... 'id' of Image Version to filter by

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

### List all Image Version Licenses [GET]

+ Response 200(application/json)

    [Image Version License Collection][]


### Add license to Image Version [POST]
Add an license to a Image Version. You must specify the following properties:
- **image_version**: Image Version id
- **license**: license id

+ Request (application/json)

        {
            "image_version": "0005099e-bdbd-4964-9c81-e1a5a4788fc6",
            "license": "d4d143cc-bf99-4ec4-8d15-e0702d0f6ee6"
        }

+ Response 200 (application/json)

    [Image Version License][]
