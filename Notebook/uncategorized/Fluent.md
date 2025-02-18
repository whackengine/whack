# Fluent

The whack.fluent.* capability allows seamlessly internationalizing an application to different languages using Fluent Project.

Its “FluentBox” class encapsulates Fluent Project message definitions (FTL) and allows retrieving and managing them.

## Internals

In MXML, for each `UIComponent` tag containing Fluent attributes, dispatch an `Event.FLUENT_UPDATE` event after assigning attributes (so that initial messages render).

## Component fields

Fields of namespace “fluent” (whack.fluent.fluent) have type FluentMessage and indicate that the field is meant to refer to a Fluent message using arguments. Such fields are used in MXML through `xmlns:f=”http://whack.net/fluent”`.

The FluentMessage class is a `{ message:String, arguments:Map.<String, *> }` Record class.

You might have, say, “fluent::text” and “fluent::placeholder” fields, and be able to set message as a MXML attribute and provide arguments to it using MXML tags.

## Internals

The Whack application listens to changes in Fluent.global and updates the entire component tree on FTL update through dispatching an Event.FLUENT_UPDATE event (stopPropagation) in every child.

For Fluent parameters, any MXML binding will cause the surrounding message to re-render.

## MXML snippet

(Note that <f:text> additionally supports data binding in “value=’’”.)

```xml
<?xml version="1.0"?>
<w:Application 
    xmlns:w="http://ns.whack.net/2024" 
    xmlns:f="http://whack.net/fluent">
    <w:Label f:text="hello-person">
        <f:text name="person-name" value="Tony"/>
    </w:Label>
</w:Application>
```

## Setup a FluentBox instance

```as3
await FluentBox.global.init({
    defaultLocale: "en-US",
    supportsLocales: ["en-US", "ja-JP"],
    fallbacks:
    {
        "ja-JP": ["en-US"],
    },
    path: "lang",
    // lang/XX-XX/app.ftl
    files: [
        "app",
    ],
    method: "http",
});
```

## Setting the current language

```as3
await FluentBox.global.setLocale("en-US");
```

## External resources

The Whack engine allows inserting arbitrary online media at the “static” directory. Language resources are put at the “static/lang” directory.

The language resources are put in paths such as “static/lang/en-US/hello.ftl”.

## Custom components

Custom components may need to listen to `Event.FLUENT_UPDATE` to re-render any Fluent messages as the Fluent language is updated. Most components do not need do that as they do not hold Fluent messages per themselves.