// CREATE operation
// localStorage.setItem(key, value) - Stores data in the localStorage. 
// "key" is a unique identifier used to retrieve the item later, and "value" is the data to be stored.
localStorage.setItem('demoKey', 'Demo value');

// READ operation
// localStorage.getItem(key) - Retrieves data from localStorage. 
// "key" is the identifier used when the data was stored. If the key doesn't exist, null is returned.
const value = localStorage.getItem('demoKey');
// Logs the retrieved value to the console. In this case, it should log 'Demo value'.
console.log('Value:', value);

// UPDATE operation
// localStorage.setItem(key, value) - Updates the value of an item in localStorage. 
// If the key exists, its value is updated to the new value provided. Here, 'demoKey' is updated.
localStorage.setItem('demoKey', 'Updated demo value');
// Retrieves and logs the updated value from localStorage. Should log 'Updated demo value'.
console.log('Updated Value:', localStorage.getItem('demoKey'));

// DELETE operation
// localStorage.removeItem(key) - Removes the item from localStorage based on its key.
localStorage.removeItem('demoKey');
// Attempting to retrieve the item after deletion. Should log 'null' as the item no longer exists.
console.log('Item deleted, check:', localStorage.getItem('demoKey'));
