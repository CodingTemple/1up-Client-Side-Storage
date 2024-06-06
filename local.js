// CREATE operation
localStorage.setItem('demoKey', 'Demo value');

// READ operation
const value = localStorage.getItem('demoKey');
console.log('Value:', value);

// UPDATE operation
localStorage.setItem('demoKey', 'Updated demo value');
console.log('Updated Value:', localStorage.getItem('demoKey'));

// DELETE operation
localStorage.removeItem('demoKey');
console.log('Item deleted, check:', localStorage.getItem('demoKey'));
