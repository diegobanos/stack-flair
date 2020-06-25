# stack-flair
A StackExchange flair react component

## Installation

```
npm i stack-flair
```

```
...

import StackFlair from "stack-flair"

...

<StackFlair
  id="5803509"
  userName="diegowc"
/>
    
...
```

## Options

 - id: Your StackExchange (or StackOverflow) user id
 - userName: Your StackExchange (or StackOverflow) user name
 - className (Optional): The wrapper class. Defaults to "stack-flair-wrapper"
 - combined: (Optional): If true, use StackExchange global flair. If false, use only StackOverflow flair. Default to false
 - height (Optional): Flair height. Defaults to 58
 - theme (Optional): Flair theme. Defaults to 'default'. Available: 'default', 'dark', 'clean', 'hotdog'
 - width (Optional): Flair width. Defaults to 208
