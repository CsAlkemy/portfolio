// pages/resume.js
import React from "react";

const Resume = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-black dark:text-white py-10">
      <div className="bg-white dark:bg-gray-800 shadow-lg mx-auto max-w-5xl p-10 rounded-md border border-gray-300">
        {/* Header Section */}
        <header className="border-b pb-4 mb-6">
          <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-2">Alkemy Hossain</h1>
          <div className="text-center text-sm space-y-1">
            <p>
              <a
                href="https://csalkemy.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                csalkemy.netlify.app
              </a>{" "}
              |{" "}
              <a
                href="mailto:alkemy23@gmail.com"
                className="text-blue-500 hover:underline"
              >
                alkemy23@gmail.com
              </a>{" "}
              | +8801521109475
            </p>
            <p>
              <a
                href="https://github.com/csalkemy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                github.com/csalkemy
              </a>
            </p>
          </div>
        </header>

        {/* Skills Section */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold border-b pb-1 mb-3 text-gray-800 dark:text-gray-200">Skills Summary</h2>
          <ul className="list-disc ml-6 text-sm space-y-1">
            <li><strong>Languages:</strong> TypeScript, JavaScript, C, C++, JAVA, SQL, Go</li>
            <li><strong>Frameworks:</strong> Next.js, NestJS, React Native, Gatsby, Zod, Tailwind CSS, MUI, SCSS, Zustand, REST API, Redux, D3</li>
            <li><strong>Tools:</strong> ShadcnUI, MongoDB, Storybook, GIT, Jira, Figma, MySQL, MSExcel, WordPress, Contentful, Strapy</li>
            <li><strong>Platforms:</strong> Linux, Windows, Arduino, Netlify, AWS, Vercel</li>
          </ul>
        </section>

        {/* Experience Section */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold border-b pb-1 mb-3 text-gray-800 dark:text-gray-200">Experience</h2>
          <div className="text-sm space-y-6">
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-100">Software Engineer - TulipTech (Full-time)</h3>
              <p className="text-gray-600 dark:text-gray-400">Dhaka, BD | December 2021 - Present</p>
              <ul className="list-disc ml-6 mt-1 space-y-1">
                <li>Developed <a href="https://connectstudio-admin.world-television.com/" className="text-blue-500 hover:underline">ConnectStudio</a>, a streaming platform web app using Next.js and SCSS for <a href="https://wtvglobal.com/" className="text-blue-500 hover:underline">WtvGlobal UK</a>.</li>
                <li>Developed <a href="https://dev.careapps.co.uk/auth/login" className="text-blue-500 hover:underline">CareApp</a>, a healthcare management application for UK Care Homes.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-100">Software Engineer - Embedded Logic Operations (ELO) (Part-time)</h3>
              <p className="text-gray-600 dark:text-gray-400">Dhaka, BD | June 2022 - July 2023</p>
              <ul className="list-disc ml-6 mt-1 space-y-1">
                <li>Built <a href="https://frontgo.no/" className="text-blue-500 hover:underline">Frontpayment GO</a>, a financial web app using ReactJS, MUI, and React Fuse for Frontpayment Norway.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-100">Jr. Software Engineer - ChampTech (Full-time)</h3>
              <p className="text-gray-600 dark:text-gray-400">Remote | March 2021 - November 2021</p>
              <ul className="list-disc ml-6 mt-1 space-y-1">
                <li>Architected and developed <a href="https://github.com/CsAlkemy/TMS" className="text-blue-500 hover:underline">Tourgo</a>, a booking platform for hotels and tour packages using Node.js, MongoDB, Typescript, and Pug.js.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold border-b pb-1 mb-3 text-gray-800 dark:text-gray-200">Projects</h2>
          <ul className="text-sm list-disc ml-6 space-y-2">
            <li><a href="https://dev.careapps.co.uk/auth/login" className="text-blue-500 hover:underline">CareApps</a>: Full-featured ERP SaaS for UK care homes (Next.js, TypeScript, Ant Design).</li>
            <li><a href="https://superfan.arive.world/" className="text-blue-500 hover:underline">Arive SuperFanConsole</a>: Interactive live streaming platform (Next.js, ShadcnUI).</li>
          </ul>
        </section>

        {/* Research Section */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold border-b pb-1 mb-3 text-gray-800 dark:text-gray-200">Research</h2>
          <ul className="text-sm list-disc ml-6 space-y-1">
            <li>
              <strong>Fake News Identification by Stance Detection:</strong> Contributed to a team project focusing on dataset management and model development for detecting fake news using machine learning.
            </li>
          </ul>
        </section>

        {/* Awards and Certifications Section */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold border-b pb-1 mb-3 text-gray-800 dark:text-gray-200">Awards and Certifications</h2>
          <ul className="text-sm list-disc ml-6 space-y-1">
            <li>Winner of Intra University Robotics Contest</li>
            <li>Attended Intra University Programming Contest</li>
            <li>Completed Front-End Web Development with React (HKUST - Coursera)</li>
            <li>Introduction to Programming in Java (MIT OpenCourseWare)</li>
            <li>Web Scraping with Python (DataCamp)</li>
          </ul>
        </section>

        {/* Volunteer Experience Section */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold border-b pb-1 mb-3 text-gray-800 dark:text-gray-200">Volunteer Experience</h2>
          <ul className="text-sm list-disc ml-6 space-y-1">
            <li><strong>Mentor:</strong> Mentored in the student mentoring class of the Department of Computer Science & Engineering, IUBAT.</li>
            <li><strong>Deputy Event Manager:</strong> Organized events, conducted workshops, and served more than 1400 students of the CSE Department.</li>
          </ul>
        </section>

        {/* Footer */}
        <footer className="text-center text-xs text-gray-500 dark:text-gray-400 mt-8">
          Designed by Alkemy Hossain | © {new Date().getFullYear()}
        </footer>
      </div>
    </div>
  );
};

export default Resume;
