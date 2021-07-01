import React, { useEffect } from "react";

import lettermark from "../Images/Lettermark.png";
import lettermarkHover from "../Images/Lettermark_hover.png";
import woodmark from "../Images/Woodmark.png";
import woodmarkHover from "../Images/Woodmark_hover.png";
import pictorial from "../Images/Pictorial.png";
import pictorialHover from "../Images/Pictorial_hover.png";
import abstract from "../Images/Abstract.png";
import abstractHover from "../Images/Abstract_hover.png";
import mascot from "../Images/Mascot.png";
import mascotHover from "../Images/Mascot_hover.png";
import combination from "../Images/Combination.png";
import combinationHover from "../Images/Combination_hover.png";

import HBO from "../Images/hbo.jpeg";
import IBM from "../Images/ibm.png";
import NASA from "../Images/nasa.jpeg";
import Visa from "../Images/visa.png";
import Cocacola from "../Images/coco-cola.jpeg";
import Google from "../Images/google.jpeg";
import Apple from "../Images/apple.png";
import Twitter from "../Images/twitter.jpeg";
import Target from "../Images/target.png";
import BP from "../Images/bp.png";
import Pepsi from "../Images/pepsi.png";
import Adidas from "../Images/adidas.jpeg";
import Koolaid from "../Images/koolaid.png";
import KFC from "../Images/kfc.png";
import MrPeanut from "../Images/mrpeanut.jpeg";
import Doritos from "../Images/doritos.png";
import BurgerKing from "../Images/burgerking.png";
import Lacoste from "../Images/lacoste.png";

import "./Tabs.css";

