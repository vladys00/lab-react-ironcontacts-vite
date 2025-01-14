import { useState } from "react";
import "./App.css";
import contactsData from "./contacts.json";
function App() {
  const firstFiveContacts = contactsData.slice(0, 5);
  const [contacts, setContacts] = useState(firstFiveContacts);

  // const remainingContacts = contactsData.filter(
  //   (contact) => !contacts.some((selected) => selected.id === contact.id)
  // );

  const addRandomContact = () =>{
    const remainingContacts = contactsData.filter(
      (contact) => !contacts.some((selected) => selected.id === contact.id)
    );
    const randomIndex = Math.floor(Math.random() * remainingContacts.length);

    setContacts([...contacts, remainingContacts[randomIndex] ])
  }



  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button onClick={() => addRandomContact()} style={{marginBottom: "35px", marginRight: "15px"}}>Add Random Contact</button>
      <button style={{marginBottom: "35px", marginRight: "15px"}}>Sort by popularity</button>
      <button style={{marginBottom: "35px", marginRight: "15px"}}>Sort by name</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => {
            return (
              <tr key={contact.id}>
                <td>
                  <img
                    src={contact.pictureUrl}
                    alt="picture"
                    style={{ width: "150px", height: "220px" }}
                  />
                </td>
                <td>{contact.name}</td>
                <td>{Math.round(contact.popularity)}</td>
                <td>{contact.wonOscar && <h2>🏆</h2>}</td>
                <td>{contact.wonEmmy && <h2>🌟</h2>}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
