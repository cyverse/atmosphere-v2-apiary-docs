# Group Maintenance Records -???-
Maintenance Records are a way to inform the user of current or planned maintenance desks and possible downtown for the
 Atmosphere cloud.

##  Maintenance Record [/maintenance_records/{id}]
A single Maintenance Record object.

Each Maintenance Record has the following properties:

- **id**: the id of the record
- **url**: the url of the record details
- **title**: a short title for the type of outage (planned, unplanned, network outage, maintenance, etc.) (Internal Usage ONLY)
- **message**: the message that should be displayed to users.
- **provider_id**: the id of the provider this record is for (If null - Treat maintenance as *global* so it affects *all providers*)
- **disable_login**: whether login is disabled for the provider while this maintenance is occurring
- **start_date**: the date the machine_request was requested
- **end_date**: the date the machine_request was completed

+ Parameters
    + id (required, Number, 1) ... Number `id` of the Maintenance Record.
    
+ Model (application/json)

    JSON representation of Maintenance Record Resource.

    + Body

            {
                "id": 1,
                "title": "Planned Maintenance",
                "message": "Atmosphere Provider Cloud is under maintenance.",
                "provider_id": 1,
                "disable_login": true,
                "start_date": "2014-07-21T06:05:40Z",
                "end_date": null
            }

### Retrieve a Maintenance Record [GET]
+ Response 200 (application/json)

    [Maintenance Record][]

## Maintenance Record Collection [/maintenance_records?active=true]
Collection of all Maintenance Records. You must pass in active=true if you only want the current records.

+ Model (application/json)

    JSON representation of Maintenance Record Collection Resource.

    + Body

            [
                {
                    "id": 1,
                    "title": "Planned Maintenance",
                    "message": "Atmosphere Provider Cloud is under maintenance.",
                    "provider_id": 1,
                    "disable_login": true,
                    "start_date": "2014-07-21T06:05:40Z",
                    "end_date": null
                }
            ]

### List all Maintenance Records [GET]
+ Response 200 (application/json)

    [Maintenance Record Collection][]
