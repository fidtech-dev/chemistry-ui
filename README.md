Chemistry-UI

This is the chemistry-ui design system from Fidtech SA

# Summary

Chemistry Design System is a set of rules that give consistency and harmony to the environment of Chemistry interfaces.
The constant code system, tools, design resources, and UI guidelines.

## Installing / Getting started

Step 1 - A quick introduction to install the package.

```shell
npm i @fidtech-sa/chemistry-ui
```

Step 2 - in angular.json add in "styles"
```shell
"styles": [
            "...",
            "node_modules/@fidtech-sa/chemistry-ui/styles.scss"
          ],
```

Step 3 - In styles.scss add the next code

```shell
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";

$theme-colors: (
      "primary": $primary,
      "secondary": $secondary,
      "success": $success,
      "info": $info,
      "warning": $warning,
      "danger": $danger,
      "light": $light,
      "dark": $dark
);

@import "~bootstrap/scss/bootstrap";
```



## Developing - add a component

Step 1:
Go to the atom directory and create a new component with your module.
!important: in component.module add “export:[nameComponent]” so that it can be used when we generate the library

Step 2:
Add the module in "public_api.ts", this is found in /src.
in this file are the modules to be exported

Step 3:
Run: "npm run build-local", this command generate a dist folder and inside the file that is ready to install it locally, or run "npm run publish" and upload it to npm

*if you want to upload directly to npm, run "npm build-toNpm"
