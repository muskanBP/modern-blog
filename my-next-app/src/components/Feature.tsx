import React from 'react';

const Feature = () => {
  const articles = [
    {
      title: "HTML: The Foundation of the Web",
      description:
        "Learn how HTML forms the backbone of every webpage. Master the building blocks of the web, from basic structure to advanced HTML5 features.",
      buttonText: "Read More",
      buttonLink: "#",
      buttonColor: "bg-purple-600 hover:bg-purple-700",
    },
    {
      title: "CSS: Styling the Web",
      description:
        "Dive into the world of CSS and learn how to transform a webpage’s design. Explore Flexbox, Grid, and animations for creating responsive and beautiful layouts.",
      buttonText: "Read More",
      buttonLink: "#",
      buttonColor: "bg-teal-600 hover:bg-teal-700",
    },
  ];

  return (
    <div className="py-16 bg-gradient-to-r from-purple-500 to-teal-500 text-white">
      <section className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6">Featured Blog: Navigation</h2>
        <p className="text-center text-lg mb-8">
          Explore the latest trends and tips in web development with our featured articles on
          essential topics like HTML, CSS, JavaScript, and more. Stay up-to-date with the newest
          tools and techniques.
        </p>
        <div className="grid md:grid-cols-2 gap-10">
          {articles.map((article, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">{article.title}</h3>
              <p className="text-gray-700 text-base mb-4">{article.description}</p>
              <a
                href={article.buttonLink}
                className={`inline-block ${article.buttonColor} text-white py-2 px-6 rounded-lg text-lg transition-all duration-300`}
              >
                {article.buttonText}
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Feature;
