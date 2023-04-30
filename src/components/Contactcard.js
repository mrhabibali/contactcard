import React from "react";
import user from "../images/user.png";

function ContactCard() {
  const [contact, setContact] = React.useState({
    firstName: "Joe",
    lastName: "Doe",
    phone: "+1 (256) 515-1212",
    email: "test@example.com",
    isFavorite: false,
  });

  function toggleFavorite() {
    setContact((prevContact) => ({
      ...prevContact,
      isFavorite: !prevContact.isFavorite,
    }));
  }

  let starIcon = contact.isFavorite
    ? require(`../images/star-filled.png`)
    : require(`../images/star-empty.png`);

  return (
    <div>
      <img src={user} className="contactcard--image" alt="Person"></img>
      <img
        src={starIcon}
        onClick={toggleFavorite}
        className="contactcard--star"
        alt="Star"
      ></img>
      <h2 className="contactcard--name">
        {`${contact.firstName} ${contact.lastName}`}
      </h2>
      <p className="contactcard--phone">{contact.phone}</p>
      <p className="contactcard--email">{contact.email}</p>
    </div>
  );
}

export default ContactCard;
