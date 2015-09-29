# Group Metrics
Collect metrics on an instance. Currently metrics are stored in a 2 week
window, with a per minute granularity. This api can query for the following
instance metrics.

- cpu usage 
- memory 
- rx (bytes read over the network) 
- tx (bytes transferred) 
- state 

Metrics can be fetched with
varying resolution, and varying duration. Ex. you can get metrics every 5
minutes for the past week.


## Fetch metrics [/metrics/{uuid}.json{?field,res,size,fun}]
Fetch an instance's metrics over an interval of time

+ Parameters
    + uuid (required, string) - the uuid of the instance
    + field (required, enum(string)) - type of metric 

        + Members
            + `cpu` - the total cpu time the instance has been running 
            + `mem` - the memory consumed by the vm  
            + `rx` - bytes read over the network 
            + `tx` - bytes sent out over the network  
            + `state` - A numeral determining whether the vm is
active/suspended/shutoff

    + res (required, number) - number of minutes per datapoint
    + size (required, number) - number of datapoints
    + fun (optional, string) - transform the datapoints

        + Members
            + `perSecond` - Apply derivative to datapoints
    

+ Model(application/json)

    Here is an exapmle JSON response, for the following request:

    `metrics/7e17079c-2c31-4c22-8f31-8e4d22114e56.json?field=cpu&res=1&size=3`


    + Body

        [
            { 
                "target": "stats.sl1r2_iplantcollaborative_org.7e17079c-2c31-4c22-8f31-8e4d22114e56.cpu",
                "datapoints":[[238294.3,1443539820],[238311.9,1443539880],[null,1443539940]]
            },
        ]

### Fetch metrics [GET]
+ Response 200 (application/json)

    [Fetch metrics][]
