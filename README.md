API client for https://github.com/shelf-mate/backend

# Installation
To install the package from the github package registry add a .npmrc file in the project you want to install it on with the following contents (you can also see it in .npmrc.example):

```
//npm.pkg.github.com/:_authToken=<YOUR_GITHUB_PERSONAL_ACCESSTOKEN>
@shelf-mate:registry=https://npm.pkg.github.com
```

Then you can just install via `npm install @shelf-mate/api-client-ts`

# Usage

To use the API client first initialize it with: 
```typescript
import {init} from "@shelf-mate/api-client-ts"

init({baseURL: "<BACKEND_BASE_URL>"}); // and any additional axios configs you might need
```

Then you can use the calls by just importing them via: 
```typescript
import { getProducts } from "@shelf-mate/api-client-ts"

const prods = getProducts();
```

# Publishing changes
Create a `.npmrc` file as described in Installation in the folder of this repo and just run `npm publish` (Note that you need to increase the version number)
