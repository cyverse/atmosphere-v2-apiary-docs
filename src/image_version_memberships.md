# Group image_version memberships

## image_version membership [/image_version_memberships/{id}]
Get a single image_version membership

Each image_version membership has the following properties

- **id**: the id of the image_version_membership pairing
- **image_version**: image_version the membership is associated with
- **membership** membership that is associated with the image_version

+ Parameters
  + id (number, required) ... 'id' of the image_version membership.

+ Model (application/json)

    JSON representation of image_version Resource

    + Body
    
        {
            "id": 156,
            "url": "https://atmobeta.iplantc.org/api/v2/image_version_memberships/156",
            "image_version": {
                "id": "d4f30fb0-3b08-40fa-9075-e022b6cbd050",
                "url": "https://atmobeta.iplantc.org/api/v2/image_versions/d4f30fb0-3b08-40fa-9075-e022b6cbd050",
                "name": "1.0"
            },
            "group": {
                "id": 598,
                "uuid": "6139dc6d-0a50-4a83-9e6d-edf4b8e5d611",
                "url": "https://atmobeta.iplantc.org/api/v2/groups/6139dc6d-0a50-4a83-9e6d-edf4b8e5d611",
                "name": "estevetest03"
            }
        }

### Retrieve a single image_version membership [GET]

+ Response 200 (application/json)

    [image_version membership][]

### Remove membership from image_version [DELETE]

  + Response 204 (application/json)

## image_version membership Collection [/image_version_memberships{?version_id}]

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
                    "id": 156,
                    "url": "https://atmobeta.iplantc.org/api/v2/image_version_memberships/156",
                    "image_version": {
                        "id": "d4f30fb0-3b08-40fa-9075-e022b6cbd050",
                        "url": "https://atmobeta.iplantc.org/api/v2/image_versions/d4f30fb0-3b08-40fa-9075-e022b6cbd050",
                        "name": "1.0"
                    },
                    "group": {
                        "id": 1,
                        "uuid": "6139dc6d-0a50-4a83-9e6d-edf4b8e5d611",
                        "url": "https://atmobeta.iplantc.org/api/v2/groups/6139dc6d-0a50-4a83-9e6d-edf4b8e5d611",
                        "name": "example_group"
                    }
                }
            ]
        }

### List all image_version memberships [GET]

+ Response 200(application/json)

    [image_version membership Collection][]


### Add membership to image_version [POST]
Add an membership to a image_version. You must specify the following properties:
- **image_version**: image_version uuid
- **membership**: membership uuid

+ Request (application/json)

        {
            "image_version": "0005099e-bdbd-4964-9c81-e1a5a4788fc6",
            "membership": "d4d143cc-bf99-4ec4-8d15-e0702d0f6ee6"
        }

+ Response 200 (application/json)

    [image_version membership][]
