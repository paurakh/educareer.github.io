// jobs.js

const jobs = [
    // Consulting Jobs
    {
        title: "Business Analyst",
        company: "McKinsey & Company",
        location: "New York, NY",
        jobType: "Consulting",
        description: "As a Business Analyst, you will work with our clients to solve their toughest challenges.",
        link: "#",
        datePosted: "2023-09-01"
    },
    {
        title: "Consultant",
        company: "Boston Consulting Group",
        location: "Boston, MA",
        jobType: "Consulting",
        description: "Join BCG as a Consultant to help leading companies navigate complex business issues.",
        link: "#",
        datePosted: "2023-08-28"
    },
    // Technology Jobs
    {
        title: "Software Engineer",
        company: "Google",
        location: "Mountain View, CA",
        jobType: "Technology",
        description: "Develop scalable software solutions at Google.",
        link: "#",
        datePosted: "2023-09-02"
    },
    {
        title: "Data Scientist",
        company: "Facebook",
        location: "Menlo Park, CA",
        jobType: "Technology",
        description: "Analyze data to help Facebook make data-driven decisions.",
        link: "#",
        datePosted: "2023-08-30"
    },
    // Finance Jobs
    {
        title: "Investment Banking Analyst",
        company: "Goldman Sachs",
        location: "New York, NY",
        jobType: "Finance",
        description: "Assist in executing transactions and performing financial analyses.",
        link: "#",
        datePosted: "2023-09-03"
    },
    {
        title: "Equity Research Associate",
        company: "Morgan Stanley",
        location: "New York, NY",
        jobType: "Finance",
        description: "Support senior analysts in covering specific sectors.",
        link: "#",
        datePosted: "2023-08-27"
    },
    // Consulting Jobs
    {
        title: "Business Analyst",
        company: "McKinsey & Company",
        location: "New York, NY",
        jobType: "Consulting",
        description: "As a Business Analyst, you will work with our clients to solve their toughest challenges.",
        link: "#",
        datePosted: "2023-09-01"
    },
    {
        title: "Consultant",
        company: "Boston Consulting Group",
        location: "Boston, MA",
        jobType: "Consulting",
        description: "Join BCG as a Consultant to help leading companies navigate complex business issues.",
        link: "#",
        datePosted: "2023-08-28"
    },
    // Technology Jobs
    {
        title: "Software Engineer",
        company: "Google",
        location: "Mountain View, CA",
        jobType: "Technology",
        description: "Develop scalable software solutions at Google.",
        link: "#",
        datePosted: "2023-09-02"
    },
    {
        title: "Data Scientist",
        company: "Facebook",
        location: "Menlo Park, CA",
        jobType: "Technology",
        description: "Analyze data to help Facebook make data-driven decisions.",
        link: "#",
        datePosted: "2023-08-30"
    },
    // Finance Jobs
    {
        title: "Investment Banking Analyst",
        company: "Goldman Sachs",
        location: "New York, NY",
        jobType: "Finance",
        description: "Assist in executing transactions and performing financial analyses.",
        link: "#",
        datePosted: "2023-09-03"
    },
    {
        title: "Equity Research Associate",
        company: "Morgan Stanley",
        location: "New York, NY",
        jobType: "Finance",
        description: "Support senior analysts in covering specific sectors.",
        link: "#",
        datePosted: "2023-08-27"
    },
    // Additional Jobs (Add more to reach 30)
    {
        title: "Product Manager",
        company: "Apple",
        location: "Cupertino, CA",
        jobType: "Technology",
        description: "Lead cross-functional teams to deliver innovative products.",
        link: "#",
        datePosted: "2023-08-29"
    },
    {
        title: "Strategy Analyst",
        company: "Deloitte",
        location: "Chicago, IL",
        jobType: "Consulting",
        description: "Work on strategic projects for a variety of clients.",
        link: "#",
        datePosted: "2023-08-31"
    },
    {
        title: "Financial Analyst",
        company: "J.P. Morgan",
        location: "New York, NY",
        jobType: "Finance",
        description: "Analyze financial data and support decision-making processes.",
        link: "#",
        datePosted: "2023-09-01"
    },
    {
        title: "UX Designer",
        company: "Microsoft",
        location: "Redmond, WA",
        jobType: "Technology",
        description: "Design user interfaces for Microsoft products.",
        link: "#",
        datePosted: "2023-09-02"
    },
    {
        title: "Management Consultant",
        company: "Accenture",
        location: "San Francisco, CA",
        jobType: "Consulting",
        description: "Provide expert advice to improve organizational performance.",
        link: "#",
        datePosted: "2023-08-30"
    },
    {
        title: "Software Developer",
        company: "Amazon",
        location: "Seattle, WA",
        jobType: "Technology",
        description: "Build and maintain applications for Amazon services.",
        link: "#",
        datePosted: "2023-08-28"
    },
    {
        title: "Risk Analyst",
        company: "Citigroup",
        location: "New York, NY",
        jobType: "Finance",
        description: "Assess financial risks and develop mitigation strategies.",
        link: "#",
        datePosted: "2023-09-03"
    },
    {
        title: "Business Development Manager",
        company: "IBM",
        location: "Armonk, NY",
        jobType: "Technology",
        description: "Identify new business opportunities and partnerships.",
        link: "#",
        datePosted: "2023-09-01"
    },
    {
        title: "Consultant",
        company: "Bain & Company",
        location: "Boston, MA",
        jobType: "Consulting",
        description: "Work closely with clients to address their most critical challenges.",
        link: "#",
        datePosted: "2023-08-29"
    },
    {
        title: "Financial Advisor",
        company: "Wells Fargo",
        location: "Charlotte, NC",
        jobType: "Finance",
        description: "Provide financial planning services to clients.",
        link: "#",
        datePosted: "2023-08-27"
    }
];
// Function to display job cards
function displayJobCards(jobsToDisplay) {
    const jobsList = document.getElementById('jobs-list');
    jobsList.innerHTML = ''; // Clear existing jobs

    if (jobsToDisplay.length === 0) {
        jobsList.innerHTML = '<p>No jobs found matching your criteria.</p>';
        return;
    }

    jobsToDisplay.forEach((job, index) => {
        const jobCard = document.createElement('div');
        jobCard.classList.add('job-card');
        jobCard.dataset.index = index;

        jobCard.innerHTML = `
            <h5>${job.title}</h5>
            <p><strong>Company:</strong> ${job.company}</p>
            <p><strong>Location:</strong> ${job.location}</p>
            <p><strong>Date Posted:</strong> ${job.datePosted}</p>
            <p>${truncateDescription(job.description, 100)}</p>
            <a href="${job.link}" class="btn btn-primary btn-apply">Apply Now</a>
        `;

        // Add click event to open job detail panel
        jobCard.addEventListener('click', () => {
            openJobDetailPanel(job);
        });

        jobsList.appendChild(jobCard);
    });
}

// Function to truncate job description
function truncateDescription(description, maxLength) {
    return description.length > maxLength ? description.substring(0, maxLength) + '...' : description;
}

// Function to open job detail panel
function openJobDetailPanel(job) {
    document.getElementById('job-title').textContent = job.title;
    document.getElementById('job-company').textContent = job.company;
    document.getElementById('job-location').textContent = job.location;
    document.getElementById('job-date').textContent = job.datePosted;
    document.getElementById('job-description').textContent = job.description;
    document.getElementById('apply-now-btn').href = job.link;

    // Show the job detail panel
    document.getElementById('job-detail-panel').style.display = 'block';
}

// Function to close job detail panel
function closeJobDetailPanel() {
    // Clear job details
    document.getElementById('job-title').textContent = '';
    document.getElementById('job-company').textContent = '';
    document.getElementById('job-location').textContent = '';
    document.getElementById('job-date').textContent = '';
    document.getElementById('job-description').textContent = '';
    document.getElementById('apply-now-btn').href = '#';

    // Hide the job detail panel
    document.getElementById('job-detail-panel').style.display = 'none';
}

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

    // Close button functionality
    document.getElementById('close-panel-btn').addEventListener('click', closeJobDetailPanel);
});
