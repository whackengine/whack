# MXML reference

MXML is an eXtensible Markup Language used for expressing user interface components over the ActionScript language.

## MXML file

A MXML file shall have a filename that identifies the name of the ActionScript class that it defines, while the parent directories after a source path determine the ActionScript package it belongs to.

Given that the Flex manifest defines `source[0].path = "src"`, the following is an example MXML file defining the class `com.company.max.WeatherScreen`:

```mxml
<!-- src/com/company/max/WeatherScreen.mxml -->
<?xml version="1.0"?>
<fx:HGroup xmlns:fx="http://ns.hydroper.com/flex/2024">
    <fx:Label variant="heading" value="Weather"/>
</fx:HGroup>
```

## fx prefix

The convention is to assign the `fx` prefix as the URI `http://ns.hydroper.com/flex/2024`, identifying the Flex elements and component set.

## &lt;i:Script/&gt;

The `<fx:Script/>` element is used for defining properties and methods inside the component using the ActionScript language.

```mxml
<?xml version="1.0"?>
<fx:HGroup xmlns:fx="http://ns.hydroper.com/flex/2024">
    <fx:Script><![CDATA[
        // definitions
    ]]></fx:Script>
</fx:HGroup>
```