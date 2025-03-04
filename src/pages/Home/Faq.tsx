
const faqItems = [
  {
    question: "How does the billing work?",
    answer:
      "Springerdata offers a variety of billing options, including monthly and annual subscription plans, as well as pay-as-you-go pricing for certain services. Payment is typically made through a credit card or other secure online payment method.",
  },
  
  {
    question: "How do I cancel my subscription?",
    answer:
      "To cancel your subscription, log in to your account and navigate to the subscription management page. From there, you can cancel your subscription and stop future billing.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Yes, we offer a free trial for a limited time. During the trial, you will have access to a limited set of features, but you will not be charged.",
  },
  {
    question: "How do I contact support?",
    answer:
      "If you need help or have questions, you can contact our support team by submitting a support request through our website or by emailing support@ourwebsite.com.",
  },
  {
    question: "Do you offer any discounts or promotions?",
    answer:
      "We may offer discounts or promotions from time to time. To stay updated, sign up for our newsletter or follow us on social media.",
  },
  {
    question: "Do you offer any discounts or promotions?",
    answer:
      "We may offer discounts or promotions from time to time. To stay updated, sign up for our newsletter or follow us on social media.",
  },
];

const Faq = () => {
  return (
    <div className="relative mb-4 w-full bg-white px-6 pt-10 pb-8 mt-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:px-10">
      <div className="mx-auto px-5">
        <div className="flex flex-col items-center">
          <h2 className="mt-5 text-center text-3xl font-bold tracking-tight md:text-5xl">FAQ</h2>
          <p className="mt-3 text-lg text-neutral-500 md:text-xl">Frequently Asked Questions</p>
        </div>

        <div className="mx-auto mt-8 grid max-w-xl divide-y divide-neutral-200">
          {faqItems.map((item, index) => (
            <div className="py-5" key={index}>
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                  <span>{item.question}</span>
                  <span className="transition-transform duration-200 group-open:rotate-180">
                    <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">{item.answer}</p>
              </details>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
