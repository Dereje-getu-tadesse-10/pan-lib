# pan-lib

```
$ npm install pan-lib
```

## Documentation

### Clamp 
The clamp function takes in three parameters:

- `min` (required): The minimum value that the number parameter can take.
- `max` (required): The maximum value that the number parameter can take.
- `value` (required): The number to be clamped.
- `return`: The clamped number.

```js
import { clamp } from 'pan-lib';

clamp(1, 1, 2); // returns 1
clamp(0, 1, 2); // returns 1
clamp(3, 1, 2); // returns 2

clamp(5, 1, 1) // Error : min must be less than or equal to max
```

#### Throw
If `min` is greater than `max`, an error is thrown with the message "min must be less than or equal to max".

### Capitalize first letter of a string

Function: Capitalize the first letter of a string
The capitalize function takes in one parameter:
- `string` (required): The string to be capitalized.
- `return`: The capitalized string.

```js
import { capitalize } from 'pan-lib';

capitalize('hello world'); // returns 'Hello world'
capitalize('Hello'); // returns 'Hello'
```
#### Throw
if `srting` is empty, an error is thrown with the message "string must not be empty".

### Truncate 
The truncate function takes in two parameters:
- `string` (required): The string to be truncated.
- `length` (required): The length of the truncated string.
- `suffix` (optional): The suffix to be added to the truncated string.
- `return`: The truncated string.

```js
import { truncate } from 'pan-lib';

truncate('hello world', 5); // returns 'hello...'
truncate('hello world', 5, '!!!'); // returns 'hello!!!'
```

#### Throw
If `string` is empty, an error is thrown with the message "string must not be empty".


