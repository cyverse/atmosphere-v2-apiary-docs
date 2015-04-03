# Group Image Bookmarks
Image Bookmarks

## Image Bookmark [/image_bookmarks/{id}]
A single Image Bookmark object.

Each Image Bookmark has the following properties:

- **id**: id for the bookmark
- **image**: image bookmarked
- **user**: user who created the bookmark

+ Parameters
    + id (required, number, '1') ... Number `id` of the Provider.

+ Model(application/json)

    JSON representation of Provider Resource

    + Body

        {
            "id": 1,
            "url": "https://atmobeta.iplantc.org/api/v2/image_bookmarks/1",
            "image": {
                "id": 1,
                "url": "https://atmobeta.iplantc.org/api/v2/images/1",
                "uuid": "923222d2-a508-4b2c-b19e-00a29f1a5bb5",
                "name": "copy of ubuntu14.04",
                "description": "description",
                "icon": null,
                "start_date": "2015-03-30T18:30:45.501948Z",
                "end_date": null
            },
            "user": {
                "id": 1,
                "url": "https://atmobeta.iplantc.org/api/v2/users/1",
                "username": "user",
                "first_name": "User",
                "last_name": "Name",
                "email": "user@iplantcollaborative.org",
                "is_staff": true,
                "is_superuser": true,
                "date_joined": "2015-02-11T22:37:24Z"
            }
        }


### Retrieve an Image Bookmark [GET]
+ Response 200 (application/json)

    [Image Bookmark][]


### Retrieve an Image Bookmark [DELETE]
+ Response 204 (application/json)


## Image Bookmark Collection [/image_bookmarks]
Collection of all Image Bookmarks.

+ Parameters
    + page (string, optional) ... Page of results
    + page_size (string, optional) ... Number of results

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
                        "url": "https://atmobeta.iplantc.org/api/v2/images/1",
                        "uuid": "923222d2-a508-4b2c-b19e-00a29f1a5bb5",
                        "name": "copy of ubuntu14.04",
                        "description": "description",
                        "icon": null,
                        "start_date": "2015-03-30T18:30:45.501948Z",
                        "end_date": null
                    },
                    "user": {
                        "id": 1,
                        "url": "https://atmobeta.iplantc.org/api/v2/users/1",
                        "username": "user",
                        "first_name": "User",
                        "last_name": "Name",
                        "email": "user@iplantcollaborative.org",
                        "is_staff": true,
                        "is_superuser": true,
                        "date_joined": "2015-02-11T22:37:24Z"
                    }
                }
            ]

### List all Image Bookmarks [GET]
+ Response 200 (application/json)

    [Image Bookmark Collection][]
