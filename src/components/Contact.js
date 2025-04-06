import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-purple-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-6">Contact Me</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-8">
          Want to collaborate or hire me? Reach out via email or connect on LinkedIn!
        </p>

        <div className="flex justify-center gap-6 flex-wrap text-lg">
          <a
            href="mailto:anshulchaudhary3000@gmail.com"
            className="text-purple-600 hover:underline dark:text-purple-400"
          >
            📧 anshulchaudhary3000@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/anshul-chaudhary-b571b5251/"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:underline"
          >
            🔗 LinkedIn
          </a>
          <a
            href="https://github.com/anshul-3000"
            target="_blank"
            rel="noreferrer"
            className="text-gray-800 hover:underline dark:text-gray-300"
          >
            💻 GitHub
          </a>
        </div>
      </div>
    </section>
  );
}