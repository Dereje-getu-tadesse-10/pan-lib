# pan-lib

```
$ npm install pan-lib
```

## Documentation

Function: Clamp a number between a minimum and maximum
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

### Throw
If `min` is greater than `max`, an error is thrown with the message "min must be less than or equal to max".