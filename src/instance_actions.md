# Group Instance Actions -new-
Actions that can be performed on instances.

## Instance Action [/instances/{instance_id}/actions/{id}]
An action that can be performed on an instance, such as start, stop, suspend or delete.

Each Action has the following properties:

- **id**: id
- **name**: the name of the action
- **description**: a description of what the action does
    
+ Parameters
    + instance_id (required, string, '26f0795e-f80b-11e3-8ef5-b2227cce2b54') ... String `id` of the Instance.
    + id (required, string, '26f0795e-f80b-11e3-8ef5-b2227cce2b54') ... String `id` of the Instance.
    
+ Model (application/json)

    JSON representation of Instance Resource.

    + Body

            {
                "id": "26f0123a-f80b-11d3-8ef5-b2227cce2b54",
                "name": "suspend",
                "description": "suspends an instance"
            }

### Retrieve an Instance Action [GET]
Get a specific instance.

+ Response 200 (application/json)

    [Instance Action][]


### Execute an instance action [POST]
Perform the specified action on an instance

+ Response 204 (application/json)

    [Instance Action][]
    
## Instance Action Collection [/instances/{id}/actions]
Collection of all actions that can be performed on an instance.

+ Parameters
    + id (required, string, '26f0795e-f80b-11e3-8ef5-b2227cce2b54') ... String `alias` of the Instance.
    
+ Model (application/json)

    JSON representation of Instances Collection Resource.

    + Body

            [
                {
                    "id": "1",
                    "name": "start",
                    "description": "Start a stopped instance."
                },{
                    "id": "2",
                    "name": "stop",
                    "description": "Stop a running instance.  Stopped instances continue to reduce the AU's."
                },
                {
                    "id": "3",
                    "name": "suspend",
                    "description": "Suspend a running instance.  This will also stop subtracting AU's."
                },
                {
                  "id": "4",
                  "name": "resume",
                   "description": "Resume a suspended instance.  This will also start subtracting AU's again."
                }
            ]
    
### List all Instance Actions [GET]
List all actions that can be performed on an instance

+ Response 200 (application/json)

    [Instance Action Collection][]
