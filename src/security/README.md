# Security

This module allows you to retrieve the authentication information. 

## Usage

```js
function MyComponent() {
    const { isLoggedin, user, login, logout } = useAuth();

    return (
        <div>
            { isLoggedin && (
                <>
                    { user.displayName + ' is loggedin' }
                    <button onClick={() => login('user', 'password') }>Login</button>
                </>
            ) }
            { ! isLoggedin && (
                <button onClick={() => logout() }>Logout</button>
            ) }
        </div>
    )
}
```