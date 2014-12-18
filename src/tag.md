# Group Tags
Tags are small labels users can apply to various resources and are primarily used to help focus searches.

## Tag [/tag/{id}]
A single Tag object.

Each Tag has the following properties:

- **id**: the id of the tag
- **name**: the name of the tag
- **description**: a description of what the tag means

+ Parameters
    + id (required, number, `1`) ... Number `id` of the Tag.
    
+ Model (application/json)

    JSON representation of Tag Resource.

    + Body

            {
                "id": 5,
                "name": "Ubuntu",
                "description": "A description of Ubuntu"
            }

### Retrieve a Tag [GET]
+ Response 200 (application/json)

    [Tag][]

## Tag Collection [/tag{?page,page_size}]
Collection of all Tags.

+ Parameters
    + page (string, optional) ... Page of results
    + page_size (string, optional) ... Number of results

+ Model (application/json)

    JSON representation of Tags Collection Resource.

    + Body

            {
                "count": 5,
                "next": null,
                "previous": null,
                "results": [
                    {
                        "id": 1,
                        "name": "SpliceGrapher",
                        "description": "A description of SpliceGrapher"
                    },
                    {
                        "id": 2,
                        "name": "xGDBvm",
                        "description": "A description of xGDBvm"
                    },
                    {
                        "id": 3,
                        "name": "R",
                        "description": "A description of R"
                    },
                    {
                        "id": 4,
                        "name": "Featured",
                        "description": "Featured applications receive priority ordering over non-featured applications"
                    },
                    {
                        "id": 5,
                        "name": "Ubuntu",
                        "description": "A description of Ubuntu"
                    }
                ]
            }

### List all Tags [GET]
+ Response 200 (application/json)

    [Tag Collection][]

### Create a Tag [POST]
Create a Tag.  You must specify the following properties:

- **name**: a name for the tag
- **description**: a description of the tag

+ Request (application/json)

        {
            "name": "Tag name",
            "description": "A description of the tag."
        }

+ Response 201 (application/json)

    [Tag][]
