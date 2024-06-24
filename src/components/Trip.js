import "./TripStyles.css";
import TripData from "./TripData";
import HF2 from "../assets/Henry Fischel - 2.jpeg";
import AM2 from "../assets/Antonio Meucci - 2.jpeg";
import RB3 from "../assets/Ralph Baer - 2.jpeg";
import garbage from "../assets/Charles Babbage - 1.jpeg";

function Trip() {
  return (
    <div className="trip">
      <h1>More Inventors</h1>
      <p></p>
      <div className="tripcard">
        <TripData
          image={HF2}
          heading="Henry Fischel"
          text="The idea of exams was developed in the 19th century by Henry Fischel, a philanthropist and businessman, according to historical accounts. He devised tests to assess students' general topic knowledge as well as their ability to apply that information."
        />

        <TripData
          image={AM2}
          heading="Antonio Meucci"
          text="Meucci is best known for developing a voice-communication apparatus that several sources credit as the first telephone."
        />

        <TripData
          image={RB3}
          heading="Ralph Baer"
          text="Engineer Ralph Baer, a pioneer in the field of interactive video games, invented what became known as the Magnavox Odyssey Home Video Game System. In 2004, the video game industry accounted for more than $8 billion in sales, with sales of $15 billion projected for 2010."
        />

        <TripData
          image={garbage}
          heading="Charles Babbage"
          text="English mathematician and inventor Charles Babbage is credited with having conceived the first automatic digital computer. During the mid-1830s Babbage developed plans for the Analytical Engine. Although it was never completed, the Analytical Engine would have had most of the basic elements of the present-day computer."
        />
      </div>
    </div>
  );
}

export default Trip;
