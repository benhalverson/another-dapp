import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";

const faqs = [
	{
		question: "Why are we doing this?",
		answer:
			"As the world knows, the situation in Ukraine is devastating. Regular people are being killed, displaced, and homeless while being separated from their loved ones. We know as well that all the Ukrainians are cut off from their bank account and don’t have the necessary cash to survive. The best way to help them get the money they need is by raising ETH from around the world and sending it to these people."
	},
	{
		question: "What do we want to achieve?",
		answer:
			"The goal is to give the people of Ukraine the necessary help they need by raising 1000 ETH (USD$ 2.8MM) to provide food, clothes, a roof above their head, and even to cover costs for them to go to a safe place."
	},
	{
		question: "Is it safe and secure?",
		answer:
			"Yes, your transactions are safe and secure and we will transfer them to the official wallet of Ukraine. We make sure all the charity money raised will be transferred with proof of payment for everyone to see.",
	},
	{
		question: "How does it work?",
		answer:
			"Donations are received in cryptocurrencies such as Ethereum, USDT, and Bitcoin. All proceeds go to the official Ukrainian government and other relevant organizations that help the people."
	},
	{
		question: "What do I get?",
		answer: "In return for your donation, you will get a Stay Strong Ukraine NFT airdropped to the wallet you used for the contribution"
	},
	{
		question: "What you support?",
		answer: "Your donation will be used for many things such as food, shelter, travel costs, government expenses, and much more."
	}
];

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

const FAQ = () => {
	return (
		<div id="faq">
			<div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
				<div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
					<h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">Frequently asked questions</h2>
					<dl className="mt-6 space-y-6 divide-y divide-gray-200">
						{faqs.map((faq) => (
							<Disclosure as="div" key={faq.question} className="pt-6">
								{({ open }) => (
									<>
										<dt className="text-lg">
											<Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
												<span className="font-medium text-gray-900">{faq.question}</span>
												<span className="ml-6 h-7 flex items-center">
													<ChevronDownIcon
														className={classNames(open ? "-rotate-180" : "rotate-0", "h-6 w-6 transform")}
														aria-hidden="true"
													/>
												</span>
											</Disclosure.Button>
										</dt>
										<Disclosure.Panel as="dd" className="mt-2 pr-12">
											<p className="text-base text-gray-500">{faq.answer}</p>
										</Disclosure.Panel>
									</>
								)}
							</Disclosure>
						))}
					</dl>
				</div>
			</div>
		</div>
	);
};

export default FAQ;
