# Group Instance -updated-
Instances are virtual machines that users have created from an image (application).  When a user creates an instance
 it immediately starts deducting AU's from their account.

## '/instances/{id}' [/instances/{id}]
A single Instance object.

Each Instance has the following properties:

- **id**: id
- **name**: name of the instance
- **start_date**: the date the instance was created
- **created_by**: username for the person who created the instance
- **status**: the state the instance is in (active, suspended, shutoff, etc.)
- **tags**: instance specific tags (array of strings)
- **size**: the size of the instance (number of CPUs, RAM, and Disk Space)
- **provider**: the provider the instance is on
- **identity**: which account the instance deducts AU's from
- **image_version**: The specific version of an image the instance was created from
- **ip_address**: IP address you can use to connect to the machine.  Address that start with 196, 178, or 10 are private,
 all others are public.  Instances with an IP address of 0.0.0.0 have not been assigned an IP address yet.
- **has_shell**: true if a user can ssh into the instance
- **has_vnc**: true if a user can remote desktop into the instance
    
+ Parameters
    + id (required, string, '26f0795e-f80b-11e3-8ef5-b2227cce2b54') ... String `id` of the Instance.
    
+ Model (application/json)

    JSON representation of Instance Resource.

    + Body

            {
                "id": "26f0795e-f80b-11e3-8ef5-b2227cce2b54",
                "name": "Ubuntu 13.04 w/Docker 0.9",
                "start_date": "2014-05-14T18:17:18Z",
                "created_by": "username",
                "status": "active",
                "tags": [{
                  "id": 5,
                  "name": "Ubuntu",
                  "description": "A description of Ubuntu"
                }]
                "size": {
                    "id": "1",
                    "name": "m1.tiny",
                    "cpu": 1,
                    "disk": 0,
                    "root": 1,
                    "mem": 512
                },
                "provider": {
                  "id": "1",
                  "name": "iPlant Tucson"
                },
                "identity": {
                    "id": 1,
                    "created_by": "username",
                    "provider_id": 1
                },
                "image_version": {
                  "id": "4a254940-f80b-11e3-8ef5-b2227cce2b54",
                  "Ubuntu 13.04 w/Docker 0.9"
                },
                "ip_address": "127.0.0.1",
                "has_shell": false,
                "has_vnc": false
            }

### Retrieve an Instance [GET]
Get a specific instance.

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

            [
                {
                    "id": "26f0795e-f80b-11e3-8ef5-b2227cce2b54",
                    "name": "Ubuntu 13.04 w/Docker 0.9",
                    "start_date": "2014-05-14T18:17:18Z",
                    "created_by": "username",
                    "status": "active",
                    "tags": [{
                      "id": 5,
                      "name": "Ubuntu",
                      "description": "A description of Ubuntu"
                    }]
                    "size": {
                        "id": "1",
                        "name": "m1.tiny",
                        "cpu": 1,
                        "disk": 0,
                        "root": 1,
                        "mem": 512
                    },
                    "provider": {
                      "id": "1",
                      "name": "iPlant Tucson"
                    },
                    "identity": {
                        "id": 1,
                        "created_by": "username",
                        "provider_id": 1
                    },
                    "image_version": {
                      "id": "4a254940-f80b-11e3-8ef5-b2227cce2b54",
                      "Ubuntu 13.04 w/Docker 0.9"
                    },
                    "ip_address": "127.0.0.1",
                    "has_shell": false,
                    "has_vnc": false
                }
            ]
    
### List all Instances [GET]
Get a list of your instances created under the specific provider/identity.

+ Response 200 (application/json)

    [Instance Collection][]
        
### Launch an Instance [POST]
Launch an instance of an image.  You must specify the following properties:

- **name**: the name of your instance
- **image_version_id**: the id of the image version version you want to launch
- **size_id**: the id of the size of the virtual machine you need
- **provider_id**: id of the provider that you want the instance launched on
- **identity_id**: id of the identity you want to use to launch the instance

+ Request (application/json)

        { 
            "name": "Instance Name",
            "image_version_id": "237f983e-f80d-11e3-8ef5-b2227cce2b54"
            "size_id": "1",
            "provider_id": "1"
            "identity_id": "1"
        }

+ Response 201 (application/json)

    [Instance][]
