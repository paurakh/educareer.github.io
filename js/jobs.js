// jobs.js

const jobs = [
    // Consulting Jobs
    {
        title: "Business Analyst",
        company: "McKinsey & Company",
        location: "New York, NY",
        jobType: "Consulting",
        description: `
        <h3>About the Job:</h3>
        <p>
        Join McKinsey & Company as a Business Analyst Intern for a 12-week program offering personal and professional development. In this role, you will work closely with our consultants and clients to analyze business problems and develop strategic solutions. You'll gain hands-on experience in consulting methodologies and have the opportunity to contribute to impactful projects across various industries.
        </p>

        <h3>Responsibilities:</h3>
        <ul>
            <li>Conduct market research and data analysis to support client engagements.</li>
            <li>Assist in developing presentations and reports for clients.</li>
            <li>Collaborate with team members to brainstorm and implement solutions.</li>
            <li>Participate in client meetings and contribute insights.</li>
        </ul>

        <h3>Minimum Qualifications:</h3>
        <ul>
            <li>Pursuing a Bachelor's degree in Business, Economics, or a related field.</li>
            <li>Strong analytical and problem-solving skills.</li>
            <li>Excellent communication and interpersonal abilities.</li>
            <li>Proficiency in Microsoft Office Suite.</li>
        </ul>

        <h3>Preferred Qualifications:</h3>
        <ul>
            <li>Experience with data analysis and statistical software.</li>
            <li>Previous internship experience in consulting or related industries.</li>
            <li>Leadership experience in extracurricular activities.</li>
            <li>Ability to work collaboratively in a team environment.</li>
        </ul>
        `,
        link: "#",
        datePosted: "2023-09-01"
    },
    {
        title: "Consultant",
        company: "Boston Consulting Group",
        location: "Boston, MA",
        jobType: "Consulting",
        description: `
        <h3>About the Job:</h3>
        <p>
        As a Consultant at BCG, you will work with clients to tackle their most complex challenges. You'll develop strategies, drive implementation, and deliver measurable results. This role offers the opportunity to work with leading companies across various industries, providing you with diverse experiences and professional growth.
        </p>

        <h3>Responsibilities:</h3>
        <ul>
            <li>Lead project teams in delivering client solutions.</li>
            <li>Conduct detailed analyses to inform strategic decisions.</li>
            <li>Develop and present recommendations to senior executives.</li>
            <li>Mentor junior team members and foster a collaborative environment.</li>
        </ul>

        <h3>Minimum Qualifications:</h3>
        <ul>
            <li>Bachelor's degree in Business, Engineering, or a related discipline.</li>
            <li>2+ years of professional experience.</li>
            <li>Strong quantitative and analytical skills.</li>
            <li>Excellent written and verbal communication skills.</li>
        </ul>

        <h3>Preferred Qualifications:</h3>
        <ul>
            <li>MBA or advanced degree.</li>
            <li>Experience in management consulting.</li>
            <li>Proven leadership abilities.</li>
            <li>Proficiency in project management tools.</li>
        </ul>
        `,
        link: "#",
        datePosted: "2023-08-28"
    },
    // Technology Jobs
    {
        title: "Software Engineer",
        company: "Google",
        location: "Mountain View, CA",
        jobType: "Technology",
        description: `
        <h3>About the Job:</h3>
        <p>
        Join Google for a unique 12-week internship that offers professional development and community-building. As a Software Engineer Intern, you will work on projects critical to Google’s mission, developing solutions that impact millions of users. You'll collaborate with experienced engineers and have the opportunity to contribute to cutting-edge technologies.
        </p>

        <h3>Responsibilities:</h3>
        <ul>
            <li>Design, develop, and test software components.</li>
            <li>Collaborate with cross-functional teams to define project requirements.</li>
            <li>Participate in code reviews and contribute to best practices.</li>
            <li>Debug and troubleshoot issues in existing software.</li>
        </ul>

        <h3>Minimum Qualifications:</h3>
        <ul>
            <li>Pursuing a Bachelor's degree in Computer Science or related technical field.</li>
            <li>Experience with one or more programming languages (e.g., Java, C++, Python).</li>
            <li>Knowledge of data structures and algorithms.</li>
            <li>Ability to work in a team environment.</li>
        </ul>

        <h3>Preferred Qualifications:</h3>
        <ul>
            <li>Experience with distributed systems or cloud technologies.</li>
            <li>Familiarity with machine learning or AI concepts.</li>
            <li>Participation in coding competitions or hackathons.</li>
            <li>Strong problem-solving skills.</li>
        </ul>
        `,
        link: "#",
        datePosted: "2023-09-02"
    },
    {
        title: "Data Scientist",
        company: "Meta (Facebook)",
        location: "Menlo Park, CA",
        jobType: "Technology",
        description: `
        <h3>About the Job:</h3>
        <p>
        As a Data Scientist at Meta, you'll analyze vast amounts of data to generate insights that drive product decisions and enhance user experiences. You'll work closely with cross-functional teams to develop models and algorithms, contributing to the company's mission of connecting the world.
        </p>

        <h3>Responsibilities:</h3>
        <ul>
            <li>Develop and implement machine learning models.</li>
            <li>Analyze user behavior and identify trends.</li>
            <li>Collaborate with product teams to optimize features.</li>
            <li>Communicate findings to stakeholders through reports and presentations.</li>
        </ul>

        <h3>Minimum Qualifications:</h3>
        <ul>
            <li>Bachelor's degree in Statistics, Mathematics, Computer Science, or related field.</li>
            <li>Experience with statistical analysis and machine learning techniques.</li>
            <li>Proficiency in programming languages such as Python or R.</li>
            <li>Familiarity with data visualization tools.</li>
        </ul>

        <h3>Preferred Qualifications:</h3>
        <ul>
            <li>Master's degree or PhD.</li>
            <li>Experience with big data technologies (e.g., Hadoop, Spark).</li>
            <li>Knowledge of deep learning frameworks.</li>
            <li>Strong communication skills to present complex data insights.</li>
        </ul>
        `,
        link: "#",
        datePosted: "2023-08-30"
    },
    // Finance Jobs
    {
        title: "Investment Banking Analyst",
        company: "Goldman Sachs",
        location: "New York, NY",
        jobType: "Finance",
        description: `
        <h3>About the Job:</h3>
        <p>
        As an Investment Banking Analyst at Goldman Sachs, you'll be involved in high-profile transactions and strategic advisory services. You'll work closely with senior bankers and clients, gaining exposure to mergers and acquisitions, equity and debt financing, and more.
        </p>

        <h3>Responsibilities:</h3>
        <ul>
            <li>Build and maintain financial models.</li>
            <li>Conduct industry and company research.</li>
            <li>Prepare pitch books and client presentations.</li>
            <li>Assist in executing transactions.</li>
        </ul>

        <h3>Minimum Qualifications:</h3>
        <ul>
            <li>Bachelor's degree in Finance, Economics, or related field.</li>
            <li>Strong analytical and quantitative skills.</li>
            <li>Proficiency in Excel and financial modeling.</li>
            <li>Excellent attention to detail.</li>
        </ul>

        <h3>Preferred Qualifications:</h3>
        <ul>
            <li>Previous internship in investment banking or finance.</li>
            <li>Knowledge of valuation techniques.</li>
            <li>Ability to work long hours in a high-pressure environment.</li>
            <li>Strong communication and presentation skills.</li>
        </ul>
        `,
        link: "#",
        datePosted: "2023-09-03"
    },
    {
        title: "Equity Research Associate",
        company: "Morgan Stanley",
        location: "New York, NY",
        jobType: "Finance",
        description: `
        <h3>About the Job:</h3>
        <p>
        As an Equity Research Associate, you'll support senior analysts in covering specific sectors by analyzing financial data, building models, and writing reports. Your insights will help clients make informed investment decisions.
        </p>

        <h3>Responsibilities:</h3>
        <ul>
            <li>Analyze financial statements and market data.</li>
            <li>Develop valuation models and forecasts.</li>
            <li>Write research reports and recommendations.</li>
            <li>Communicate with clients and sales teams.</li>
        </ul>

        <h3>Minimum Qualifications:</h3>
        <ul>
            <li>Bachelor's degree in Finance, Accounting, or related discipline.</li>
            <li>Strong understanding of financial statements.</li>
            <li>Excellent analytical and writing skills.</li>
            <li>Proficiency with Excel and financial databases.</li>
        </ul>

        <h3>Preferred Qualifications:</h3>
        <ul>
            <li>CFA Level I candidate or holder.</li>
            <li>Previous experience in equity research.</li>
            <li>Knowledge of a specific industry sector.</li>
            <li>Ability to work independently and as part of a team.</li>
        </ul>
        `,
        link: "#",
        datePosted: "2023-08-27"
    },

];

