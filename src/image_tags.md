# Group Image Tags
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
            "url": "https://atmobeta.iplantc.org/api/v2/image_tags/1",
            "image": {
                "id": 1,
                "url": "https://atmobeta.iplantc.org/api/v2/images/1",
                "uuid": "f85e84e6-0851-57a5-a2dc-fb702e5a66a4",
                "name": "name",
                "description": "description",
                "icon": "https://atmobeta.iplantc.org/resources/machine_images/bsa.png",
                "start_date": "2011-11-04T16:05:09Z",
                "end_date": null
            },
            "tag": {
                "id": 1,
                "url": "https://atmobeta.iplantc.org/api/v2/tags/1",
                "name": "tag",
                "description": "description",
                "user": null
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

        "count": 1,
        "next": null,
        "previous": null,
        "results": [
            {
                "id": 1,
                "url": "https://atmobeta.iplantc.org/api/v2/image_tags/1",
                "image": {
                    "id": 1,
                    "url": "https://atmobeta.iplantc.org/api/v2/images/1",
                    "uuid": "f85e84e6-0851-57a5-a2dc-fb702e5a66a4",
                    "name": "name",
                    "description": "description",
                    "icon": "https://atmobeta.iplantc.org/resources/machine_images/bsa.png",
                    "start_date": "2011-11-04T16:05:09Z",
                    "end_date": null
                },
                "tag": {
                    "id": 1,
                    "url": "https://atmobeta.iplantc.org/api/v2/tags/1",
                    "name": "tag",
                    "description": "description",
                    "user": null
                }
            }
        ]

### List all Image Tags [GET]
+ Response 200 (application/json)

    [Image Tag Collection][]
