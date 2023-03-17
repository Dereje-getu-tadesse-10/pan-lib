# pan-lib

```
$ npm install pan-lib
```

## Documentation

## Clamp 
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

## Capitalize

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
If `string` is empty, an error is thrown with the message "str cannot be null or undefined".

## Chunk 
The chunk function takes in two parameters:
- `array` (required): The array to be chunked.
- `size` (required): The size of the chunked array.
- `return`: The chunked array.

```js
import { chunk } from 'pan-lib';

chunk([1, 2, 3, 4, 5], 2); // returns [[1, 2], [3, 4], [5]]
chunk([1, 2, 3, 4, 5], 3); // returns [[1, 2, 3], [4, 5]]
```

#### Throw
If `size` is less than or equal to 0, an error is thrown with the message "size must be greater than 0".

## Lerp 
`lerp` is a critical function for animations, allowing smooth transitions between two states or values of properties.

The lerp function takes in three parameters:
- `start` (required): The start value.
- `end` (required): The end value.
- `amount` (required): The amount to be lerped.
- `return`: The lerped value.

```js
import { lerp } from 'pan-lib';

lerp(0, 10, 0.5); // returns 5
lerp(0, 10, 0.2); // returns 2
```

#### Throw
If `amount` is less than 0 or greater than 1, an error is thrown with the message "amount must be between 0 and 1".