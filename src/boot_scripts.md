# Group Boot Scripts
Boot Scripts are used to launch a custom program, script, or daemon after your instance has been deployed. Boot Scripts can be added to an image, where they will be required for all future launches. They can also be added to an instance as part of the launch process. Boot Scripts can include all of the text required to 'write' the script in a copy-and-paste format, or you can provide a URL to allow for future changes after the script has been created.
 Future plans for boot script include: a more defined concept of 'public/private' for boot scripts.

## Boot Script [/boot_scripts/{id}]
A single Boot Script object.

Each Boot Script has the following properties:

- **id**: the id of the boot_script *(DEPRECATED)*
- **uuid**: the uuid of the boot_script
- **url**: the URL of the boot_script
- **title**: the title of the boot_script
- **text**: the contents of the boot_script
- **type**: the type of the boot_script *(Raw Text or URL ONLY)*
- **created_by**: user who created the boot_script

+ Parameters
    + uuid (number, required) ... uuid of the Boot Script.
    
+ Model (application/json)

    JSON representation of Boot Script Resource.

    + Body
    
        {
            "id": 1,
            "uuid": "3f048788-258e-4819-be88-9271553cc2ce",
            "url": "https://atmobeta.cyverse.org/api/v2/boot_scripts/3f048788-258e-4819-be88-9271553cc2ce",
            "created_by": "example_user",
            "title": "Sample boot_script",
            "text": "#!/usr/bin/env python\nprint 'Hello World'",
            "type": "Raw Text"
        }

### Retrieve a Boot Script [GET]
+ Response 200 (application/json)

    [Boot Script][]
        
### Update a Boot Script [PATCH]
You can update the following properties for boot_scripts you own:
- **title**: the title of the boot_script
- **text**: the contents of the boot_script
- **type**: the type of the boot_script (Raw Text or URL *ONLY*)

+ Request (application/json)
  
        {
            "title": "Updated boot_script",
            "text": "https://atmobeta.cyverse.org/init_files/boot_scripts/hello_world.py",
            "type": "URL"
        }

+ Response 200 (application/json)

    [Boot Script][]
    
### Delete a Boot Script [DELETE]
Delete a Boot Script.  Boot Scripts can only be deleted if you were the one who created it. Deleteing a Boot Script will stop the
 boot script from being executed on any instances that have selected it again.

+ Response 200 (application/json)

    [Boot Script][]


## Boot Scripts Collection [/boot_scripts]
Collection of all Boot Scripts.

+ Model (application/json)

    JSON representation of Boot Scripts Collection Resource.

    + Body

        {
            "count": 1,
            "next": null,
            "previous": null,
            "results":
            [
                {
                    "id": 1,
                    "uuid": "3f048788-258e-4819-be88-9271553cc2ce",
                    "url": "https://atmobeta.cyverse.org/api/v2/boot_scripts/3f048788-258e-4819-be88-9271553cc2ce",
                    "created_by": "example_user",
                    "title": "Sample boot_script",
                    "text": "#!/usr/bin/env python\nprint 'Hello World'",
                    "type": "Raw Text"
                }
            ]
        }


### List all Boot Scripts [GET]
+ Response 200 (application/json)

    [Boot Scripts Collection][]

### Create a Boot Script [POST]
Create a Boot Script.  You must specify the following properties:
- **title**: the title of the boot_script
- **text**: the contents of the boot_script
- **type**: the type of the boot_script (Raw Text or URL *ONLY*)

+ Request (application/json)

        {
            "created_by": "example_user",
            "title": "Sample boot_script",
            "text": "#!/usr/bin/env python\nprint 'Hello World'",
            "type": "Raw Text"
        }

+ Response 201 (application/json)
  [Boot Script][]
