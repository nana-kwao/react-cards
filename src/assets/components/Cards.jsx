
const Cards = () => {
  const cardsData = [
    {
      img: "daily.jpeg",
      heading: "Daily Plan",
      desc: "Stay connected all day with our affordable daily data bundle.",
      newprice: 1.99,
      oldprice: 2.49,
      offers: [
        "500MB Data",
        "Valid for 24 hours",
        "Free access to WhatsApp & Twitter",
        "Auto-renew available",
      ],
    },
    {
      img: "weekly.jpeg",
      heading: "Weekly Plan",
      desc: "Perfect for moderate users who need reliable data through the week.",
      newprice: 6.99,
      oldprice: 8.99,
      offers: [
        "2.5GB Data",
        "Valid for 7 days",
        "Bonus 500MB for night browsing",
        "No throttling or speed caps",
      ],
    },
    {
      img: "monthly.jpeg",
      heading: "Monthly Plan",
      desc: "Heavy user? Get more value with our best-selling monthly bundle.",
      newprice: 19.99,
      oldprice: 24.99,
      offers: [
        "10GB Data",
        "Valid for 30 days",
        "100 mins free local calls",
        "Free access to YouTube (2am–6am)",
      ],
    },
  ];

  return (
    <>
      <div className="card-container">
        {cardsData.map((card, index) => (
          <div className="cards" key={index}>
            <img src={card.img} alt={card.desc} />
            <div className="desc-wrapper">
              <h2>{card.heading}</h2>
              <p className="cards-desc">{card.desc}</p>
              <p>
                <span className="newprice">${card.newprice}</span>{" "}
                <span className="oldprice">${card.oldprice}</span>
              </p>
              <ul>
                {card.offers.map((offer, index) => (
                  <li key={index}>{offer}</li>
                ))}
              </ul>
            </div>
            <button type="button">Buy Now</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cards;
