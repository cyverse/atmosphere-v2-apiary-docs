# Group Image Tags
An image tag is a link between an image and a tag

## Image Tag [/image_tags/{id}]
A single Image Tag object.

Each Image Tag has the following properties:

- **id**: id for the image tag
- **image**: image that is tagged
- **tag**: tag attached to image


+ Parameters
    + id (required, number) ... `id` of the Image Tag.

+ Model(application/json)

    + Body

        {
            "id": 1,
            "image": {
                "id": 1,
                "uuid": "f85e84e6-0851-57a5-a2dc-fb702e5a66a4"
            },
            "tag": {
                "id": 1
            }
        }


### Retrieve an Image Tag [GET]
+ Response 200 (application/json)

    [Image Tag][]

### Delete an Image Tag [DELETE]
+ Response 204 (application/json)

## Image Tag Collection [/image_tags{?application__id}]
Collection of all Image Tags.

+ Parameters
    + application__id (number, optional) ... return Image Tags belong to the Image with this 'id'

+ Model (application/json)

    JSON representation of Image Tag Collection Resource.

    + Body

        "count": 1,
        "next": null,
        "previous": null,
        "results": [
            {
                "id": 1,
                "image": {
                    "id": 1,
                    "uuid": "f85e84e6-0851-57a5-a2dc-fb702e5a66a4"
                },
                "tag": {
                    "id": 1
                }
            }
        ]

### List all Image Tags [GET]
+ Response 200 (application/json)

    [Image Tag Collection][]

### Create an Image Tag [POST]
+ Request (application/json)

    {
        "image": 1,
        "tag": 1
    }
        
+ Response 200 (application/json)

    [Image Tag][]
