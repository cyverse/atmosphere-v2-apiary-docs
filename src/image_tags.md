# Image Tag
An image tag is a link between an image and a tag

## Image Tag [/image_tags/{id}]
A single Image Tag object.

Each Image Tag has the following properties:

- **id**: id for the image tag
- **image**: image with tag attached
- **tag**: tag attached to image


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


### Retrieve an Image Tag [GET]
+ Response 200 (application/json)

    [Image Tag][]

## Image Tag Collection [/image_tags]
Collection of all Image Tags.

+ Parameters
    + page (string, optional) ... Page of results
    + page_size (string, optional) ... Number of results

+ Model (application/json)

    JSON representation of Image Tag Collection Resource.

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

### List all Image Tags [GET]
+ Response 200 (application/json)

    [Image Tag Collection][]
