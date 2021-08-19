import data from "./data";
import Question from "./Question";

const AccordionApp = () => {
  return (
    <main>
      <div className="container">
        <h3>questions and answers</h3>
        <section className="info">
          {data.map((item) => (
            <Question key={item.id} {...item} />
          ))}
        </section>
      </div>
    </main>
  );
};

export default AccordionApp;
