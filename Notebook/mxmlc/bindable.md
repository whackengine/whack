# Bindable

The Bindable meta-data implementation should transform each variable into a pair of a private arbitrarily-named variable and a virtual property consisting of native accessors, and existing virtual accessors generate a little more code at the setter for dispatching the `PropertyChangeEvent` event.

Applying Bindable to a whole class does that with all variables; applying it to only one variable does that with only that variable.