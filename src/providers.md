# Group Providers -done?-
Providers represent the different cloud providers managed by Atmosphere.

## Provider [/providers/{id}]
A single Provider object.

Each Provider has the following properties:

- **id**: unique id for the provider
- **uuid**: universally unique id for provider
- **name**: the display name for the provider
- **description**: a description of the provider
- **public**: if provider is publicly accessible
- **active**: if provider is active
- **type**: type of provider
- **virtualization**: type of virtualization
- **sizes**: sizes available on this provider
- **start_date**: provider start date
- **end_date**: provider end date


+ Parameters
    + id (required, number, '1') ... Number `id` of the Provider.

+ Model(application/json)

    JSON representation of Provider Resource

    + Body
          {
              "id": 4,
              "uuid": "f268aebc-d956-11e4-b9d6-1681e6b88ec1",
              "url": "https://atmobeta.iplantc.org/api/v2/providers/4",
              "name": "iPlant Cloud - Tucson",
              "description": "<No Description Provided>",
              "public": true,
              "active": true,
              "type": {
                  "id": 2,
                  "url": "https://atmobeta.iplantc.org/api/v2/provider_types/2",
                  "name": "OpenStack",
                  "start_date": "2012-12-12T22:26:06.313000Z",
                  "end_date": null
              },
              "virtualization": {
                  "id": 2,
                  "url": "https://atmobeta.iplantc.org/api/v2/platform_types/2",
                  "name": "KVM",
                  "start_date": "2013-10-18T07:00:00Z",
                  "end_date": null
              },
              "sizes": [
                  {
                      "id": 120,
                      "url": "https://atmobeta.iplantc.org/api/v2/sizes/120",
                      "alias": "N/A",
                      "name": "Unknown Size",
                      "cpu": 1,
                      "disk": 1,
                      "mem": 1,
                      "active": false,
                      "start_date": "2014-04-14T07:00:00Z",
                      "end_date": "2014-07-01T16:14:02.293093Z"
                  },
                  {
                      "id": 37,
                      "url": "https://atmobeta.iplantc.org/api/v2/sizes/37",
                      "alias": "09",
                      "name": "xlarge1",
                      "cpu": 8,
                      "disk": 480,
                      "mem": 32768,
                      "active": false,
                      "start_date": "2014-02-04T19:09:07Z",
                      "end_date": "2015-03-30T18:37:05Z"
                  },
                  {
                      "id": 36,
                      "url": "https://atmobeta.iplantc.org/api/v2/sizes/36",
                      "alias": "08",
                      "name": "large2",
                      "cpu": 8,
                      "disk": 160,
                      "mem": 32768,
                      "active": false,
                      "start_date": "2014-02-04T19:09:07Z",
                      "end_date": "2015-03-30T18:37:10Z"
                  },
                  {
                      "id": 35,
                      "url": "https://atmobeta.iplantc.org/api/v2/sizes/35",
                      "alias": "06",
                      "name": "medium3",
                      "cpu": 4,
                      "disk": 80,
                      "mem": 32768,
                      "active": false,
                      "start_date": "2014-02-04T19:09:07Z",
                      "end_date": "2015-03-30T18:37:15Z"
                  },
                  {
                      "id": 34,
                      "url": "https://atmobeta.iplantc.org/api/v2/sizes/34",
                      "alias": "07",
                      "name": "large1",
                      "cpu": 8,
                      "disk": 80,
                      "mem": 16384,
                      "active": false,
                      "start_date": "2014-02-04T19:09:07Z",
                      "end_date": "2015-03-30T18:37:19Z"
                  },
                  {
                      "id": 33,
                      "url": "https://atmobeta.iplantc.org/api/v2/sizes/33",
                      "alias": "05",
                      "name": "medium2",
                      "cpu": 4,
                      "disk": 60,
                      "mem": 16384,
                      "active": false,
                      "start_date": "2014-02-04T19:09:07Z",
                      "end_date": "2015-03-30T18:37:24Z"
                  },
                  {
                      "id": 32,
                      "url": "https://atmobeta.iplantc.org/api/v2/sizes/32",
                      "alias": "03",
                      "name": "small2",
                      "cpu": 2,
                      "disk": 40,
                      "mem": 16384,
                      "active": false,
                      "start_date": "2014-02-04T19:09:07Z",
                      "end_date": "2015-03-30T18:37:29Z"
                  },
                  {
                      "id": 31,
                      "url": "https://atmobeta.iplantc.org/api/v2/sizes/31",
                      "alias": "04",
                      "name": "medium1",
                      "cpu": 4,
                      "disk": 30,
                      "mem": 8192,
                      "active": false,
                      "start_date": "2014-02-04T19:09:07Z",
                      "end_date": "2015-03-30T18:37:34Z"
                  },
                  {
                      "id": 30,
                      "url": "https://atmobeta.iplantc.org/api/v2/sizes/30",
                      "alias": "02",
                      "name": "small1",
                      "cpu": 2,
                      "disk": 20,
                      "mem": 8192,
                      "active": false,
                      "start_date": "2014-02-04T19:09:07Z",
                      "end_date": "2015-03-30T18:37:38Z"
                  },
                  {
                      "id": 25,
                      "url": "https://atmobeta.iplantc.org/api/v2/sizes/25",
                      "alias": "01",
                      "name": "tiny1",
                      "cpu": 1,
                      "disk": 10,
                      "mem": 4096,
                      "active": false,
                      "start_date": "2014-02-04T19:09:07Z",
                      "end_date": "2015-03-30T18:37:43Z"
                  },
                  {
                      "id": 42,
                      "url": "https://atmobeta.iplantc.org/api/v2/sizes/42",
                      "alias": "10",
                      "name": "large3",
                      "cpu": 8,
                      "disk": 0,
                      "mem": 65536,
                      "active": true,
                      "start_date": "2014-02-04T21:04:30Z",
                      "end_date": null
                  },
                  {
                      "id": 40,
                      "url": "https://atmobeta.iplantc.org/api/v2/sizes/40",
                      "alias": "11",
                      "name": "xlarge1",
                      "cpu": 16,
                      "disk": 0,
                      "mem": 32768,
                      "active": true,
                      "start_date": "2014-02-04T21:04:30Z",
                      "end_date": null
                  },
                  {
                      "id": 44,
                      "url": "https://atmobeta.iplantc.org/api/v2/sizes/44",
                      "alias": "13",
                      "name": "xlarge3",
                      "cpu": 16,
                      "disk": 0,
                      "mem": 131072,
                      "active": true,
                      "start_date": "2014-02-04T21:04:30Z",
                      "end_date": null
                  },
                  {
                      "id": 93,
                      "url": "https://atmobeta.iplantc.org/api/v2/sizes/93",
                      "alias": "6",
                      "name": "medium2",
                      "cpu": 4,
                      "disk": 0,
                      "mem": 16384,
                      "active": true,
                      "start_date": "2014-02-05T04:14:45.101562Z",
                      "end_date": null
                  },
                  {
                      "id": 43,
                      "url": "https://atmobeta.iplantc.org/api/v2/sizes/43",
                      "alias": "12",
                      "name": "xlarge2",
                      "cpu": 16,
                      "disk": 0,
                      "mem": 65536,
                      "active": true,
                      "start_date": "2014-02-04T21:04:30Z",
                      "end_date": null
                  },
                  {
                      "id": 92,
                      "url": "https://atmobeta.iplantc.org/api/v2/sizes/92",
                      "alias": "3",
                      "name": "small1",
                      "cpu": 2,
                      "disk": 0,
                      "mem": 8192,
                      "active": true,
                      "start_date": "2014-02-05T04:14:45.101562Z",
                      "end_date": null
                  },
                  {
                      "id": 38,
                      "url": "https://atmobeta.iplantc.org/api/v2/sizes/38",
                      "alias": "5",
                      "name": "medium1",
                      "cpu": 4,
                      "disk": 0,
                      "mem": 8192,
                      "active": true,
                      "start_date": "2014-02-04T21:04:30.836872Z",
                      "end_date": null
                  },
                  {
                      "id": 94,
                      "url": "https://atmobeta.iplantc.org/api/v2/sizes/94",
                      "alias": "7",
                      "name": "medium3",
                      "cpu": 4,
                      "disk": 0,
                      "mem": 32768,
                      "active": true,
                      "start_date": "2014-02-05T04:14:45.101562Z",
                      "end_date": null
                  },
                  {
                      "id": 23,
                      "url": "https://atmobeta.iplantc.org/api/v2/sizes/23",
                      "alias": "1",
                      "name": "tiny1",
                      "cpu": 1,
                      "disk": 0,
                      "mem": 4096,
                      "active": true,
                      "start_date": "2014-02-04T19:09:07.655411Z",
                      "end_date": null
                  },
                  {
                      "id": 39,
                      "url": "https://atmobeta.iplantc.org/api/v2/sizes/39",
                      "alias": "4",
                      "name": "small2",
                      "cpu": 2,
                      "disk": 0,
                      "mem": 16384,
                      "active": true,
                      "start_date": "2014-02-04T21:04:30.836872Z",
                      "end_date": null
                  },
                  {
                      "id": 24,
                      "url": "https://atmobeta.iplantc.org/api/v2/sizes/24",
                      "alias": "2",
                      "name": "tiny2",
                      "cpu": 1,
                      "disk": 0,
                      "mem": 8192,
                      "active": true,
                      "start_date": "2014-02-04T19:09:07.655411Z",
                      "end_date": null
                  },
                  {
                      "id": 41,
                      "url": "https://atmobeta.iplantc.org/api/v2/sizes/41",
                      "alias": "9",
                      "name": "large2",
                      "cpu": 8,
                      "disk": 0,
                      "mem": 49152,
                      "active": true,
                      "start_date": "2014-02-04T21:04:30Z",
                      "end_date": null
                  },
                  {
                      "id": 95,
                      "url": "https://atmobeta.iplantc.org/api/v2/sizes/95",
                      "alias": "8",
                      "name": "large1",
                      "cpu": 8,
                      "disk": 0,
                      "mem": 16384,
                      "active": false,
                      "start_date": "2014-02-05T04:14:45Z",
                      "end_date": "2015-03-30T20:12:47Z"
                  }
              ],
              "start_date": "2014-02-04T19:09:20.713175Z",
              "end_date": null
          }


