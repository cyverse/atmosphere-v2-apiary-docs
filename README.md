# Atmosphere's API Docs for Apiary
[view online](http://docs.atmospherev2.apiary.io/#)

## Usage

First, install `gulp` globally:

```shell
npm install -g gulp
```

Then, install the node modules:

```shell
npm install
```

Then, add or change any of the files in /src as required.

Then, run gulp to regenerate the apiary.apib file.  This repository is linked to Apiary
 and will be copied over when it changes.

```shell
gulp
```

## Development

Apiary provides tools to see your docs locally before they are hosted online.

```shell
sudo gem install apiaryio
```

Now start a server on localhost:8080, in the directory containing the apiary.apib.
This server will watch for changes (after running `gulp`).

```shell
apiary preview --server
```

## Debugging changes made to the API Blueprint

For now, the best API Blueprint validator is here: https://github.com/JakubOnderka/api-blueprint-validator
To validate the latest changes you made (After running `gulp`):

```shell
npm install api-blueprint-validator
node ./node_modules/.bin/api-blueprint-validator apiary.apib
# An example of what an error would look like:
Error: Undefined resource model Image Version Boot Script on line 1034
# An example of what a success message looks like: (Note that it also produces an 'error')
/opt/dev/atmosphere-v2-apiary-docs/node_modules/api-blueprint-validator/src/validator.js:74
      result.warnings.forEach(function (warning) {
                      ^
TypeError: Cannot call method 'forEach' of undefined
    at /opt/dev/atmosphere-v2-apiary-docs/node_modules/api-blueprint-validator/src/validator.js:74:23
```
