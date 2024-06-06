// CREATE operation
sessionStorage.setItem('sessionKey', 'Session value');

// READ operation
const sessionValue = sessionStorage.getItem('sessionKey');
console.log('Session Value:', sessionValue);

// UPDATE operation
sessionStorage.setItem('sessionKey', 'Updated session value');
console.log('Updated Session Value:', sessionStorage.getItem('sessionKey'));

// DELETE operation
sessionStorage.removeItem('sessionKey');
console.log('Session item deleted, check:', sessionStorage.getItem('sessionKey'));
