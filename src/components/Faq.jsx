import React from "react";

const faqs = [
	{
		question: "Why are we doing this?",
		answer:
			"As the world knows, the situation in Ukraine is devastating. People are killed, homeless and without their home land and family. We know as well that all the Ukrainers are cut off from their bank account and don’t have cash to survive. Therefore we need ETH. don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
	},
	{
		question: "What do we want to achieve?",
		answer:
			"Yes, we will make sure your transfers are safe and secure, as well the transfer to the wallet of Ukraine and we make sure all the charity money raised will be transferred with proof of payment. ",
	},
	{
		question: "Is it safe and secure ",
		answer:
			"Yes, we will make sure your transfers are safe and secure, as well the transfer to the wallet of Ukraine and we make sure all the charity money raised will be transferred with proof of payment. ",
	},
	// More questions...
];

const Faq = () => {
  return (
    <div>
      <h2>FAQ</h2>
      <ul>
        {faqs.map((item, index) => (
          <li key={index}>
            <h3>{item.question}</h3>
            <p>
              {item.answer}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Faq;
