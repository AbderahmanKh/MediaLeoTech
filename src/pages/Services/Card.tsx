import React from "react";

interface Feature {
  title: string;
  description: string;
}

const features: Feature[] = [
  { title: "Invite team members", description: "Rerum repellat labore necessitatibus reprehenderit molestiae praesentium." },
  { title: "List view", description: "Corporis asperiores ea nulla temporibus asperiores non tempore assumenda aut." },
  { title: "Keyboard shortcuts", description: "In sit qui aliquid deleniti et. Ad nobis sunt omnis. Quo sapiente dicta laboriosam." },
  { title: "Calendars", description: "Sed rerum sunt dignissimos ullam. Iusto iure occaecati voluptate eligendi fugiat sequi." },
  { title: "Notifications", description: "Quos inventore harum enim nesciunt. Aut repellat rerum omnis adipisci." },
  { title: "Boards", description: "Quae sit sunt excepturi fugit veniam voluptatem ipsum commodi." },
  { title: "Reporting", description: "Eos laudantium repellat sed architecto earum unde incidunt. Illum sit dolores voluptatem." },
  { title: "Mobile app", description: "Nulla est saepe accusamus nostrum est est. Fugit voluptatum omnis quidem voluptatem." },
];

const Cards: React.FC = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div>
            <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">
              Everything you need
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              All-in-one platform
            </p>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
            </p>
          </div>

          <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
            {features.map((feature, index) => (
              <div key={index} className="relative pl-9">
                <dt className="font-semibold text-gray-900">
                  <svg className="absolute top-1 left-0 h-5 w-5 text-indigo-500"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd">
                    </path>
                  </svg>
                  {feature.title}
                </dt>
                <dd className="mt-2">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Cards;
