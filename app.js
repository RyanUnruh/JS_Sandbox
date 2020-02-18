class User  {
  constructor(name) {
    this.name;
    this.email;
    this.phone;
  }

  sayMyName() {
    console.log(this.name);
  }

  setEmail(email) {
    this.email = email;
  }
}

const mike = new User('mike');
const mike.email = 'mike@me.com';

console.log(mike);