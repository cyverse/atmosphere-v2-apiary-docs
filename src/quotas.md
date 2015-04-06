# Group Quota
Quotas are available resource allocations on Atmosphere.  They determine the maximum amount of combined CPU, memory,
disk and number of volumes that a user can launch.

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

    + Body

        {
            "id": 2,
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

    + Body

            {
                "count": 1,
                "next": null,
                "previous": null,
                "results": [
                    {
                        "id": 2,
                        "cpu": 12,
                        "memory": 32,
                        "storage": 50,
                        "storage_count": 1,
                        "suspended_count": 2
                    }
                ]
            }

### List all Quotas [GET]
+ Response 200 (application/json)

    [Quota Collection][]
