export default function Skills() {
  const skillCategories = [
    {
      name: "Programming Languages",
      skills: ["Python", "Java", "C++", "C", "MIPS", "R"],
    },
    {
      name: "Web Technologies",
      skills: ["HTML", "CSS", "JavaScript", "React", "Flutter"],
    },
    {
      name: "Quality Assurance",
      skills: ["Selenium", "Appium", "JUnit", "TestNG"],
    },
    {
      name: "Other Skills",
      skills: ["Bash", "Blender", "SolidWorks", "Git", "Docker", "SQL"],
    },
  ];

  return (
    <div className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
          <div className="mx-auto w-full max-w-xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-text sm:text-8xl">
              My Skills
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              I've developed a diverse set of skills throughout my journey in
              computer science. Here's an overview of my technical expertise:
            </p>
            <div className="mt-8 flex items-center gap-x-6">
              <a
                href="/Jyotsna_Resume.pdf"
                className="text-sm font-semibold leading-6 text-text underline hover:text-primary transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                My Resume!
              </a>
              <a
                href="mailto:venkatesanjyotsna@gmail.com"
                className="text-sm font-semibold leading-6 text-text underline hover:text-primary transition duration-300"
              >
                Email Me <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          <div className="mx-auto grid w-full max-w-xl grid-cols-1 gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">
            {skillCategories.map((category) => (
              <div
                key={category.name}
                className="border-b border-gray-200 pb-4"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-primary-dark ring-1 ring-inset ring-primary-light-700/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
