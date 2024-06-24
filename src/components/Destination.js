import thomas1 from "../assets/Thomas Edison - 2.jpeg";
import thomas2 from "../assets/Thomas Edison - 3.jpeg";
import ch1 from "../assets/CH1.jpg";
import ch2 from "../assets/ch2.jpg";
import gulilio from "../assets/gulilio.jpg";
import gulilio2 from "../assets/gulilio2.jpg";
import bc1 from "../assets/BC1.jpg";
import bc2 from "../assets/BC2.jpg";
import cav1 from "../assets/CAV1.jpg";
import cav2 from "../assets/cav2.jpg";
import isaac1 from "../assets/isaac1.jpg";
import isaac2 from "../assets/isaac2.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Innovators</h1>
      {/* <p>(Working On)</p> */}
      <br />
      <br />
      <br />

      <h1> 16th Century </h1>

      <DestinationData
        className="first-des"
        heading="Zacharias Janssen
      "
        text="Zacharias Janssen was a Dutch spectacle-maker who lived most of his life in Middelburg. He is
        associated with the invention of the first optical telescope and/or the first truly compound
        microscope, but these claims may be fabrications put forward by his son. Janssen was the son of a
        spectacle maker named Hans Janssen, and while Zacharias is credited with inventing the compound
        microscope, most historians surmise that his father must have played a vital role, since Zacharias
        was still in his teens in the 1590s. Every major field of science has benefited from the use of some
        form of microscope, an invention that dates back to the late 16th century and a modest Dutch
        eyeglass maker named Zacharias Janssen."
        img1={thomas1}
        img2={thomas2}
      />

      <DestinationData
        className="first-des-reverse"
        heading="Galileo
      "
        text="Galileo Galilei (1564–1642) has always played a key role in any history of science, as well as many histories of philosophy. He is a central figure of the Scientific Revolution of the seventeenth century. His work in physics (or “natural philosophy”), astronomy, and the methodology of science still evoke debate after more than 400 years."
        img1={gulilio}
        img2={gulilio2}
      />

      <h1> 17th Century </h1>

      <DestinationData
        className="first-des"
        heading="Isaac Newton"
        text="Sir Isaac Newton was born on 4th January 1643 in a small village of England called Woolsthorpe-by-Colsterworth. He was an English physicist and mathematician, and one of the important thinkers in the Scientific Revolution.

      He discovered the phenomenon of white light integrated with colours which further laid the foundation of modern physical optics. His famous three laws of Motion in mechanics and the formulation of the laws of gravitation completely changed the track of physics across the globe. He was the originator of calculus in mathematics. A scientist like him is considered an excellent gift by nature to the world of physics."
        img1={isaac1}
        img2={isaac2}
      />

      <DestinationData
        className="first-des-reverse"
        heading="Christian Huygens"
        text="Christiaan Huygens was a Dutch mathematician, physicist, engineer, astronomer, and inventor who is regarded as a key figure in the Scientific Revolution.0 He was born on April 14, 1629, in The Hague and died on July 8, 1695, in The Hague. Huygens is credited as the first theoretical physicist to use formulae in physics.2 He formulated the wave theory of light, discovered the true shape of the rings of Saturn, and made original contributions to the science of dynamics. He also discovered the pendulum clock, centrifugal force, and the true shape of Saturn's rings. Huygens improved the design of telescopes and invented the pendulum clock, which was the most accurate timekeeper for almost 300 years."
        img1={ch1}
        img2={ch2}
      />

      <h1> 18th Century </h1>
      <DestinationData
        className="first-des"
        heading="Bartolomeo Cristofori"
        text="Bartolomeo Cristofori was an Italian harpsichord maker born on May 4, 1655, in Padua, Republic of Venice, and died on January 27, 1731, in Florence. He is generally credited with inventing the piano, also known as gravicembalo col piano e forte, or harpsichord that plays soft and loud. Cristofori achieved this effect by replacing the plucking mechanism of the harpsichord with a hammer action capable of striking the strings with greater or lesser force. He was appointed in 1688 to the Florentine court of Grand Prince Ferdinando de’ Medici to care for its harpsichords and eventually for its entire collection of musical instruments. A 1700 inventory of Medici instruments mentions an arpicimbalo, an instrument resembling a harpsichord, newly invented by Bartolomeo Cristofori, with hammers and dampers, two keyboards, and a range of four octaves, C–c.The instrument was soon called a pianoforte, and it was the direct ancestor of the modern"
        img1={bc1}
        img2={bc2}
      />

      {/* <DestinationData
        className="first-des-reserve"
        heading="Englishmen John Shore"
        text="For the British official of the East India Company, see John Shore, 1st Baron Teignmouth.
      John Shore (c. 1662 – 1752) was an English trumpeter and lutenist. He invented the tuning fork in 1711. Shore came from a family of musicians including the singer Catherine Shore. He was Sergeant Trumpeter to the court. He is credited with demonstrating that the trumpet which up till then had been a military instrument could be used in an orchestral role. Shore had parts specifically written for him by both George Frideric Handel and Henry Purcell. 
      "
        img1={bc1}
        img2={bc2}
      /> */}

      <h1> 19th Century </h1>

      <DestinationData
        className="first-des-reverse"
        heading="Count Alessandro Volta"
        text="Alessandro Volta, in full Conte Alessandro Giuseppe Antonio Anastasio Volta, (born February 18, 1745, Como, Lombardy [Italy]—died March 5, 1827, Como), Italian physicist whose invention of the electric battery provided the first source of continuous current."
        img1={cav1}
        img2={cav2}
      />
      {/* <DestinationData
        className="first-des-reverse"
        heading="CV Raman
      "
        text="C.V. Raman was an Indian physicist who won the Nobel Prize for Physics in 1930 for his discovery of what became known as the Raman effect. He significantly influenced the growth of science in India through his teaching, his support of nearly every Indian research institution of his time, and his founding of the Indian Academy of Sciences.
        "
        img1={rv1}
        img2={rv2}
      /> */}

      {/* <DestinationData
        className="first-des"
        heading="Benjamin Franklin
      "
        text="Franklin was not only the most famous American in the 18th century but also one of the most famous figures in the Western world of the 18th century; indeed, he is one of the most celebrated and influential Americans who has ever lived. Although one is apt to think of Franklin exclusively as an inventor, as an early version of Thomas Edison, which he was, his 18th-century fame came not simply from his many inventions but, more important, from his fundamental contributions to the science of electricity. If there had been a Nobel Prize for Physics in the 18th century, Franklin would have been a contender. "
        img1={bf1}
        img2={bf2}
      /> */}
    </div>
  );
};

export default Destination;

// century whise
