
const Contact = () => {
  return (
    <section className="bg-gray-50 " id="contact">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-4 text-center">
          <p className="text-base font-semibold uppercase tracking-wide text-orange-400">
            Contact
          </p>
          <h2 className="font-heading mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Get in Touch
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600">
            In hac habitasse platea dictumst
          </p>
        </div>

        <div className="flex items-stretch justify-center">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="h-full pr-6">
              <p className="mt-3 mb-12 text-lg text-gray-600 ">
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis nec ipsum orci. Ut scelerisque sagittis ante, ac tincidunt sem venenatis ut.
              </p>
              <ul className="mb-6 space-y-6">
                {contactInfo.map((item, index) => (
                  <li key={index} className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-orange-400 text-gray-50">
                      {item.icon}
                    </div>
                    <div className="ml-4">
                      <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900">
                        {item.title}
                      </h3>
                      {item.details.map((detail, i) => (
                        <p key={i} className="text-gray-600 ">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
              <h2 className="mb-4 text-2xl font-bold">Ready to Get Started?</h2>
              <form action="https://fabform.io/f/xxxxx" method="post">
                <div className="mb-6 space-y-4">
                  <input type="text" id="name" name="name" placeholder="Your name" className="w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md " />
                  <input type="email" id="email" name="email" placeholder="Your email address" className="w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md " />
                  <textarea id="textarea" name="textarea" rows={5} placeholder="Write your message..." className="w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md "></textarea>
                </div>
                <div className="text-center">
                  <button type="submit" className="w-full bg-orange-600 text-white px-6 py-3 font-xl rounded-md">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const contactInfo = [
  {
    title: "Our Address",
    details: ["1230 Maecenas Street Donec Road", "New York, EEUU"],
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" /></svg>
  },
  {
    title: "Contact",
    details: ["Mobile: +1 (123) 456-7890", "Mail: tailnext@gmail.com"],
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" /><path d="M15 7a2 2 0 0 1 2 2" /><path d="M15 3a6 6 0 0 1 6 6" /></svg>
  },
  {
    title: "Working hours",
    details: ["Monday - Friday: 08:00 - 17:00", "Saturday & Sunday: 08:00 - 12:00"],
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 7v5l3 3" /></svg>
  }
];

export default Contact;
