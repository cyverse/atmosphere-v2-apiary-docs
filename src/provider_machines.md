# Group Provider Machines -done-
## Provider Machine [/provider_machines/{id}]
A single Provider Machine object.

Each Provider Machine has the following properties:

- **id**: provider machine id
- **uuid**: unique universal id
- **image**: image installed on this provider machine
- **provider**: provider this machine is a part of
- **created_by**: user who created this machine
- **start_date**: date of machine creation
- **end_date**: date of machine termination

+ Parameters
    + id (required, number, '1') ... Number `id` of the Provider.

+ Model(application/json)

    JSON representation of Provider Resource

    + Body
        {
            "id": 1,
            "uuid": "923222d2-a508-4b2c-b19e-00a29f1a5bb5",
            "url": "https://atmobeta.iplantc.org/api/v2/provider_machines/1",
            "image": {
                "id": 196,
                "url": "https://atmobeta.iplantc.org/api/v2/images/196",
                "uuid": "923222d2-a508-4b2c-b19e-00a29f1a5bb5",
                "name": "PosGIS-BEIN",
                "description": "This is a install of postgres with all dependencies and GDAL libraries. It is connected via GeoServer to publish shape (shp) files for BEIN project.",
                "icon": null,
                "start_date": "2013-01-04T15:11:35.349000Z",
                "end_date": null
            },
            "provider": {
                "id": 1,
                "uuid": "923222d2-a508-4b2c-b19e-00a29f1a5bb5",
                "url": "https://atmobeta.iplantc.org/api/v2/providers/1",
                "name": "EUCALYPTUS",
                "description": "",
                "public": false,
                "active": false,
                "start_date": "2012-10-29T23:21:37.844000Z",
                "end_date": null
            },
            "created_by": {
                "id": 1586,
                "url": "https://atmobeta.iplantc.org/api/v2/users/1586",
                "username": "admin",
                "first_name": "",
                "last_name": "",
                "email": "",
                "is_staff": false,
                "is_superuser": false,
                "date_joined": "2013-05-21T21:14:37.135643Z"
            },
            "start_date": "2013-07-25T07:00:00Z",
            "end_date": null
        }

### Retrieve an Allocation [GET]
+ Response 200 (application/json)

    [Provider Machine][]

## Provider Machine Collection [/provider_machines]
Collection of all Provider Machines.

+ Parameters
    + page (string, optional) ... Page of results
    + page_size (string, optional) ... Number of results

+ Model (application/json)

    JSON representation of Provider Machine Collection Resource.

    + Body

            "count": 1,
            "next": null,
            "previous": null,
            "results": [
                {
                    "id": 1,
                    "uuid": "923222d2-a508-4b2c-b19e-00a29f1a5bb5",
                    "url": "https://atmobeta.iplantc.org/api/v2/provider_machines/1",
                    "image": {
                        "id": 196,
                        "url": "https://atmobeta.iplantc.org/api/v2/images/196",
                        "uuid": "923222d2-a508-4b2c-b19e-00a29f1a5bb5",
                        "name": "PosGIS-BEIN",
                        "description": "This is a install of postgres with all dependencies and GDAL libraries. It is connected via GeoServer to publish shape (shp) files for BEIN project.",
                        "icon": null,
                        "start_date": "2013-01-04T15:11:35.349000Z",
                        "end_date": null
                    },
                    "provider": {
                        "id": 1,
                        "uuid": "923222d2-a508-4b2c-b19e-00a29f1a5bb5",
                        "url": "https://atmobeta.iplantc.org/api/v2/providers/1",
                        "name": "EUCALYPTUS",
                        "description": "",
                        "public": false,
                        "active": false,
                        "start_date": "2012-10-29T23:21:37.844000Z",
                        "end_date": null
                    },
                    "created_by": {
                        "id": 1586,
                        "url": "https://atmobeta.iplantc.org/api/v2/users/1586",
                        "username": "admin",
                        "first_name": "",
                        "last_name": "",
                        "email": "",
                        "is_staff": false,
                        "is_superuser": false,
                        "date_joined": "2013-05-21T21:14:37.135643Z"
                    },
                    "start_date": "2013-07-25T07:00:00Z",
                    "end_date": null
                }
            ]

### List all Provider Machines [GET]
+ Response 200 (application/json)

    [Provider Machine Collection][]
