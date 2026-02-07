const AboutMe = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5 gap-14"
      id="services"
    >
      {/* LEFT COLUMN — SUMMARY + EDUCATION */}
      <div className="flex flex-col gap-16 h-fit md:pe-8 lg:pe-35.75 my-auto">

        {/* SUMMARY */}
        <div className="pb-6 border-b border-gray-200">
          <h2 className="section-title max-md:text-center">Summary</h2>

          <div className="mt-6 text-gray-700 text-[14px] sm:text-lg max-md:text-center">
            <h3 className="font-semibold text-[16px] sm:text-xl">JOHN HENRY OSA</h3>

            <p className="mt-3 text-gray-500">
              Innovative and deadline-driven Quality Assurance Analyst with over 1.7 years of experience
              in manual testing of web and mobile applications. Adept at
              identifying issues to ensure optimal user experience.
            </p>

            <ul className="mt-4 text-gray-500 space-y-1">
              <li>• Malanday, Valenzuela City, NCR</li>
              <li>• (+63) 905-511-6752</li>
              <li>• johnhenryosa2@gmail.com</li>
            </ul>
          </div>
        </div>

        {/* EDUCATION TIMELINE */}
        <div>
          <h2 className="section-title max-md:text-center">Education</h2>

          <div className="mt-8 relative ps-6 border-l border-gray-300 space-y-10">

            {/* DOT */}
            <div className="absolute left-[-7px] top-0 w-3 h-3 rounded-full bg-white border border-gray-500"></div>

            {/* COLLEGE */}
            <div>
              <h3 className="font-semibold text-gray-800">
                BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY
              </h3>
              <p className="mt-1 text-gray-500">Batch 2024</p>
              <p className="italic text-gray-500">
                Pambayang Dalubhasaan ng Marilao, Bulacan
              </p>
              <p className="mt-2 text-gray-600">
                Learned and applied various methodologies used in IT industry.
              </p>
            </div>


            {/* SENIOR HIGH */}
            <div>
              
              <h3 className="font-semibold text-gray-800">
                INFORMATION AND COMMUNICATIONS TECHNOLOGY 
              </h3>
              <h3 className="font-semibold text-gray-800">(IT IN MOBILE APP & WEB DEVELOPMENT)</h3>
              <p className="mt-1 text-gray-500">Batch 2018</p>
              <p className="italic text-gray-500">
                STI College, Meycauayan, Bulacan
              </p>
              <p className="mt-2 text-gray-600">
                Learned about basic methods in developing web and mobile applications.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN — EXPERIENCE TIMELINE */}
      <div className="flex flex-col gap-10">

        <h2 className="section-title max-md:text-center pb-4 border-b border-gray-200">
          Professional Experience
        </h2>

        <div className="relative ps-6 border-l border-gray-300 space-y-12">

          {/* DOT */}
          <div className="absolute left-[-7px] top-[2px] w-3 h-3 rounded-full bg-white border border-gray-500"></div>

          {/* JOB 1 */}
          <div className="text-[14px] sm:text-lg text-gray-600">
            <h3 className="font-semibold text-gray-800">
              QUALITY ASSURANCE ANALYST
            </h3>
            <p className="mt-1 text-gray-500">August 2024 - Present</p>
            <p className="italic text-gray-500">Teochnologies Inc., Pasay</p>

            <ul className="mt-3 space-y-2 list-disc ps-5">
              <li>Create and maintain test cases and test scripts to ensure full application test coverage.</li>
              <li>Design and execute manual test scripts to validate functionality, performance, and system reliability.</li>
              <li>Perform smoke, end-to-end functional, regression, and retesting to ensure stable, error-free releases.</li>
              <li>Support release planning and coordinated testing activities to enable on-time and successful deployments.</li>
              <li>Lead continuous improvements in QA processes to increase team efficiency and overall product quality</li>
            </ul>
          </div>

          {/* DOT
          <div className="absolute left-[-7px] top-[230px] w-3 h-3 rounded-full bg-white border border-gray-500"></div> */}
          {/* JOB 2 */}
          <div className="text-[14px] sm:text-lg text-gray-600">
            <h3 className="font-semibold text-gray-800">
              QUALITY ASSURANCE INTERN
            </h3>
            <p className="mt-1 text-gray-500">March 2024 - May 2024</p>
            <p className="italic text-gray-500">Paidesk Services OPC, Bulacan</p>

            <ul className="mt-3 space-y-2 list-disc ps-5">
              <li>Analyze the Jira ticket and test based on requirements.</li>
              <li>Executes test cases and document test results.</li>
              <li>Identifies and documents Issues encountered During Testing.</li>
              <li>Report the issues encountered during testing to the QA Lead and/or the rest of the QA team.</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutMe;
