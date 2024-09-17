const posts = [
  {
    id: 1,
    title: "JustDecide",
    href: "#",
    description:
      "An application that enables users to make informed decisions to tackle ethical issues using the wisdom of the greatest philosophers of history.",
    imageUrl: "Justdecide.png",
    category: {
      title: "AI-powered ethical analysis",
      href: "#",
    },
  },
  {
    id: 2,
    title: "Multi thread Web Server",
    href: "https://github.com/jyotsna-venkatesan/Multi-thread-Web-Server",
    description:
      "This project implements a basic HTTP server using python that can handle GET requests, serve static files, and manage persistent connections via HTTP keep-alive functionality.",
    imageUrl:
      "https://media.geeksforgeeks.org/wp-content/uploads/20201031110311/Multiserver.png",
    category: {
      title: "Server Configuration and Multi-threading",
      href: "#",
    },
  },
  {
    id: 3,
    title: "FundMap",
    href: "https://www.fundmap.live/",
    description:
      "A website that visualises the extent and impact of donations based on geographical factors. All data is based on GoFundMe resources.",
    imageUrl: "Fundmap.png",
    category: {
      title: "Data Scraping, Analysis, and Visualization",
      href: "#",
    },
  },
  {
    id: 4,
    title: "Sample Join the Team Page",
    href: "https://github.com/jyotsna-venkatesan/Join-the-team",
    description:
      "An interactive sample webpage showcasing opportunities to join different teams within an organization called Unrealyty.",
    imageUrl: "JoinTheTeam.png",
    category: {
      title: "Animated and Mobile friendly design",
      href: "#",
    },
  },
  {
    id: 5,
    title: "Other Educational Projects",
    href: "https://github.com/jyotsna-venkatesan/Egg-Theory",
    description:
      "An educational projects demonstrating the topic of 'Egg Theory' and a blog on various topics of interest for High School students",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS59XM2aPBJShLa14zEtvO_bGBAoQVfF71pA&s",
    category: {
      title: "Link to github",
      href: "https://github.com/jyotsna-venkatesan",
    },
  },
  // You can add more posts here if needed
];

export default function ProjectGallery() {
  return (
    <div className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-text sm:text-8xl">
            Project Gallery
          </h2>
          <p className="mt-4 text-lg leading-8 text-primary">
            Here are some of the projects I worked on
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex flex-col items-start justify-between"
            >
              <div className="relative w-full">
                <img
                  alt=""
                  src={post.imageUrl}
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {post.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
