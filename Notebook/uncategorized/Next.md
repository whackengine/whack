# Next

Next shall allow building single page applications using the Whack engine. Pages are expressed as MXML components which are rendered partially at the server side (including <w:xhtml/> for example), but fully rendered at the client side.

## Optimization logic

MXML page content should be stripped off the main JavaScript file and loaded externally (possibly containing outlets to be replaced by custom UIComponents).