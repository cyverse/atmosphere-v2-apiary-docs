# Image Bookmarks
Image Bookmarks go here

## Image Bookmark [/image_bookmarks/{id}]
A single Image Bookmark object.

Each Image Bookmark has the following properties:

- **id**: id for the bookmark
- **uuid**: unique universal identifier for bookmark


+ Parameters
    + id (required, number, '1') ... Number `id` of the Provider.

+ Model(application/json)

    JSON representation of Provider Resource

    + Body

            {
                "id": 1,
                "uuid": 1
            }


### Retrieve an Image Bookmark [GET]
+ Response 200 (application/json)

    [Image Bookmark][]

## Image Bookmark Collection [/image_bookmarks]
Collection of all Image Bookmarks.

+ Parameters
    + page (string, optional) ... Page of results
    + page_size (string, optional) ... Number of results

+ Model (application/json)

    JSON representation of Image Bookmark Resource.

    + Body

            "count": 2,
            "next": null,
            "previous": null,
            "results": [
              {
                  "id": 1,
                  "uuid": 1
              },
              {
                  "id": 2,
                  "uuid": 2
              }
            ]

### List all Image Bookmarks [GET]
+ Response 200 (application/json)

    [Image Bookmark Collection][]
