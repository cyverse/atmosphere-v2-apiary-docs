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
