# Group Volume Actions -new-
Actions that can be performed on volumes

## Volume Action [/volume_actions/{id}]
A single Volume Action object.

Each Volume Action has the following properties:

- **id**: unique id for the volume
- **name**: name of the action
- **description**: description of the action

+ Parameters
    + id (required, number, '1') ... Number `id` of the Volume Action.
    
+ Model (application/json)

    JSON representation of Volume Resource.

    + Body

            {
                "id": "1",
                "name": "Attach",
                "description": "Attach a volume to an instance"
            }

### Retrieve a Volume Action [GET]
+ Response 200 (application/json)

    [Volume Action][]
    
## Volume Action Collection [/volume_actions]
Collection of all volume actions.

### Attach a Volume [POST]
Attach a volume to an instance.

+ Request (application/json)

        { 
            action: "attach_volume",
            volume_id: "21637611-d75c-4c94-a761-dcd58ed8324b"
        }

+ Response 200 (application/json)

        {
            message: "The requested action <attach_volume> was run successfully",
            object: null,
            result: "success"
        }

### Detach a Volume [POST]
Detach a volume from an instance.

+ Request (application/json)

        { 
            action: "detach_volume",
            volume_id: "21637611-d75c-4c94-a761-dcd58ed8324b"
        }

+ Response 200 (application/json)

        {
            message: "The requested action <detach_volume> was run successfully",
            object: null,
            result: "success"
        }
