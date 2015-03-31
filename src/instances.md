# Group Instances
Instances are virtual machines that users have created from an image (application).  When a user creates an instance
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
- **projects**: id of projects the instance is a part of
- **start_date**: date the instance was created
- **end_date**: end date of instance

+ Parameters
    + id (required, '1') ... integer id of the Instance.
    
+ Model (application/json)

    JSON representation of Instance Resource.

    + Body

            {
                "id": 1,
                "uuid": "1",
                "url": "https://atmobeta.iplantc.org/api/v2/instances/1",
                "name": "instance",
                "status": "suspended",
                "size": 23,
                "ip_address": "0.0.0.0",
                "shell": false,
                "vnc": false,
                "identity": 1,
                "user": 1,
                "provider": 1,
                "image": 1,
                "projects": [
                    1
                ],
                "start_date": "2015-03-03T19:08:06Z",
                "end_date": null
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

            {
                "count": 2,
                "next": null,
                "previous": null,
                "results": [
                    {
                        "id": 1,
                        "uuid": "1",
                        "url": "https://atmobeta.iplantc.org/api/v2/instances/1",
                        "name": "instance",
                        "status": "suspended",
                        "size": 1,
                        "ip_address": "0.0.0.0",
                        "shell": false,
                        "vnc": false,
                        "identity": 1,
                        "user": 1,
                        "provider": 1,
                        "image": 1,
                        "projects": [
                            1
                        ],
                        "start_date": "2015-03-03T19:08:06Z",
                        "end_date": null
                    },
                    {
                        "id": 2,
                        "uuid": "1",
                        "url": "https://atmobeta.iplantc.org/api/v2/instances/2",
                        "name": "instance",
                        "status": "suspended",
                        "size": 1,
                        "ip_address": "0.0.0.0",
                        "shell": false,
                        "vnc": false,
                        "identity": 2,
                        "user": 2,
                        "provider": 1,
                        "image": 1,
                        "projects": [
                            2
                        ],
                        "start_date": "2015-03-03T19:08:06Z",
                        "end_date": null
                    }
                ]
            }
    
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
