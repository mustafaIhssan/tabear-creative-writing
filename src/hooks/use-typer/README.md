# useTyper

React hook used to create a typing effect for input placeholders using a list of  words.

## Usage

```js
function MyComponent() {
    useTyper([
        'ipsum',
        'lorem',
        'accusamus',
        'odio',
        'dignissimos'
    ], true);
    
    return <input placeholder={placeholder} />
}
```