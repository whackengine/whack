# Prisma

Prisma is a database object relational mapping framework based in “Prisma for JavaScript”. It uses Knex.js under the hood.

Schema example:

```xml
<?xml version="1.0"?>
<schema>
    <database>
        <provider>mysql</provider>
    </database>
    <model name="User">
        <field name="id"           type="BigInt"    id="true" default="autoincrement"/>
        <field name="registeredAt" type="DateTime"  default="now"/>
    </model>
</schema>
```