import React, { useState } from "react";
import data from "./data";
import List from "./List";

function BirthdayReminder() {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        {people.map((item) => (
          <List key={item.id} {...item} />
        ))}
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>
  );
}

export default BirthdayReminder;
