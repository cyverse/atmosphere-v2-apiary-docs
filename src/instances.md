# Group Instances
Instances are virtual machines that users have created from an image.  When a user creates an instance
 it immediately starts deducting AU's from their account.

## Instance [/instances/{id}]
A single Instance object.

Each Instance has the following properties:

- **id**: id
- **uuid**: unique id
- **name**: name of the instance
- **status**: the state the instance is in (active, suspended, shutoff, etc.)
- **size**: the size of the instance (number of CPUs, RAM, and Disk Space)
- **ip_address**: IP address you can use to connect to the machine.  Address that start with 196, 178, or 10 are private,
 all others are public.  Instances with an IP address of 0.0.0.0 have not been assigned an IP address yet.
- **shell**: true if a user can ssh into the instance
- **vnc**: true if a user can remote desktop into the instance
- **identity**: which account the instance deducts AU's from
- **user**: username for the person who created the instance
- **provider**: the provider the instance is on
- **image**: The specific version of an image the instance was created from
- **start_date**: date the instance was created
- **end_date**: end date of instance

+ Parameters
    + id (required, number) ... 'id' of the Instance.
    
+ Model (application/json)

    JSON representation of Instance Resource.

    + Body

        {
            "id": 1,
            "uuid": "923222d2-a508-4b2c-b19e-00a29f1a5bb5",
            "name": "Ubuntu 12.04.5 - iPlant Base",
            "status": "suspended",
            "size": {
                "id": 23
            },
            "ip_address": "0.0.0.0",
            "shell": true,
            "vnc": true,
            "identity": {
                "id": 6512,
                "uuid": "923222d2-a508-4b2c-b19e-00a29f1a5bb5"
            },
            "user": {
                "id": 3178
            },
            "provider": {
                "id": 4,
                "uuid": "923222d2-a508-4b2c-b19e-00a29f1a5bb5"
            },
            "image": {
                "id": 868,
                "uuid": "923222d2-a508-4b2c-b19e-00a29f1a5bb5"
            },
            "start_date": "2015-02-16T19:24:26Z",
            "end_date": null
        }

### Retrieve an Instance [GET]

+ Response 200 (application/json)

    [Instance][]

### Update an Instance [PATCH]
You can update the following properties for instances you own:
- **name**: the name of the instance

+ Request (application/json)

    + Body
    
        {
            "name": "new name"
        }

+ Response 200 (application/json)

    [Instance][]

### Terminate an Instance [DELETE]
Terminate an instance.

+ Response 200 (application/json)

    [Instance][]


## Instance Collection [/instances]
Collection of all Instances
    
+ Model (application/json)

    JSON representation of Instances Collection Resource.

    + Body
    
        {
            "count": 1,
            "next": null,
            "previous": null,
            "results": [
                {
                    "id": 1,
                    "uuid": "923222d2-a508-4b2c-b19e-00a29f1a5bb5",
                    "name": "Ubuntu 12.04.5 - iPlant Base",
                    "status": "suspended",
                    "size": {
                        "id": 23
                    },
                    "ip_address": "0.0.0.0",
                    "shell": true,
                    "vnc": true,
                    "identity": {
                        "id": 6512,
                        "uuid": "923222d2-a508-4b2c-b19e-00a29f1a5bb5"
                    },
                    "user": {
                        "id": 3178
                    },
                    "provider": {
                        "id": 4,
                        "uuid": "923222d2-a508-4b2c-b19e-00a29f1a5bb5"
                    },
                    "image": {
                        "id": 868,
                        "uuid": "923222d2-a508-4b2c-b19e-00a29f1a5bb5"
                    },
                    "start_date": "2015-02-16T19:24:26Z",
                    "end_date": null  
                }
            ]
        }
    
### List all Instances [GET]
Get a list of your instances.

+ Response 200 (application/json)

    [Instance Collection][]

### Create an Instance [POST]
To Create a new instance, you need to specify the following properties:
- **name**: The name of your new instance
- **identity**: The identity you want to use to create your instance. (This also determines what cloud provider you will be launching on)
- **size_alias**: The alias/identifier of the size/flavor you want when creating your instance.
- **source_alias**: The alias/identifier of the machine or volume that you want to use as the 'source' of your instance.
- **deploy**: _(Default: True)_ If true, run Ansible deployments on this instance. If false, the instance will show 'active' after a floating IP address has been associated.
- **project**: _(Optional)_ The UUID of the project that you want to add this instance to. (If not selected, you will be required to add it to a project in the Troposphere UI)
- **scripts**: _(Optional)_ A list of script IDs to be included/deployed with your instance after it has made it to 'active'.
- **extra**: _(Optional)_ This is a dictionary/map of additional key/value pairs. It is NOT required to launch, but can be used to adjust/fine-tune your instance launch. *DEVELOPERS/STAFF/ADVANCED USERS ONLY*

+ Request (application/json)

        {
            "identity": "b3c83812-10d8-4ae5-8f2a-dc922182e65e",
            "name": "My First Instance",
            "project": "fae4003e-7125-43b8-b466-c59b6a2d120a",
            "size_alias": "1",
            "source_alias": "d559c236-53ef-437a-999e-02ae16c4b5f0",
            "scripts": [],
            "deploy": true,
            "extra": {}
        }
+ Response 201 (application/json)
        {
            "provider_uuid": "d97037cf-2b2d-44a8-93cc-2a82c0ae193a",
            "identity": "b3c83812-10d8-4ae5-8f2a-dc922182e65e",
            "name": "My First Instance",
            "project": "fae4003e-7125-43b8-b466-c59b6a2d120a",
            "size_alias": "1",
            "source_alias": "d559c236-53ef-437a-999e-02ae16c4b5f0",
            "scripts": [],
            "deploy": true,
            "extra": {}
        }

    [Instance][]
