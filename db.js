const getArrayByNItems = (n = 10) => new Array(n).fill(null);

const createNumber = () => {
  const template = getArrayByNItems();
  const filledTemplate = template.map((_, i) => Math.floor(1 + Math.random() * 9));

  return filledTemplate.join('');
};

const createContacts = (n = 10) => {
  return getArrayByNItems(n).map((_, i) => ({
    id: i,
    name: `Contact ${i}`,
    phone: createNumber(),
  }));
};

const users = [
  {
    id: 1,
    firstName: 'FirstName',
    lastName: 'LastName',
    login: 'user',
    password: 'user',
  },
];

const contacts = createContacts();

module.exports = () => ({
  users,
  contacts,
});
