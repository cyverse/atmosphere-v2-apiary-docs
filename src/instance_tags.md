# Group Instance Tag
An instance tag is a link between an image and a tag

## Instance Tag [/instance_tags/{id}]
A single Image Tag object.

Each Image Tag has the following properties:

- **id**: id for the instance tag
- **image**: id of instance with tag attached
- **tag**: id of tag attached to image


+ Parameters
    + id (required, number, '1') ... Number `id` of the Provider.

+ Model(application/json)

    JSON representation of Provider Resource

    + Body

            {
                "id": 1,
                "image":{
                    "id": 1
                },
                "tag":{
                    "id": 1
                }
            }


### Retrieve an Instance Tag [GET]
+ Response 200 (application/json)

    [Instance Tag][]

## Instance Tag Collection [/instance_tags]
Collection of all Instance Tags.

+ Parameters
    + page (string, optional) ... Page of results
    + page_size (string, optional) ... Number of results

+ Model (application/json)

    JSON representation of Instance Tag Collection Resource.

    + Body

            "count": 2,
            "next": null,
            "previous": null,
            "results": [
                {
                    "id": 1,
                    "image":{
                        "id": 1
                    },
                    "tag":{
                        "id": 1
                    }
                },
                {
                    "id": 2,
                    "image":{
                        "id": 2
                    },
                    "tag":{
                        "id": 2
                    }
                }
            ]

### List all Instance Tags [GET]
+ Response 200 (application/json)

    [Instance Tag Collection][]