// Function to display job cards
function displayJobCards(jobsToDisplay) {
    const jobsList = document.getElementById('jobs-list');
    jobsList.innerHTML = ''; // Clear previous job cards

    jobsToDisplay.forEach((job) => {
        const jobCard = document.createElement('div');
        jobCard.className = 'job-card';

        jobCard.innerHTML = `
            <h5>${job.title}</h5>
            <p><strong>Company:</strong> ${job.company}</p>
            <p><strong>Location:</strong> ${job.location}</p>
            <p><strong>Date Posted:</strong> ${job.datePosted}</p>
        `;

        jobCard.addEventListener('click', () => {
            openJobDetailPanel(job);
        });

        jobsList.appendChild(jobCard);
    });
}

// Function to open job detail panel and populate it
function openJobDetailPanel(job) {
    document.getElementById('job-title').textContent = job.title;
    document.getElementById('job-company').textContent = job.company;
    document.getElementById('job-location').textContent = job.location;
    document.getElementById('job-date').textContent = job.datePosted;
    document.getElementById('job-description').innerHTML = job.description;
    document.getElementById('apply-now-btn').href = job.link;

    // Show the job detail panel
    document.getElementById('job-detail-panel').style.display = 'block';
}

// Initial display of job cards
displayJobCards(jobs);

// Function to handle filter changes
function handleFilterChange() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();

    const jobTypeCheckboxes = document.querySelectorAll('#filter-form input[type="checkbox"][data-filter="jobType"]');
    const selectedJobTypes = Array.from(jobTypeCheckboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);

    const companyCheckboxes = document.querySelectorAll('#filter-form input[type="checkbox"][data-filter="company"]');
    const selectedCompanies = Array.from(companyCheckboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);

    const filteredJobs = jobs.filter(job => {
        const matchesSearch = job.title.toLowerCase().includes(searchTerm) || job.company.toLowerCase().includes(searchTerm);

        const matchesJobType = selectedJobTypes.length === 0 || selectedJobTypes.includes(job.jobType);

        const matchesCompany = selectedCompanies.length === 0 || selectedCompanies.includes(job.company);

        return matchesSearch && matchesJobType && matchesCompany;
    });

    displayJobCards(filteredJobs);
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    displayJobCards(jobs);

    // Add event listeners to checkboxes
    const checkboxes = document.querySelectorAll('#filter-form .form-check-input');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', handleFilterChange);
    });

    // Search functionality
    document.getElementById('search-button').addEventListener('click', handleFilterChange);
    document.getElementById('search-input').addEventListener('keyup', handleFilterChange);
});
