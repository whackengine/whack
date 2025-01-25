# Bindable

- [ ] The Bindable meta-data implementation should transform, at codegen only, each variable into a pair of a private arbitrarily-named variable and a virtual property.
- [ ] Existing Bindable virtual accessors generate a little more code at the setter for dispatching the `PropertyChangeEvent` event. (`const oldValue = ...; ...; if (newValue !== oldValue) dispatch...;`)
- [ ] Bindable variables are accessed differently from non Bindable variables during codegen. The codegen var slot in mxmlsemantics used for a Bindable variable will refer to the private variable part, and not the virtual accessor it corresponds to.
- [ ] Applying Bindable to a whole class does that with all variables; applying it to only one variable does that with only that variable.