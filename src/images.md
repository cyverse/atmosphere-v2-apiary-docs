# Group Images
Images are snapshots of an instance at some point in time, including all programs and files.  They can be used to create
 a clone of an instance for others to use, or simply to save the state of an instance as a backup or recovery.

## Image [/images/{id}]
A single Image object.

Each Image has the following properties:

- **id**: id of the image
- **uuid**: unique id of image
- **name**: name of image
- **description**: description of image
- **icon**: (optional) if a custom display icon has been uploaded for this image, this field will contain the relative
 path to that image (e.g. "/images/icon.png")
- **created_by**: id of user who created the image
- **tags**: image tags
- **start_date**: the date the image was created
- **end_date**: Atmosphere implements soft deletes for everything (or nearly everything).  Any images with an
 end_date before the moment the request was made will be filtered out of the result set.  however, end_dates can also be
 used to schedule resources deletion by setting them at a future date.  This can also be used to give someone access to
 a resource for a limited time (such as for a workshop session).
- **provider_images**: provider images this image is associated with


+ Parameters
    + id (required, `1`) ... integer id of the Image.
    
+ Model (application/json)

    JSON representation of Image Resource.

    + Body

        {
            "id": 1,
            "url": "https://atmobeta.iplantc.org/api/v2/images/1",
            "uuid": "f268aebc-d956-11e4-b9d6-1681e6b88ec1",
            "name": "name",
            "description": "description",
            "icon": null,
            "created_by": {
                "id": 1,
                "url": "https://atmobeta.iplantc.org/api/v2/users/1",
                "username": "user",
                "first_name": "User",
                "last_name": "Name",
                "email": "user@iplantcollaborative.org",
                "is_staff": true,
                "is_superuser": true,
                "date_joined": "2013-05-21T21:12:09.158109Z"
            },
            "tags": [
                {
                    "id": 3,
                    "url": "https://atmobeta.iplantc.org/api/v2/tags/3",
                    "name": "R",
                    "description": ""
                },
                {
                    "id": 22,
                    "url": "https://atmobeta.iplantc.org/api/v2/tags/22",
                    "name": "Python2.7",
                    "description": ""
                },
                {
                    "id": 283,
                    "url": "https://atmobeta.iplantc.org/api/v2/tags/283",
                    "name": "Featured",
                    "description": "Featured applications receive priority ordering over non-featured applications"
                }
            ],
            "start_date": "2015-03-30T18:30:45.501948Z",
            "end_date": null,
            "provider_images": [
                {
                    "id": 872,
                    "uuid": "923222d2-a508-4b2c-b19e-00a29f1a5bb5",
                    "url": "https://atmobeta.iplantc.org/api/v2/provider_machines/872",
                    "provider": {
                        "id": 4,
                        "uuid": "923222d2-a508-4b2c-b19e-00a29f1a5bb5",
                        "url": "https://atmobeta.iplantc.org/api/v2/providers/4",
                        "name": "iPlant Cloud - Tucson",
                        "description": "<No Description Provided>",
                        "public": true,
                        "active": true,
                        "start_date": "2014-02-04T19:09:20.713175Z",
                        "end_date": null
                    },
                    "start_date": "2015-03-30T18:30:45.678261Z",
                    "end_date": null
                }
            ]
        }

### Retrieve a Single Image [GET]
+ Response 200 (application/json)

    [Image][]
    
### Edit an Image [PATCH]
+ Response 200 (application/json)

    [Image][]

## Image Collection [/images{?page,page_size}]
Collection of all Images.

This is both a public and private endpoint.  If accessed without being authenticated you will get a list of all public
 images.  If authenticated, you will also get any private images you have permission to use.

+ Parameters
    + page (string, optional) ... Page of results
    + page_size (string, optional) ... Number of results

+ Model (application/json)

    JSON representation of the Images Collection.

    + Body

        {
          "count": 1,
          "next": "null",
          "previous": null,
          "results": [
              {
                  "id": 1,
                  "url": "https://atmobeta.iplantc.org/api/v2/images/1",
                  "uuid": "f268aebc-d956-11e4-b9d6-1681e6b88ec1",
                  "name": "name",
                  "description": "description",
                  "icon": null,
                  "created_by": {
                      "id": 1,
                      "url": "https://atmobeta.iplantc.org/api/v2/users/1",
                      "username": "user",
                      "first_name": "User",
                      "last_name": "Name",
                      "email": "user@iplantcollaborative.org",
                      "is_staff": true,
                      "is_superuser": true,
                      "date_joined": "2013-05-21T21:12:09.158109Z"
                  },
                  "tags": [
                      {
                          "id": 3,
                          "url": "https://atmobeta.iplantc.org/api/v2/tags/3",
                          "name": "R",
                          "description": ""
                      },
                      {
                          "id": 22,
                          "url": "https://atmobeta.iplantc.org/api/v2/tags/22",
                          "name": "Python2.7",
                          "description": ""
                      },
                      {
                          "id": 283,
                          "url": "https://atmobeta.iplantc.org/api/v2/tags/283",
                          "name": "Featured",
                          "description": "Featured applications receive priority ordering over non-featured applications"
                      }
                  ],
                  "start_date": "2015-03-30T18:30:45.501948Z",
                  "end_date": null,
                  "provider_images": [
                      {
                          "id": 872,
                          "uuid": "923222d2-a508-4b2c-b19e-00a29f1a5bb5",
                          "url": "https://atmobeta.iplantc.org/api/v2/provider_machines/872",
                          "provider": {
                              "id": 4,
                              "uuid": "923222d2-a508-4b2c-b19e-00a29f1a5bb5",
                              "url": "https://atmobeta.iplantc.org/api/v2/providers/4",
                              "name": "iPlant Cloud - Tucson",
                              "description": "<No Description Provided>",
                              "public": true,
                              "active": true,
                              "start_date": "2014-02-04T19:09:20.713175Z",
                              "end_date": null
                          },
                          "start_date": "2015-03-30T18:30:45.678261Z",
                          "end_date": null
                      }
                  ]
              }
          ]
        }


### List all Images [GET]

+ Response 200 (application/json)

    [Image Collection][]
