// CREATE operation
// sessionStorage.setItem(key, value) - Stores data in the sessionStorage for the duration of the page session.
// "key" is a unique identifier used to retrieve the item later, and "value" is the data to be stored.
sessionStorage.setItem('sessionKey', 'Session value');

// READ operation
// sessionStorage.getItem(key) - Retrieves data from sessionStorage.
// "key" is the identifier used when the data was stored. If the key doesn't exist, null is returned.
const sessionValue = sessionStorage.getItem('sessionKey');
// Logs the retrieved value to the console. In this case, it should log 'Session value'.
console.log('Session Value:', sessionValue);

// UPDATE operation
// sessionStorage.setItem(key, value) - Updates the value of an item in sessionStorage.
// If the key exists, its value is updated to the new value provided. Here, 'sessionKey' is updated.
sessionStorage.setItem('sessionKey', 'Updated session value');
// Retrieves and logs the updated value from sessionStorage. Should log 'Updated session value'.
console.log('Updated Session Value:', sessionStorage.getItem('sessionKey'));

// DELETE operation
// sessionStorage.removeItem(key) - Removes the item from sessionStorage based on its key.
sessionStorage.removeItem('sessionKey');
// Attempting to retrieve the item after deletion. Should log 'null' as the item no longer exists.
console.log('Session item deleted, check:', sessionStorage.getItem('sessionKey'));
