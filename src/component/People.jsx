import React from 'react'

function People() {

    var data = [
        {
            "name": "Flavia Black",
            "phone": "1-817-534-5273",
            "email": "cursus.et@aol.ca",
            "country": "Costa Rica"
        },
        {
            "name": "Hop Velez",
            "phone": "(932) 240-4161",
            "email": "mattis@aol.ca",
            "country": "China"
        },
        {
            "name": "Peter Cortez",
            "phone": "(391) 946-3617",
            "email": "nibh.lacinia@yahoo.net",
            "country": "Australia"
        },
        {
            "name": "Wesley Rodriquez",
            "phone": "(212) 551-5616",
            "email": "gravida.aliquam.tincidunt@aol.org",
            "country": "Belgium"
        },
        {
            "name": "Demetrius Wheeler",
            "phone": "1-497-564-6081",
            "email": "velit.aliquam@google.edu",
            "country": "Peru"
        },
        {
            "name": "Demetrius Wheeler",
            "phone": "1-497-564-6081",
            "email": "velit.aliquam@google.edu",
            "country": "Peru"
        },
        {
            "name": "Demetrius Wheeler",
            "phone": "1-497-564-6081",
            "email": "velit.aliquam@google.edu",
            "country": "Peru"
        },
        {
            "name": "Demetrius Wheeler",
            "phone": "1-497-564-6081",
            "email": "velit.aliquam@google.edu",
            "country": "Peru"
        },
        {
            "name": "Demetrius Wheeler",
            "phone": "1-497-564-6081",
            "email": "velit.aliquam@google.edu",
            "country": "Peru"
        }
    ];

    const cardPeople = data.map((people,index)=>(
        <div className='cardPeople'>
            <h1>{people.name}</h1>
            <p>{people.phone}</p>
            <p>{people.email}</p>
            <p>{people.country}</p>
        </div>
    ))
  return (
    <div>
        {cardPeople}
    </div>
  )
}

export default People