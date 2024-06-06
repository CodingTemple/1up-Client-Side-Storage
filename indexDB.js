// Open or create an IndexedDB database named 'demoDB'
const request = indexedDB.open('demoDB', 1);

request.onupgradeneeded = function(event) {
    let db = event.target.result;
    db.createObjectStore('items', { keyPath: 'id' });
};

request.onerror = function(event) {
    console.error('Database error:', event.target.errorCode);
};

request.onsuccess = function(event) {
    let db = event.target.result;
    dbReady=true;

    
    // CREATE operation
    let transaction = db.transaction(['items'], 'readwrite');
    let store = transaction.objectStore('items');
    store.add({ id: 1, data: 'Demo item' });

    // READ operation
    transaction = db.transaction(['items'], 'readonly');
    store = transaction.objectStore('items');
    let getRequest = store.get(1);
    getRequest.onsuccess = function() {
        console.log('Item:', getRequest.result);
    };

    // UPDATE operation
    transaction = db.transaction(['items'], 'readwrite');
    store = transaction.objectStore('items');
    let updateRequest = store.put({ id: 1, data: 'Updated demo item' });
    updateRequest.onsuccess = function() {
        console.log('Item updated.');
    };

    // DELETE operation
    transaction = db.transaction(['items'], 'readwrite');
    store = transaction.objectStore('items');
    let deleteRequest = store.delete(1);
    deleteRequest.onsuccess = function() {
        console.log('Item deleted.');
    };
};
