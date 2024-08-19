# MXML cheatsheet

## Importing the Flex namespace

```
xmlns:fx="http://ns.hydroper.com/flex/2024"
```

## Importing an ActionScript package as a namespace

```
xmlns:xy="com.x.y.*"
```

Recursive:

```
xmlns:xy="com.x.y.**"
```

## Data binding

```
text="Last password: {password.text}"
```

## Handling an event

```
click="trace('click event:', event);"
```

## Inserting XHTML

```mxml
<fx:xhtml>
    <h1>Title</h1>
    <p>Paragraph <b>number</b> <i>1</i></p>
    <ul>
        <li>Item a.</li>
        <li>Item b. {password.text}</li>
    </ul>
</fx:xhtml>
```

## Inserting HTML

```mxml
<fx:html value="{html_source.value}"/>
```