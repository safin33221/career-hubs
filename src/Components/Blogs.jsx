import { Helmet } from "react-helmet";


const Blogs = () => {
  const vlogIdeas = [
    {
      title: "Day-in-the-Life Series",
      description: "Showcase a day in the life of professionals across various industries, featuring a new career in each episode.",
    },
    {
      title: "Career Advice from Experts",
      description: "Interviews with professionals or career coaches sharing tips on job hunting, resume building, and personal branding.",
    },
    {
      title: "Skills Development and Certifications",
      description: "Reviews on certifications, courses, and resources that enhance resumes and help candidates stand out.",
    },
    {
      title: "Company Spotlights",
      description: "Explore companies with unique cultures and benefits through workplace tours and highlights.",
    },
    {
      title: "Success Stories and Journeys",
      description: "Interviews with individuals who have achieved career success, sharing their challenges and advice.",
    },
    {
      title: "Q&A Sessions",
      description: "Host live Q&A sessions on career topics like switching careers, handling challenges, and work-life balance.",
    },
    {
      title: "Remote Work Insights",
      description: "Vlogs on remote job opportunities, productivity tips, and essential tools for remote work.",
    },
    {
      title: "Career Path Exploration",
      description: "Deep dive into high-potential but lesser-known career paths in fields like AI, renewable energy, and creative tech.",
    },
    {
      title: "Resume and LinkedIn Makeover",
      description: "Demonstrations on improving resumes and LinkedIn profiles to attract recruiters.",
    },
    {
      title: "Job Market Trends",
      description: "Analysis of job market trends across industries and their impact on career growth.",
    },
  ];

  return (

    <>
      <Helmet>
        <title>Blogs | Career Hub</title>
      </Helmet>
      <div className="max-w-4xl mx-auto p-6">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Career Hub Vlog Ideas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {vlogIdeas.map((vlog, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <h3 className="text-xl font-bold text-gray-900">{vlog.title}</h3>
              <p className="text-gray-700 mt-2">{vlog.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blogs;
