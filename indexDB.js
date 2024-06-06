// Open or create an IndexedDB database named 'demoDB' with version 1.
const request = indexedDB.open('demoDB', 1);

// Event handler triggered if the database needs to be created or upgraded.
request.onupgradeneeded = function(event) {
    // Access the database from the event target's result.
    const db = event.target.result;
    
    // Check if the 'items' object store does not already exist.
    if (!db.objectStoreNames.contains('items')) {
        // Create a new object store called 'items' with 'id' as the key path for unique identifiers.
        db.createObjectStore('items', { keyPath: 'id' });
    } else {
        // Log to the console if the object store already exists.
        console.log("Object store 'items' already exists.");
    }
};

// Event handler for handling errors during the open request.
request.onerror = function(event) {
    // Log any errors encountered during the open request.
    console.error('Database error:', event.target.errorCode);
};

// Event handler when the database has been opened successfully.
request.onsuccess = function(event) {
    // Access the database from the event target's result.
    let db = event.target.result;
    // Flag to indicate the database is ready (assuming dbReady is declared globally or higher up in your script).
    dbReady = true;

    // Initiate a transaction to perform database operations with readwrite permissions.
    let transaction = db.transaction(['items'], 'readwrite');
    // Access the 'items' object store from the transaction.
    let store = transaction.objectStore('items');
    // Add an item with id: 1 and data: 'Demo item' to the store.
    store.add({ id: 1, data: 'Demo item' });

    // Start a new transaction to read data from the database.
    transaction = db.transaction(['items'], 'readonly');
    // Access the 'items' object store for reading.
    store = transaction.objectStore('items');
    // Get the item by its key (id: 1).
    let getRequest = store.get(1);
    // When the get request succeeds, log the retrieved item.
    getRequest.onsuccess = function() {
        console.log('Item:', getRequest.result);
    };

    // Initiate another transaction for updating data with readwrite permissions.
    transaction = db.transaction(['items'], 'readwrite');
    // Access the 'items' object store.
    store = transaction.objectStore('items');
    // Update the item with id: 1 and a new data value.
    let updateRequest = store.put({ id: 1, data: 'Updated demo item' });
    // When the update request succeeds, log a confirmation message.
    updateRequest.onsuccess = function() {
        console.log('Item updated.');
    };

    // Start yet another transaction to delete data with readwrite permissions.
    transaction = db.transaction(['items'], 'readwrite');
    // Access the 'items' object store.
    store = transaction.objectStore('items');
    // Delete the item with id: 1.
    let deleteRequest = store.delete(1);
    // When the delete request succeeds, log a confirmation message.
    deleteRequest.onsuccess = function() {
        console.log('Item deleted.');
    };
};
