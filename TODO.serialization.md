# TODO: serialization

Serialization capabilities first focusing in JSON; class serialization in AMF and XML may get in the package registry later.

## JSON API changes

- [x] A new JSON method `JSON.parseAs(data, classObject)` should be added.
- [ ] `JSON.stringify()` should accept in addition class objects observing for the `Serialization` meta-data.
  - Currently implementing `serializableToPlain` method
  - [ ] Handle user class object
    - [ ] Consider `serialization_capabilities::toJSON()` for a class object
    - [ ] For converting user class object into plain JSON, consider:
      - [ ] Ignoring fields with `skip="true"`
      - [ ] Handling fields with `rename=""`
      - [ ] To convert field value, use `serializableToPlain(fieldValue)`
    - [ ] Handle `tag=""`
      - [ ] Handle `rename=""`
    - [ ] Handle `union="true"`
      - [ ] Handle the different data types (`string="true"`, `number="true"`, `object="true"`, `array="true"` and `boolean="true"`)
  - [ ] Handle plain object
  - [ ] Handle `Array`
  - [ ] Handle `Vector`
  - [ ] Handle `Map.<K, V>`
  - [ ] Handle tuples
  - [ ] For other types, just return the value as is.