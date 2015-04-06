# Group Tags -done-
Tags are small labels users can apply to various resources and are primarily used to help focus searches.

## Tag [/tags/{id}]
A single Tag object.

Each Tag has the following properties:

- **id**: the id of the tag
- **name**: the name of the tag
- **description**: a description of what the tag means

+ Parameters
    + id (number, required) ... `id` of the Tag.
    
+ Model (application/json)

    + Body

            {
                "id": 5,
                "name": "Ubuntu",
                "description": "A description of Ubuntu"
            }

### Retrieve a Tag [GET]
+ Response 200 (application/json)

    [Tag][]

### Update a Tag [PATCH]
Currently only Atmosphere staff can update tag information.

+ Request (application/json)

        {
            name: "new-name",
            description: "new description of tag"
        }

+ Response 200 (application/json)

    [Tag][]


### Delete a Tag [DELETE]

+ Response 204 (application/json)


## Tag Collection [/tag]
Collection of all Tags.

+ Model (application/json)

    + Body

            {
                "count": 1,
                "next": null,
                "previous": null,
                "results": [
                    {
                        "id": 1,
                        "name": "SpliceGrapher",
                        "description": "A description of SpliceGrapher"
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