const Tab = () => {
  const [currentTab, setCurrentTab] = React.useState(1);
  const [tabInfo, setTabInfo] = React.useState("");
  const [tabTitle, setTabTitle] = React.useState("");
  const [tabImages, setTabImages] = React.useState([0]);
  const [onHover, setOnHover] = React.useState("");

  const [tabAtt] = React.useState([
    {
      key: 1,
      icon: lettermark,
      iconHover: lettermarkHover,
      title: "Lettermark Logos",
      info: (
        <p>
          A Monogram or lettermark is a typography-based logo that’s comprised
          of a few letters, usually a company’s initials. The lettermark is all
          about simplicity. <br />
          <br />
          By utilizing just a few letters lettermark logos are effective at
          streamlining any company brand if they have a long name.",
        </p>
      ),
      images: [HBO, IBM, NASA],
    },
    {
      key: 2,
      icon: woodmark,
      iconHover: woodmarkHover,
      title: "Wordmark Logos",
      info: (
        <p>
          Similar to a lettermark, a wordmark or logotype is a font-based logo
          that focuses on a business’ name alone. Think Visa and Coca-Cola.
          Wordmark logos work really well when a company has a succinct and
          distinct name. Google’s logo is a great example of this. The name
          itself is catchy and memorable so, when combined with strong
          typography, the logo helps create strong brand recognition.
        </p>
      ),
      images: [Visa, Cocacola, Google],
    },
    {
      key: 3,
      icon: pictorial,
      iconHover: pictorialHover,
      title: "Pictorial Mark Logos",
      info: (
        <p>
          A pictorial mark (sometimes called brand mark or logo symbol) is an
          icon—or graphic-based logo. It’s probably the image that comes to mind
          when you think “logo”: the iconic Apple logo, the Twitter bird, the
          Target bullseye. Each of these companies’ logos is so emblematic, and
          each brand so established, that the mark alone is instantly
          recognizable. <br />
          <br />A true brand mark is only an image. Because of this, it can be a
          tricky logo type for new companies, or those without strong brand
          recognition, to use
        </p>
      ),
      images: [Apple, Twitter, Target],
    },
    {
      key: 4,
      icon: abstract,
      iconHover: abstractHover,
      title: "Abstract Mark Logos",
      info: (
        <p>
          An abstract mark is a specific type of pictorial logo. Instead of
          being a recognizable image—like an apple or a bird—it’s an abstract
          geometric form that represents your business. A few famous examples
          include the BP starburst-y logo, the Pepsi divided circle and the
          strip-y Adidas flower. <br />
          <br />
          Like all logo symbols, abstract marks work really well because they
          condense your brand into a single image. However, instead of being
          restricted to a picture of something recognizable, abstract logos
          allow you to create something truly unique to represent your brand.
        </p>
      ),
      images: [BP, Pepsi, Adidas],
    },
    {
      key: 5,
      icon: mascot,
      iconHover: mascotHover,
      title: "Mascot Logos",
      info: (
        <p>
          Mascot logos are logos that involve an illustrated character. Often
          colorful, sometimes cartoonish, and most always fun, the mascot logo
          is a great way to create your very own brand spokesperson
          <br />
          <br />A mascot is simply an illustrated character that represents your
          company. Think of them as the ambassador for your business. Famous
          mascots include the Kool-Aid Man, KFC’s Colonel and PUB’s cute Water
          Wally.&nbsp;
        </p>
      ),
      images: [Koolaid, KFC, MrPeanut],
    },
    {
      key: 6,
      icon: combination,
      iconHover: combinationHover,
      title: "Combination Logos",
      info: (
        <p>
          A combination mark is a logo comprised of a combined wordmark or
          lettermark and a pictorial mark, abstract mark, or mascot. The picture
          and text can be laid out side-by-side, stacked on top of each other,
          or integrated together to create an image.&nbsp;
          <br />
          <br />
          Because a name is associated with the image, a combination mark is a
          versatile choice, with both the text and icon or mascot working
          together to reinforce your brand.
        </p>
      ),
      images: [Doritos, BurgerKing, Lacoste],
    },
  ]);

  const checkCurrentTab = (index) => {
    setCurrentTab(index);
  };

  useEffect(() => {
    tabAtt.map((i) => {
      if (currentTab === i.key) {
        setTabInfo(i.info);
        setTabTitle(i.title);
        setTabImages(i.images);
      }
    });
    return () => {
      setCurrentTab(1);
    };
  }, []);

  return (
    <div className="container">
      <div className="tabSection">
        <div className="titleText">
          <button className="contactButton">Contact Us</button>
          <h4
            style={{
              color: "yellow",
              fontSize: "17px",
              textTransform: "uppercase",
            }}
          >
            &bull; How do I know which logo style is right for me?
          </h4>
          <h1 style={{ color: "white", fontSize: "45px" }}>
            Different Types of Logo Styles
          </h1>
        </div>

        <div className="Tabs">
          {tabAtt.map((i) => {
            return currentTab === i.key ? (
              <button
                className="selectedTab"
                onClick={() => {
                  checkCurrentTab(i.key);
                  setTabInfo(i.info);
                  setTabTitle(i.title);
                  setTabImages(i.images);
                }}
              >
                <div>
                  <img src={i.iconHover} alt="icon" width="72" height="72" />
                </div>
                <h5
                  style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    // letterSpacing: "0.",
                    lineHeight: "30px",
                  }}
                >
                  {i.title}
                </h5>
              </button>
            ) : (
              <button
                className="unselectedTab"
                onClick={() => {
                  checkCurrentTab(i.key);
                  setTabInfo(i.info);
                  setTabTitle(i.title);
                  setTabImages(i.images);
                }}
                onMouseOver={() => setOnHover(i.key)}
                onMouseOut={() => setOnHover("")}
              >
                <div>
                  {onHover === i.key ? (
                    <img src={i.iconHover} alt="icon" width="64" height="72" />
                  ) : (
                    <img src={i.icon} alt="icon" width="64" height="72" />
                  )}
                </div>
                <h5
                  style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    // letterSpacing: "0.",
                    lineHeight: "30px",
                  }}
                >
                  {i.title}
                </h5>
              </button>
            );
          })}
        </div>
      </div>
      <div className="tabDescription">
        <div className="tabInfo">
          <h1>{tabTitle}</h1>
          {tabInfo}
        </div>
        <div className="tabImages">
          {tabImages.map((i) => {
            return <img src={i} alt={i} width="170" height="150" />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Tab;
