class Contact1 {
    name;
    email;
    phone;
    group;
  
    constructor(name, email, phone ,group) {
      this.name = name;
      this.email = email;
      this.phone = phone;
      this.group = group;
    }
  }
  
  class AddressBook1 {
    contacts = [];
  
    addContact(contact) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(contact.email)) {
        throw new Error("Invalid email format");
      }
  
      // Name validation (example - check for empty name)
      if (!contact.name || contact.name.trim() === "") {
        throw new Error("Name cannot be empty");
      }
  
      // You can add further validations for phone number format, etc.
  
      this.contacts.push(contact);
    }
  
    findContactByName(name) {
      return this.contacts.find((contact) => contact.name === name);
    }
    filterByGroup(group) {
      return this.contacts.filter((contact) => contact.group === group);
    }
  
  
    // New functionalities:
    // 1. Validate various contact properties on addition (already implemented)
    // 2. Search contacts by name (partial match)
  
    searchContacts(searchTerm) {
      const normalizedSearchTerm = searchTerm.toLowerCase();
      return this.contacts.filter((contact) =>
        contact.name.toLowerCase().includes(normalizedSearchTerm)
      );
    }
  
    printContacts() {
      for (const contact of this.contacts) {
        console.log(`Name: ${contact.name}`);
        console.log(`Email: ${contact.email}`);
        console.log(`Phone: ${contact.phone}`);
        console.log("-----");
      }
    }
  }
  
  const addressBook1= new AddressBook1();
  
  const contact11 = new Contact1("John Doe", "johndoe@example.com", "123-456-7890","1");
  const contact21 = new Contact1("Alice Smith", "alice.smith@invalid", "456-789-0123"); // Invalid email
  const contact31 = new Contact1("", "valid@email.com", "789-012-3456"); // Empty name
  
  addressBook1.addContact(contact11);
  
  try {
    addressBook1.addContact(contact21); // This will throw an error (invalid email)
    addressBook1.addContact(contact31); // This will throw an error (empty name)
  } catch (error) {
    console.error("Error adding contact:", error.message);
  }
  
  console.log("Contacts:");
  addressBook1.printContacts();
  
  // Example usage of new search functionality
  const searchResults1 = addressBook1.searchContacts("john");
  console.log("Search results (name containing 'john'):");
  searchResults1.forEach((contact) => console.log(`  - ${contact.name}`));
  console.log(addressBook1.filterByGroup('2'));