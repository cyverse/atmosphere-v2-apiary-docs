# Group External Links
External Links are used to launch a custom program, script, or daemon after your instance has been deployed. External Links can be added to an image, where they will be required for all future launches. They can also be added to an instance as part of the launch process. External Links can include all of the description required to 'write' the script in a copy-and-paste format, or you can provide a URL to allow for future changes after the script has been created.
 Future plans for boot script include: a more defined concept of 'public/private' for boot scripts.

## External Link [/links/{id}]
A single External Link object.

Each External Link has the following properties:

- **id**: the uuid of the external link
- **url**: the URL of the external link
- **title**: the title of the external link
- **description**: the description of the external link
- **link**: the URL link to represent in the external link *(http(s):// required)*
- **created_by**: user who created the external link

+ Parameters
    + uuid (number, required) ... uuid of the External Link.
    
+ Model (application/json)

    JSON representation of External Link Resource.

    + Body
    
        {
            "id": "3f048788-258e-4819-be88-9271553cc2ce",
            "url": "https://atmobeta.cyverse.org/api/v2/links/3f048788-258e-4819-be88-9271553cc2ce",
            "title": "Sample external link to google",
            "description": "This link will take you to google",
            "link": "https://www.google.com/",
            "created_by": {
                "id": 1,
                "uuid": "0b0e48f9-84fa-4946-b518-f7c86890459d",
                "url": "https://atmobeta.cyverse.org/api/v2/users/0b0e48f9-84fa-4946-b518-f7c86890459d",
                "username": "sgregory"
            }
        }

### Retrieve a External Link [GET]
+ Response 200 (application/json)

    [External Link][]
        
### Update a External Link [PATCH]
You can update the following properties for external links you own:
- **title**: the title of the external link
- **description**: the description of the external link
- **link**: the URL link to represent in the external link *(http(s):// required)*

+ Request (application/json)
  
        {
            "title": "Sample external link to Bing",
            "description": "This link will take you to Bing",
            "link": "https://www.bing.com/",
        }

+ Response 200 (application/json)

    [External Link][]
    
### Delete a External Link [DELETE]
Delete a External Link.  External Links can only be deleted if you were the one who created it. Deleteing a External Link will stop the
 boot script from being executed on any instances that have selected it again.

+ Response 200 (application/json)

    [External Link][]


## External Links Collection [/external links]
Collection of all External Links.

+ Model (application/json)

    JSON representation of External Links Collection Resource.

    + Body

        {
            "count": 1,
            "next": null,
            "previous": null,
            "results":
            [
                {
                    "id": "3f048788-258e-4819-be88-9271553cc2ce",
                    "url": "https://atmobeta.cyverse.org/api/v2/links/3f048788-258e-4819-be88-9271553cc2ce",
                    "title": "Sample external link to google",
                    "description": "This link will take you to google",
                    "link": "https://www.google.com/",
                    "created_by": {
                        "id": 1,
                        "uuid": "0b0e48f9-84fa-4946-b518-f7c86890459d",
                        "url": "https://atmobeta.cyverse.org/api/v2/users/0b0e48f9-84fa-4946-b518-f7c86890459d",
                        "username": "sgregory"
                    }
                }
            ]
        }


### List all External Links [GET]
+ Response 200 (application/json)

    [External Links Collection][]

### Create a External Link [POST]
Create a External Link.  You must specify the following properties:
- **title**: the title of the external link
- **description**: the description of the external link
- **link**: the URL link to represent in the external link *(http(s):// required)*

+ Request (application/json)

        {
            "title": "Sample external link to amazon",
            "description": "This link will take you to amazon",
            "link": "https://www.amazon.com/"
        }

+ Response 201 (application/json)
  [External Link][]
