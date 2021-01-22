# API

This module offers two main hooks to communicate with the API (abstracted over react-query).

## useFetch

This is the hook to be used to retrieve data from the backend.

### Usage

```js
function MyComponent() {
	const { storeBaseApi } = useAuth()
	const { isLoading, data } = useFetch({
		url: `${storeBaseApi}/products`,
	})

    return (
        <div>
            { isLoading && 'isLoading' }
            { ! isLoading && ( data.length + ' products retrieved.' ) }
        </div>
    )
}
```

## useMutation

This is the hook to be used to mutate data on the backend (perform put or post requests).

### Usage

```js
function MyComponent() {
    const { store } = useAuth()
    // See react-query documentation for all the properties of mutations.
	const mutation = useMutation({
		url: `/my-store/wp-json/wc/v3/product`,
    })
    
    const createProduct = async () => {
        const myProduct = { title: 'something' }
        await mutation.asyncMutate(myProduct)
    }

    return (
        <div>
            <button onClick={() => createProduct()}>Create</button>
        </div>
    )
}
```
