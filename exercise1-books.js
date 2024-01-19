const user = { name: 'Nick', id: 7 };

const book1 = { title: 'The Catcher in the Rye', author: 'J.D Salinger', isbn: '0316769487', category: 'Classic Literature' };
const book2 = { title: 'To Kill a Mockingbird', author: 'Harper Lee', isbn: '0446310786', category: 'Classic Literature' };

user.borrowedBooks = [book1, book2];

console.log(user);

const book3 = { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', isbn: '9780743273565', category: 'Classic Literature' };
const book4 = { title: 'The Grapes of Wrath', author: 'John Steinbeck', isbn: '9780143039433', category: 'Classic Literature' };

user["borrowedBooks"].push(book3, book4)

console.log(user.borrowedBooks);

