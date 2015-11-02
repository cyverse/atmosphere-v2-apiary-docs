# Group image_version boot_scripts

## image_version boot_script [/image_version_boot_scripts/{id}]
Get a single image_version boot_script

Each image_version boot_script has the following properties

- **id**: the id of the image_version_boot_script pairing
- **image_version**: image_version the boot_script is associated with
- **boot_script** boot_script that is associated with the image_version

+ Parameters
  + id (number, required) ... 'id' of the image_version boot_script.

+ Model (application/json)

    JSON representation of image_version Resource

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

### Retrieve a single image_version boot_script [GET]

+ Response 200 (application/json)

    [image_version boot_script][]

### Remove boot_script from image_version [DELETE]

  + Response 204 (application/json)

## image_version boot_script Collection [/image_version_boot_scripts{?version_id}]

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

### List all image_version boot_scripts [GET]

+ Response 200(application/json)

    [image_version boot_script Collection][]


### Add boot_script to image_version [POST]
Add an boot_script to a image_version. You must specify the following properties:
- **image_version**: image_version uuid
- **boot_script**: boot_script uuid

+ Request (application/json)

        {
            "image_version": "d4f30fb0-3b08-40fa-9075-e022b6cbd050",
            "boot_script": "3f048788-258e-4819-be88-9271553cc2ce"
        }

+ Response 200 (application/json)

    [image_version boot_script][]
