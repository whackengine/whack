# Ideas

## Cloud documentation

ASDoc is automatically compiled for each package that is published into the package registry through a server container, as in the crates.io service for the Rust language.

## Scale management

Scale either the entire application or a component using the letterbox method.

## flex.gfx.\*

2D display list implemented using PIXI.js. Implement flex.gfx.\* as an optional package in the Flex registry.

- DisplayObject (contains zero or more child display objects)
  - Bitmap
  - Shape
  - TextArea

## flex.gfx3d.\*

3D display implemented using THREE.js. Implement flex.gfx3d.\* as an optional package in the Flex registry.

## foam

A 2D physics engine that is a fork of an old Flash library.

## mysql.easy

A series of packages for facilitating MySQL database migration, seeding, and access using a schema.

## express

A HTTP server framework.

It embeds the CORS middleware from the NPM `cors` package.

It embeds a way of retrieving user's real IP address from an application using [@fullerstack/nax-ipware](https://github.com/neekware/fullerstack/tree/main/libs/nax-ipware).

```
package
{
    import express.core.*;
    import express.util.cors.*;
    import express.util.ip.*;

    public class MyServer extends Application
    {
        private const ipware:Ipware = new Ipware();

        public function MyServer()
        {
            super();
            this.use(cors());
            this.use(function(req:Request, res:Response, next:Function):void
            {
                req.ipInfo = ipware.getClientIP(req);
                // { ip: '177.139.100.100', isPublic: true, isRouteTrusted: false }
                next();
            });
            this.listen(3000);
        }
    }
}
```