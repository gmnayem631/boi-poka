const getStoredBook = () => {
  const storedBookSTR = localStorage.getItem('readList');

  if (storedBookSTR) {
    const storedBookData = JSON.parse(storedBookSTR);
    return storedBookData;
  } else {
    return [];
  }
};

const addToStoredDB = (id) => {
  const storedBookData = getStoredBook();

  if (storedBookData.includes(id)) {
    alert('Book exists already');
  } else {
    storedBookData.push(id);
    localStorage.setItem('readList', JSON.stringify(storedBookData));
    console.log(storedBookData);
  }
};

export { addToStoredDB };
