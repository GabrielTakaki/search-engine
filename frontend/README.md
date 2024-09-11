
### UI Library

This project uses the react UI library Material Design that contains a set of high quality components and demos for building rich, interactive user interfaces.

[https://ant.design/components/overview/](https://mui.com/)

> **NOTE**: All Material UI components must be wrapped with a custom component with the same name before using it. Thats because if it is necessary in the future to make a change in the behavior or appearance of any component of the library, the change must be made only in one place instead of having to change everywhere that the component of the library is being used.

*bad*

```javascript
/* SomeComponent.jsx */
import {Button} from '@mui/material'
```

*good*

```javscript
/* SomeComponent.jsx */
import {Button} from 'components/inputs/Button'
```


### Folder Structure

This project use feature based structure based on the concepts explained in **Domain Driven Design**. The main idea is that each module we define has all the code related to it and only code from the module itself is imported.

> **NOTE**: The fundamental rule to be followed is not to import code between modules.


Below is an example of this folder structure:

```
src/
|-- components/
|   |-- Avatar.tsx
|   |-- Button.tsx
|   |-- TextField.tsx
|-- contexts/
|   |-- AuthContext.tsx
|-- features/
|   |-- Home/
|   |   |-- components/  
|   |   |   |-- SomeUserProfile.tsx
|   |   |-- contexts/
|   |   |-- hooks/
|   |   |-- screens/
|   |   |   |-- Home.tsx
|   |   |-- services/
|   |   |-- utils/
|-- hooks/
|   |-- useService.ts
|-- models/
|   |-- User.ts
|-- utils/
|   |-- someUtil.ts
|-- services/
|   |-- someService.ts
|-- App.tsx
|-- index.tsx
```

#### Shared Components

For shared components, the folder structure follows the same category division that Material UI separates on its components page. Please follow their model: [https://ant.design/components/overview/](https://mui.com/material-ui/all-components/).

```
src/
|-- components
|   |-- inputs/
|   |-- |-- Button.tsx
|   |-- data-display/
|   |-- |-- List.tsx
|   |-- |-- Avatar.tsx
|   |-- navigation/
|   |-- |-- Breadcrumb.tsx
...
```
