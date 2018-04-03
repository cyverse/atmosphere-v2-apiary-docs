# Group Image Version Memberships

## Image Version Membership [/image_version_memberships/{id}]
Get a single Image Version Membership

Each Image Version Membership has the following properties

- **id**: the id of the image_version_membership pairing
- **image_version**: Image Version the membership is associated with
- **membership** membership that is associated with the Image Version

+ Parameters
  + id (number, required) ... 'id' of the Image Version membership.

+ Model (application/json)

    JSON representation of Image Version Resource

    + Body
    
        {
            "id": 156,
            "url": "https://atmobeta.cyverse.org/api/v2/image_version_memberships/156",
            "image_version": {
                "id": "d4f30fb0-3b08-40fa-9075-e022b6cbd050",
                "url": "https://atmobeta.cyverse.org/api/v2/image_versions/d4f30fb0-3b08-40fa-9075-e022b6cbd050",
                "name": "1.0"
            },
            "group": {
                "id": 598,
                "uuid": "6139dc6d-0a50-4a83-9e6d-edf4b8e5d611",
                "url": "https://atmobeta.cyverse.org/api/v2/groups/6139dc6d-0a50-4a83-9e6d-edf4b8e5d611",
                "name": "estevetest03"
            }
        }

### Retrieve a single Image Version membership [GET]

+ Response 200 (application/json)

    [Image Version Membership][]

### Remove membership from Image Version [DELETE]

  + Response 204 (application/json)

## Image Version Membership Collection [/image_version_memberships{?version_id}]

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
                    "id": 156,
                    "url": "https://atmobeta.cyverse.org/api/v2/image_version_memberships/156",
                    "image_version": {
                        "id": "d4f30fb0-3b08-40fa-9075-e022b6cbd050",
                        "url": "https://atmobeta.cyverse.org/api/v2/image_versions/d4f30fb0-3b08-40fa-9075-e022b6cbd050",
                        "name": "1.0"
                    },
                    "group": {
                        "id": 1,
                        "uuid": "6139dc6d-0a50-4a83-9e6d-edf4b8e5d611",
                        "url": "https://atmobeta.cyverse.org/api/v2/groups/6139dc6d-0a50-4a83-9e6d-edf4b8e5d611",
                        "name": "example_group"
                    }
                }
            ]
        }

### List all Image Version Memberships [GET]

+ Response 200(application/json)

    [Image Version Membership Collection][]


### Add Membership to Image Version [POST]
Add an membership to a Image Version. You must specify the following properties:
- **image_version**: Image Version uuid
- **membership**: membership uuid

+ Request (application/json)

        {
            "image_version": "0005099e-bdbd-4964-9c81-e1a5a4788fc6",
            "membership": "d4d143cc-bf99-4ec4-8d15-e0702d0f6ee6"
        }

+ Response 200 (application/json)

    [Image Version Membership][]