### Retrieve a Provider [GET]
+ Response 200 (application/json)

    [Provider][]

## Provider Collection [/providers]
Collection of all Providers.

+ Model (application/json)

    JSON representation of Provider Collection Resource.

    + Body
          {
              "count": 1,
              "next": null,
              "previous": null,
              "results": [
                  {
                      "id": 4,
                      "uuid": "f268aebc-d956-11e4-b9d6-1681e6b88ec1",
                      "url": "https://atmobeta.iplantc.org/api/v2/providers/4",
                      "name": "iPlant Cloud - Tucson",
                      "description": "<No Description Provided>",
                      "public": true,
                      "active": true,
                      "type": {
                          "id": 2,
                          "url": "https://atmobeta.iplantc.org/api/v2/provider_types/2",
                          "name": "OpenStack",
                          "start_date": "2012-12-12T22:26:06.313000Z",
                          "end_date": null
                      },
                      "virtualization": {
                          "id": 2,
                          "url": "https://atmobeta.iplantc.org/api/v2/platform_types/2",
                          "name": "KVM",
                          "start_date": "2013-10-18T07:00:00Z",
                          "end_date": null
                      },
                      "sizes": [
                          {
                              "id": 120,
                              "url": "https://atmobeta.iplantc.org/api/v2/sizes/120",
                              "alias": "N/A",
                              "name": "Unknown Size",
                              "cpu": 1,
                              "disk": 1,
                              "mem": 1,
                              "active": false,
                              "start_date": "2014-04-14T07:00:00Z",
                              "end_date": "2014-07-01T16:14:02.293093Z"
                          },
                          {
                              "id": 37,
                              "url": "https://atmobeta.iplantc.org/api/v2/sizes/37",
                              "alias": "09",
                              "name": "xlarge1",
                              "cpu": 8,
                              "disk": 480,
                              "mem": 32768,
                              "active": false,
                              "start_date": "2014-02-04T19:09:07Z",
                              "end_date": "2015-03-30T18:37:05Z"
                          },
                          {
                              "id": 36,
                              "url": "https://atmobeta.iplantc.org/api/v2/sizes/36",
                              "alias": "08",
                              "name": "large2",
                              "cpu": 8,
                              "disk": 160,
                              "mem": 32768,
                              "active": false,
                              "start_date": "2014-02-04T19:09:07Z",
                              "end_date": "2015-03-30T18:37:10Z"
                          },
                          {
                              "id": 35,
                              "url": "https://atmobeta.iplantc.org/api/v2/sizes/35",
                              "alias": "06",
                              "name": "medium3",
                              "cpu": 4,
                              "disk": 80,
                              "mem": 32768,
                              "active": false,
                              "start_date": "2014-02-04T19:09:07Z",
                              "end_date": "2015-03-30T18:37:15Z"
                          },
                          {
                              "id": 34,
                              "url": "https://atmobeta.iplantc.org/api/v2/sizes/34",
                              "alias": "07",
                              "name": "large1",
                              "cpu": 8,
                              "disk": 80,
                              "mem": 16384,
                              "active": false,
                              "start_date": "2014-02-04T19:09:07Z",
                              "end_date": "2015-03-30T18:37:19Z"
                          },
                          {
                              "id": 33,
                              "url": "https://atmobeta.iplantc.org/api/v2/sizes/33",
                              "alias": "05",
                              "name": "medium2",
                              "cpu": 4,
                              "disk": 60,
                              "mem": 16384,
                              "active": false,
                              "start_date": "2014-02-04T19:09:07Z",
                              "end_date": "2015-03-30T18:37:24Z"
                          },
                          {
                              "id": 32,
                              "url": "https://atmobeta.iplantc.org/api/v2/sizes/32",
                              "alias": "03",
                              "name": "small2",
                              "cpu": 2,
                              "disk": 40,
                              "mem": 16384,
                              "active": false,
                              "start_date": "2014-02-04T19:09:07Z",
                              "end_date": "2015-03-30T18:37:29Z"
                          },
                          {
                              "id": 31,
                              "url": "https://atmobeta.iplantc.org/api/v2/sizes/31",
                              "alias": "04",
                              "name": "medium1",
                              "cpu": 4,
                              "disk": 30,
                              "mem": 8192,
                              "active": false,
                              "start_date": "2014-02-04T19:09:07Z",
                              "end_date": "2015-03-30T18:37:34Z"
                          },
                          {
                              "id": 30,
                              "url": "https://atmobeta.iplantc.org/api/v2/sizes/30",
                              "alias": "02",
                              "name": "small1",
                              "cpu": 2,
                              "disk": 20,
                              "mem": 8192,
                              "active": false,
                              "start_date": "2014-02-04T19:09:07Z",
                              "end_date": "2015-03-30T18:37:38Z"
                          },
                          {
                              "id": 25,
                              "url": "https://atmobeta.iplantc.org/api/v2/sizes/25",
                              "alias": "01",
                              "name": "tiny1",
                              "cpu": 1,
                              "disk": 10,
                              "mem": 4096,
                              "active": false,
                              "start_date": "2014-02-04T19:09:07Z",
                              "end_date": "2015-03-30T18:37:43Z"
                          },
                          {
                              "id": 42,
                              "url": "https://atmobeta.iplantc.org/api/v2/sizes/42",
                              "alias": "10",
                              "name": "large3",
                              "cpu": 8,
                              "disk": 0,
                              "mem": 65536,
                              "active": true,
                              "start_date": "2014-02-04T21:04:30Z",
                              "end_date": null
                          },
                          {
                              "id": 40,
                              "url": "https://atmobeta.iplantc.org/api/v2/sizes/40",
                              "alias": "11",
                              "name": "xlarge1",
                              "cpu": 16,
                              "disk": 0,
                              "mem": 32768,
                              "active": true,
                              "start_date": "2014-02-04T21:04:30Z",
                              "end_date": null
                          },
                          {
                              "id": 44,
                              "url": "https://atmobeta.iplantc.org/api/v2/sizes/44",
                              "alias": "13",
                              "name": "xlarge3",
                              "cpu": 16,
                              "disk": 0,
                              "mem": 131072,
                              "active": true,
                              "start_date": "2014-02-04T21:04:30Z",
                              "end_date": null
                          },
                          {
                              "id": 93,
                              "url": "https://atmobeta.iplantc.org/api/v2/sizes/93",
                              "alias": "6",
                              "name": "medium2",
                              "cpu": 4,
                              "disk": 0,
                              "mem": 16384,
                              "active": true,
                              "start_date": "2014-02-05T04:14:45.101562Z",
                              "end_date": null
                          },
                          {
                              "id": 43,
                              "url": "https://atmobeta.iplantc.org/api/v2/sizes/43",
                              "alias": "12",
                              "name": "xlarge2",
                              "cpu": 16,
                              "disk": 0,
                              "mem": 65536,
                              "active": true,
                              "start_date": "2014-02-04T21:04:30Z",
                              "end_date": null
                          },
                          {
                              "id": 92,
                              "url": "https://atmobeta.iplantc.org/api/v2/sizes/92",
                              "alias": "3",
                              "name": "small1",
                              "cpu": 2,
                              "disk": 0,
                              "mem": 8192,
                              "active": true,
                              "start_date": "2014-02-05T04:14:45.101562Z",
                              "end_date": null
                          },
                          {
                              "id": 38,
                              "url": "https://atmobeta.iplantc.org/api/v2/sizes/38",
                              "alias": "5",
                              "name": "medium1",
                              "cpu": 4,
                              "disk": 0,
                              "mem": 8192,
                              "active": true,
                              "start_date": "2014-02-04T21:04:30.836872Z",
                              "end_date": null
                          },
                          {
                              "id": 94,
                              "url": "https://atmobeta.iplantc.org/api/v2/sizes/94",
                              "alias": "7",
                              "name": "medium3",
                              "cpu": 4,
                              "disk": 0,
                              "mem": 32768,
                              "active": true,
                              "start_date": "2014-02-05T04:14:45.101562Z",
                              "end_date": null
                          },
                          {
                              "id": 39,
                              "url": "https://atmobeta.iplantc.org/api/v2/sizes/39",
                              "alias": "4",
                              "name": "small2",
                              "cpu": 2,
                              "disk": 0,
                              "mem": 16384,
                              "active": true,
                              "start_date": "2014-02-04T21:04:30.836872Z",
                              "end_date": null
                          },
                          {
                              "id": 24,
                              "url": "https://atmobeta.iplantc.org/api/v2/sizes/24",
                              "alias": "2",
                              "name": "tiny2",
                              "cpu": 1,
                              "disk": 0,
                              "mem": 8192,
                              "active": true,
                              "start_date": "2014-02-04T19:09:07.655411Z",
                              "end_date": null
                          },
                          {
                              "id": 41,
                              "url": "https://atmobeta.iplantc.org/api/v2/sizes/41",
                              "alias": "9",
                              "name": "large2",
                              "cpu": 8,
                              "disk": 0,
                              "mem": 49152,
                              "active": true,
                              "start_date": "2014-02-04T21:04:30Z",
                              "end_date": null
                          },
                          {
                              "id": 95,
                              "url": "https://atmobeta.iplantc.org/api/v2/sizes/95",
                              "alias": "8",
                              "name": "large1",
                              "cpu": 8,
                              "disk": 0,
                              "mem": 16384,
                              "active": false,
                              "start_date": "2014-02-05T04:14:45Z",
                              "end_date": "2015-03-30T20:12:47Z"
                          },
                          {
                              "id": 23,
                              "url": "https://atmobeta.iplantc.org/api/v2/sizes/23",
                              "alias": "1",
                              "name": "tiny1",
                              "cpu": 1,
                              "disk": 0,
                              "mem": 4096,
                              "active": true,
                              "start_date": "2014-02-04T19:09:07.655411Z",
                              "end_date": null
                          }
                      ],
                      "start_date": "2014-02-04T19:09:20.713175Z",
                      "end_date": null
                  }
              ]
          }
            
### List all Providers [GET]
+ Response 200 (application/json)

    [Provider Collection][]
