# Group Image Bookmarks
Image Bookmarks

## Image Bookmark [/image_bookmarks/{id}]
A single Image Bookmark object.

Each Image Bookmark has the following properties:

- **id**: id for the bookmark
- **image**: image bookmarked
- **user**: user who created the bookmark

+ Parameters
    + id (required, number) ... `id` of the Image Bookmark.

+ Model(application/json)

    JSON representation of Provider Resource

    + Body

        {
            "id": 1,
            "image": {
                "id": 1,
                "uuid": "923222d2-a508-4b2c-b19e-00a29f1a5bb5"
            },
            "user": {
                "id": 1
            }
        }


### Retrieve an Image Bookmark [GET]
+ Response 200 (application/json)

    [Image Bookmark][]


### Delete an Image Bookmark [DELETE]
+ Response 204 (application/json)


## Image Bookmark Collection [/image_bookmarks]
Collection of all Image Bookmarks.

+ Model (application/json)

    JSON representation of Image Bookmark Resource.

    + Body

            "count": 1,
            "next": null,
            "previous": null,
            "results": [
                {
                    "id": 1,
                    "url": "https://atmobeta.iplantc.org/api/v2/image_bookmarks/1",
                    "image": {
                        "id": 1,
                        "uuid": "923222d2-a508-4b2c-b19e-00a29f1a5bb5"
                    },
                    "user": {
                        "id": 1
                    }
                }
            ]

### List all Image Bookmarks [GET]
+ Response 200 (application/json)

    [Image Bookmark Collection][]

### Create an Image Bookmark [POST]
You must specify the following properties. The user will be set to you.

- **image**: the image to bookmark

+ Request (application/json)

        {
            "image": 1
        }

+ Response 201 (application/json)

    [Image Bookmark][]
