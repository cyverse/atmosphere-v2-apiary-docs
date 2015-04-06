# Group Quota -done-
Quotas are available resource allocations on Atmosphere

## Quota [/quotas/{id}]
A single Quota object.

Each quota request has the following properties:

- **id**: the id of the request
- **cpu**: CPUs allotted to quota
- **memory**: Memory allotted to quota
- **storage**: Storage allotted to quota
- **storage_count**: number of storage units allotted to quota
- **suspended_count**: quota suspended count

+ Parameters
    + id (number, required) ... `id` of the quota request.
    
+ Model (application/json)

    JSON representation of Quota Request Resource.

    + Body

        {
            "id": 2,
            "url": "https://atmobeta.iplantc.org/api/v2/quotas/2",
            "cpu": 12,
            "memory": 32,
            "storage": 50,
            "storage_count": 1,
            "suspended_count": 2
        }

### Retrieve a quota [GET]
+ Response 200 (application/json)

    [Quota][]

## Quota Collection [/quotas]
Collection of all Quotas.

+ Model (application/json)

    JSON representation of Quota Collection Resource.

    + Body

            {
                "count": 2,
                "next": null,
                "previous": null,
                "results": [
                    {
                        "id": 2,
                        "url": "https://atmobeta.iplantc.org/api/v2/quotas/2",
                        "cpu": 12,
                        "memory": 32,
                        "storage": 50,
                        "storage_count": 1,
                        "suspended_count": 2
                    },
                    {
                        "id": 3,
                        "url": "https://atmobeta.iplantc.org/api/v2/quotas/3",
                        "cpu": 8,
                        "memory": 24,
                        "storage": 50,
                        "storage_count": 1,
                        "suspended_count": 2
                    },
                ]
            }

### List all Quotas [GET]
+ Response 200 (application/json)

    [Quota Collection][]
