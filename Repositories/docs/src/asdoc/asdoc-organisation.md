# ASDoc organisation

A Flex package may include an ASDoc organisation file (`asdoc.json`) which links files to be included and sections to be rendered during ASDoc compilation.

## Example

The following is an example `asdoc.json` file that uses the `docs` directory for the ASDoc assets and sections:

```json
{
    "root-path": "docs",
    "assets": [
        {
            "path": "image.png"
        }
    ],
    "home": {
        "title": "My Package's Home",
        "path": "index.md"
    },
    "sections": [
        {
            "title": "Foo",
            "path": "foo.md",
            "children": [
                {
                    "title": "Qux",
                    "path": "qux.md"
                }
            ]
        }
    ]
}
```

## Root path

The `root-path` option of the `asdoc.json` file indicates the root path for the `path` option of all sections and assets, including the `home` section, so that it does not have to be repeated across sections and assets.