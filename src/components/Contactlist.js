import React from "react";

import ContactCard from "./ContactCard";

const Contactlist = (props) => {
    const renderList =props.contact.map((contact)=>{
        return(
           <ContactCard contact={contact} />
        )
     })
return <div className="ui  list">{renderList}</div>


}

export default Contactlist