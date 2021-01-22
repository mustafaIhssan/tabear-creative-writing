# useInterval

React hook on top of setInterval

## Usage

```js
function MyComponent() {
    useInterval(() => {
        console.log('tick')
    }, 1000)

    return 'Something';
}
```