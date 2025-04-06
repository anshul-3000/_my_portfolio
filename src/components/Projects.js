import React from "react";
import { FaReact, FaPython } from "react-icons/fa";
import { SiFlask, SiTailwindcss, SiBootstrap, SiTableau, SiNumpy, SiScikitlearn } from "react-icons/si";
import { BsStars } from "react-icons/bs";

const techIcons = {
  React: <FaReact className="inline-block mr-1" />,
  Python: <FaPython className="inline-block mr-1" />,
  Flask: <SiFlask className="inline-block mr-1" />,
  Tailwind: <SiTailwindcss className="inline-block mr-1" />,
  Bootstrap: <SiBootstrap className="inline-block mr-1" />,
  Tableau: <SiTableau className="inline-block mr-1" />,
  "scikit-learn": <SiScikitlearn className="inline-block mr-1" />,
  "Naive Bayes": <BsStars className="inline-block mr-1" />,
  Excel: <BsStars className="inline-block mr-1" />,
  NLP: <BsStars className="inline-block mr-1" />,
  RNN: <BsStars className="inline-block mr-1" />,
  MovieLens: <BsStars className="inline-block mr-1" />,
  Pandas: <BsStars className="inline-block mr-1" />,
  Seaborn: <BsStars className="inline-block mr-1" />,
  Matplotlib: <BsStars className="inline-block mr-1" />,
  BeautifulSoup: <BsStars className="inline-block mr-1" />,
};

const projects = [
    {
      title: "SafeDrive AI – Drowsiness-Detection System",
      description:
        "A real-time drowsiness detection system using Haar Cascade classifiers, OpenCV, and Pygame. Deployed via Flask with a clean React interface.",
      tech: ["React", "Tailwind", "Flask", "OpenCV", "Pygame", "Haar Cascade", "Threading"],
      link: "https://github.com/anshul-3000/Safe_Drive_AI", // Update if different
    },
    {
      title: "MoodMap – Emotion-Detection System",
      description:
        "Built a real-time emotion detection system with 85% accuracy, classifying seven facial expressions",
      tech: ["CNN", "Python", "OpenCV", "Deep Learning", "Tkinter", "TensorFlow/Keras"],
      link: "https://github.com/anshul-3000/Emotion_Detection", // Update if different
    },
    {
      title: "YumCraft – AI-Powered Recipe Recommendation",
      description:
        "A smart recipe recommender based on user-input ingredients using NLP, Flask REST API, and BeautifulSoup.",
      tech: ["Python", "Flask", "NLP", "BeautifulSoup", "Pandas"],
      link: "https://github.com/anshul-3000/recipe_recommendation", // Update if different
    },
    {
      title: "India’s Weather Analysis",
      description:
        "Exploratory Data Analysis of Indian weather patterns using Pandas, Matplotlib, and Seaborn for trend visualization.",
      tech: ["Python", "Pandas", "Seaborn", "Matplotlib"],
      link: "hhttps://github.com/anshul-3000/Data-analysis-of-India-s-weather", // Update if different
    },
    {
      title: "Movie Review Sentiment Analysis",
      description:
        "Performed sentiment classification of movie reviews using NLP techniques and a Naive Bayes model with sklearn.",
      tech: ["Python", "NLP", "Naive Bayes", "scikit-learn"],
      link: "https://github.com/anshul-3000/movie-review-classifier", // Update if different
    },
    {
      title: "Adidas Sales Dashboard",
      description:
       "An interactive Tableau dashboard showcasing Adidas sales data with insights into revenue, profit margins, and regional performance trends.",
      tech: ["Excel", "Tableau", "Data Visualization"],
      link: "https://public.tableau.com/views/AdidasSales_17089844229800/Dashboard2?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link", // Replace with Tableau Public link if available
    },
    {
        title: "Web Scraping of Oxford Bookstore",
        description:
          "Scraped book data like titles, authors, and prices from Oxford Bookstore using BeautifulSoup and requests. Exported structured data to CSV for further analysis.",
        tech: ["Python", "BeautifulSoup", "Requests", "CSV"],
        link: "https://github.com/anshul-3000/Web-Scraping-Oxford-book-store",
      },
  ];
  
export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-purple-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-purple-600 dark:text-purple-400 mb-10">
          Projects
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 transform hover:scale-105 transition duration-300 hover:shadow-2xl border border-purple-200 dark:border-purple-700"
            >
              <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-300 mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-purple-200 dark:bg-purple-600 text-purple-900 dark:text-white px-3 py-1 rounded-full flex items-center gap-1 transition duration-300 hover:scale-105 hover:bg-purple-300 dark:hover:bg-purple-500"
                  >
                    {techIcons[tech] || "🔧"} {tech}
                  </span>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-2 text-purple-600 dark:text-purple-400 hover:underline"
                >
                  View Project →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}