# Group Status Messages
Status Messages are a way to communicate with the end users in an non-disabling of clouds fashion.

##  Status Message [/status_messages/{id}]
A single Status Message object.

Each Status Message has the following properties:

- **id**: the id of the message
- **title**: a short title for the type of outage (planned, unplanned, network outage, maintenance, etc.)
- **message**: the message
- **provider_id**: the id of the provider this message is for

+ Parameters
    + id (required, Number, 1) ... Number `id` of the Maintenance Message.
    
+ Model (application/json)

    JSON representation of Maintenance Message Resource.

    + Body

            {
                "id": 1,
                "title": "Status Update",
                "message": "Atmosphere Provider Cloud has a message for you.",
                "provider_id": 1,
                "start_date": "2014-07-21T06:05:40Z",
                "end_date": null
            }

### Retrieve a Status Message [GET]
+ Response 200 (application/json)

    [Status Message][]

## Status Message Collection [/status_messages]
Collection of all Status Messages.

+ Model (application/json)

    JSON representation of Status Message Collection Resource.

    + Body

            [
                {
                    "id": 1,
                    "title": "Status Update",
                    "message": "Atmosphere Provider Cloud has a message for you.",
                    "provider_id": 1,
                    "start_date": "2014-07-21T06:05:40Z",
                    "end_date": null
                }
            ]

### List all Status Messages [GET]
+ Response 200 (application/json)

    [Status Message Collection][]
