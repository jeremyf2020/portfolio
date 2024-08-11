export default function About() {
  return (
    <section id="about">
      <div className="flex flex-col items-center  ">
        <div>
          <p className="text-3xl font-bold mb-6">
            Hi, my name is{" "}
            <span
              className="bg-gradient-to-br from-sky-700 to-cyan-100 
            bg-clip-text text-transparent"
            >
              Jeremy
            </span>{" "}
            👋
          </p>
          <p className="mb-4">
            I worked as a typesetter for years, and during this time, I found
            the work repetitive. I looked for ways to make my job more
            efficient. Finally, I self-taught Javascript to boost the
            efficiency. My department's working hours reduced from 12 hour to 9
            hours per day! This gave me more opportunities to collaborate with
            the IT team.
          </p>
          <p className="mb-4">
            The more I learn, the more I realized how much I don't know, and the
            more I desire.
          </p>
          <p className="mb-4">
            I decided to go back to school. However, after 1.5 year of studying,
            I had to pause my education due to family issue. Now, I'm keen to
            apply what I learnt and my passion for programming to Web
            development industry.
          </p>
        </div>
      </div>
    </section>
  );
}
