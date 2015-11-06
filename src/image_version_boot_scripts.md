# Group Image Version Boot Scripts

## Image Version Boot Script [/image_version_boot_scripts/{id}]
Get a single image version boot script

Each image version boot script has the following properties

- **id**: the id of the image_version_boot_script pairing
- **image_version**: image version the boot script is associated with
- **boot_script** boot script that is associated with the image version

+ Parameters
  + id (number, required) ... 'id' of the image version boot script.

+ Model (application/json)

    JSON representation of image version Resource

    + Body
    
        {
            "id": 156,
            "url": "https://atmobeta.iplantc.org/api/v2/image_version_boot_scripts/156",
            "image_version": {
                "id": "d4f30fb0-3b08-40fa-9075-e022b6cbd050",
                "url": "https://atmobeta.iplantc.org/api/v2/image_versions/d4f30fb0-3b08-40fa-9075-e022b6cbd050",
                "name": "1.0"
            },
            "boot_script": {
                "id": 1,
                "url": "https://atmobeta.iplantc.org/api/v2/boot_scripts/3f048788-258e-4819-be88-9271553cc2ce",
                "uuid": "3f048788-258e-4819-be88-9271553cc2ce",
                "title": "Testing",
                "type": "Raw Text"
            }
        }

### Retrieve a single Image Version Boot Script [GET]

+ Response 200 (application/json)

    [Image Version Boot Script][]

### Remove Boot Script from Image Version [DELETE]

  + Response 204 (application/json)

## Image Version Boot Script Collection [/image_version_boot_scripts{?version_id}]

+ Parameters
  + version_id (number, optional) ... 'id' of image version to filter by

+ Model (application/json)

    + Body

        {
            "count": 1,
            "next": null,
            "previous": null,
            "results": [
                {
                    "id": 156,
                    "url": "https://atmobeta.iplantc.org/api/v2/image_version_boot_scripts/156",
                    "image_version": {
                        "id": "d4f30fb0-3b08-40fa-9075-e022b6cbd050",
                        "url": "https://atmobeta.iplantc.org/api/v2/image_versions/d4f30fb0-3b08-40fa-9075-e022b6cbd050",
                        "name": "1.0"
                    },
                    "boot_script": {
                        "id": 1,
                        "url": "https://atmobeta.iplantc.org/api/v2/boot_scripts/3f048788-258e-4819-be88-9271553cc2ce",
                        "uuid": "3f048788-258e-4819-be88-9271553cc2ce",
                        "title": "Testing",
                        "type": "Raw Text"
                    }
                }
            ]
        }

### List all Image Version Boot Scripts [GET]

+ Response 200(application/json)

    [Image Version Boot Script Collection][]


### Add Boot Script to Image Version [POST]
Add an boot script to a image version. You must specify the following properties:
- **image_version**: image version uuid
- **boot_script**: boot script uuid

+ Request (application/json)

        {
            "image_version": "d4f30fb0-3b08-40fa-9075-e022b6cbd050",
            "boot_script": "3f048788-258e-4819-be88-9271553cc2ce"
        }

+ Response 200 (application/json)

    [Image Version Boot Script][]
