const preRegisted = ['Phumlani', 'Emmanuel'];
const newlyRegisted = ['Nosisa', 'Zamajobe'];

// merging two arrays
const complete = [...preRegisted, ...newlyRegisted];

console.log(complete);

const ticket = {
  name: 'Simbonge',
  price: 2000,
};

const updatedTicket = {
  ...ticket,
  price: 250,
};

console.log(updatedTicket);
