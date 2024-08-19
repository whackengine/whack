# Adding a script

MXML files insert ActionScript code through a `<fx:Script>` tag containing code inside a `<![CDATA[ ... ]]>` markup.

```mxml
<!-- src/com/example/ExampleApplication.mxml -->
<?xml version="1.0"?>
<fx:Application xmlns:fx="http://ns.hydroper.com/flex/2024">
    <fx:Script><![CDATA[
        // ActionScript
    ]]></fx:Script>
</fx:Application>
```

For initialiser code, handle the `creationComplete` event in the `s:Page` tag:

```mxml
<?xml version="1.0"?>
<fx:Application xmlns:fx="http://ns.hydroper.com/flex/2024" creationComplete="initialise()">
    <fx:Script><![CDATA[
        private function initialise():void
        {
            trace("Hello world");
        }
    ]]></fx:Script>
</fx:Application>
```