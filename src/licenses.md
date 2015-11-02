# Group Licenses
Licenses are used to control who and how an instance gets used. Licenses are added by image creators. Once the image has been created, any user who wants to launch a copy of this instance will be required to agree to the license. All licenses are public and can seen by all users. Only the owner can edit or delete a license. Licenses that are deleted will also be removed from all images that previously required the license.

## License [/licenses/{id}]
A single License object.

Each License has the following properties:

- **id**: the id of the license *(DEPRECATED)*
- **uuid**: the uuid of the license
- **url**: the URL of the license
- **title**: the title of the license
- **text**: the contents of the license
- **type**: the type of the license *(Full Text or URL ONLY)*
- **created_by**: username of the user who created the license

+ Parameters
    + uuid (number, required) ... uuid of the License.
    
+ Model (application/json)

    JSON representation of License Resource.

    + Body
    
        {
            "id": 1,
            "url": "https://atmobeta.iplantc.org/api/v2/licenses/d4d143cc-bf99-4ec4-8d15-e0702d0f6ee6",
            "uuid": "d4d143cc-bf99-4ec4-8d15-e0702d0f6ee6",
            "created_by": "example_user",
            "title": "Testing",
            "text": "Testing the update method",
            "type": {
                "id": 2,
                "name": "Full Text",
                "description": "A full-text copy of the license (HTML Okay)"
            }
        }

### Retrieve a License [GET]
+ Response 200 (application/json)

    [License][]
        
### Update a License [PATCH]
You can update the following properties for licenses you own:
- **title**: the title of the license
- **text**: the contents of the license
- **type**: the type of the license (Full Text or URL *ONLY*)

+ Request (application/json)
  
        {
            "title": "Updated license",
            "text": "https://atmobeta.iplantc.org/init_files/licenses/hello_world.py",
            "type": "URL"
        }

+ Response 200 (application/json)

    [License][]
    
### Delete a License [DELETE]
Delete a License.  Licenses can only be deleted if you were the one who created it. Deleteing a License will stop the
 boot script from being executed on any instances that have selected it again.

+ Response 200 (application/json)

    [License][]


## Licenses Collection [/licenses]
Collection of all Licenses.

+ Model (application/json)

    JSON representation of Licenses Collection Resource.

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
                    "url": "https://atmobeta.iplantc.org/api/v2/licenses/3f048788-258e-4819-be88-9271553cc2ce",
                    "created_by": "example_user",
                    "title": "Sample license",
                    "text": "#!/usr/bin/env python\nprint 'Hello World'",
                    "type": "Full Text"
                }
            ]
        }


### List all Licenses [GET]
+ Response 200 (application/json)

    [Licenses Collection][]

### Create a License [POST]
Create a License.  You must specify the following properties:
- **title**: the title of the license
- **text**: the contents of the license
- **type**: the type of the license (Full Text or URL *ONLY*)

+ Request (application/json)

        {
            "created_by": "example_user",
            "title": "Sample license",
            "text": "This is a license. It must be accepted before you can continue to launch your instance.
            "type": "Full Text"
        }

+ Response 201 (application/json)
  [License][]
