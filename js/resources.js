// resources.js

const resources = [
    // Finance Resources
    {
        name: "Investment Banking Interview Guide",
        category: "Finance",
        company: "Goldman Sachs",
        type: "Article",
        difficulty: "Advanced",
        link: "https://www.mergersandinquisitions.com/investment-banking-interviews/"
    },
    {
        name: "DCF Modeling Tutorial",
        category: "Finance",
        company: "J.P. Morgan",
        type: "Video",
        difficulty: "Intermediate",
        link: "https://www.youtube.com/watch?v=JOahUKJZIgc"
    },
    {
        name: "LBO Modeling Tutorial",
        category: "Finance",
        company: "Credit Suisse",
        type: "Video",
        difficulty: "Advanced",
        link: "https://www.youtube.com/watch?v=GOP6o7mXbwE"
    },
    {
        name: "Quantitative Trading Strategies",
        category: "Finance",
        company: "Citadel",
        type: "Research Paper",
        difficulty: "Advanced",
        link: "https://www.quantresearch.info/"
    },
    {
        name: "Sales and Trading Introduction",
        category: "Finance",
        company: "Morgan Stanley",
        type: "Course",
        difficulty: "Beginner",
        link: "https://www.wallstreetprep.com/programs/sales-and-trading/"
    },
    // Technology Resources
    {
        name: "Data Structures and Algorithms",
        category: "Technology",
        company: "Microsoft",
        type: "Course",
        difficulty: "Advanced",
        link: "https://www.coursera.org/specializations/data-structures-algorithms"
    },
    {
        name: "System Design Basics",
        category: "Technology",
        company: "Amazon",
        type: "Article",
        difficulty: "Intermediate",
        link: "https://www.educative.io/blog/cracking-the-system-design-interview"
    },
    {
        name: "Operating Systems Concepts",
        category: "Technology",
        company: "IBM",
        type: "Course",
        difficulty: "Intermediate",
        link: "https://www.udacity.com/course/introduction-to-operating-systems--ud923"
    },
    {
        name: "Networking Fundamentals",
        category: "Technology",
        company: "Cisco",
        type: "Article",
        difficulty: "Beginner",
        link: "https://www.cisco.com/c/en/us/solutions/small-business/resource-center/networking/networking-basics.html"
    },
    // Product Management Resources
    {
        name: "Product Management Basics",
        category: "Product Management",
        company: "Google",
        type: "Course",
        difficulty: "Beginner",
        link: "https://www.coursera.org/learn/uva-darden-digital-product-management"
    },
    {
        name: "Roadmapping Strategies",
        category: "Product Management",
        company: "Apple",
        type: "Article",
        difficulty: "Intermediate",
        link: "https://www.productplan.com/roadmap-strategy/"
    },
    {
        name: "User Experience Design",
        category: "Product Management",
        company: "Adobe",
        type: "Course",
        difficulty: "Intermediate",
        link: "https://www.adobe.com/creativecloud/design/discover/ux-design.html"
    },
    {
        name: "A/B Testing Strategies",
        category: "Product Management",
        company: "Facebook",
        type: "Article",
        difficulty: "Intermediate",
        link: "https://www.facebook.com/business/help/169338999767288?id=445653312788501"
    },
    // Human Resources Resources
    {
        name: "Behavioral Interview Prep",
        category: "Human Resources",
        company: "All",
        type: "Article",
        difficulty: "Beginner",
        link: "https://www.thebalancecareers.com/behavioral-interview-questions-and-answers-2062326"
    },
    {
        name: "Common HR Questions",
        category: "Human Resources",
        company: "All",
        type: "Video",
        difficulty: "Beginner",
        link: "https://www.youtube.com/watch?v=Y95eI-ek_E8"
    },
    {
        name: "Conflict Resolution in Teams",
        category: "Human Resources",
        company: "All",
        type: "Video",
        difficulty: "Intermediate",
        link: "https://www.youtube.com/watch?v=kyu_pj1i1Ic"
    },
    {
        name: "Effective Communication Skills",
        category: "Human Resources",
        company: "All",
        type: "Article",
        difficulty: "Beginner",
        link: "https://www.mindtools.com/pages/article/newCS_99.htm"
    },
    // Consulting Resources
    {
        name: "Case Interview Workshop",
        category: "Consulting",
        company: "McKinsey",
        type: "Workshop",
        difficulty: "Advanced",
        link: "https://www.mckinsey.com/careers/interviewing"
    },
    {
        name: "Consulting Frameworks",
        category: "Consulting",
        company: "Bain & Company",
        type: "Article",
        difficulty: "Intermediate",
        link: "https://www.bain.com/insights/"
    },
    {
        name: "Strategy Development Frameworks",
        category: "Consulting",
        company: "Deloitte",
        type: "Article",
        difficulty: "Advanced",
        link: "https://www2.deloitte.com/us/en/pages/strategy/solutions/business-strategy-services.html"
    },
    {
        name: "Consulting Case Studies",
        category: "Consulting",
        company: "PwC",
        type: "Course",
        difficulty: "Intermediate",
        link: "https://www.pwc.com/us/en/services/consulting.html"
    },
    {
        name: "Case Interview Preparation",
        category: "Consulting",
        company: "KPMG",
        type: "Tool",
        difficulty: "Advanced",
        link: "https://home.kpmg/xx/en/home/careers/graduates/virtual-case-experience.html"
    },
    {
        name: "Case Interview Examples",
        category: "Consulting",
        company: "EY",
        type: "Video",
        difficulty: "Beginner",
        link: "https://www.ey.com/en_us/careers"
    },
    // Additional Resources
    // Brain Teasers
    {
        name: "Top Brain Teasers for Interviews",
        category: "All",
        company: "All",
        type: "Article",
        difficulty: "Intermediate",
        link: "https://www.glassdoor.com/blog/brain-teaser-interview-questions/"
    },
    {
        name: "Logic Puzzles Collection",
        category: "All",
        company: "All",
        type: "E-book",
        difficulty: "Advanced",
        link: "https://www.puzzles.com/"
    },
    // Excel Skills
    {
        name: "Excel for Data Analysis",
        category: "All",
        company: "All",
        type: "Course",
        difficulty: "Beginner",
        link: "https://www.udemy.com/course/microsoft-excel-data-analysis/"
    },
    {
        name: "Advanced Excel Macros",
        category: "All",
        company: "All",
        type: "Video",
        difficulty: "Advanced",
        link: "https://www.youtube.com/watch?v=J_LK5klr2rw"
    },
    // Real Estate Resources
    {
        name: "Real Estate Investment Strategies",
        category: "Finance",
        company: "Blackstone",
        type: "Article",
        difficulty: "Intermediate",
        link: "https://www.blackstone.com/our-businesses/real-estate/"
    },
    {
        name: "Property Valuation Techniques",
        category: "Finance",
        company: "CBRE",
        type: "Video",
        difficulty: "Intermediate",
        link: "https://www.cbre.us/real-estate-services/investor/valuation-and-advisory-services"
    },
    // General Interview Questions
    {
        name: "Common Behavioral Questions",
        category: "All",
        company: "All",
        type: "Article",
        difficulty: "Beginner",
        link: "https://www.themuse.com/advice/30-behavioral-interview-questions-you-should-be-ready-to-answer"
    },
    {
        name: "Negotiation Skills for Job Offers",
        category: "All",
        company: "All",
        type: "Video",
        difficulty: "Intermediate",
        link: "https://www.youtube.com/watch?v=km9Il_-FHjw"
    },
    // Brain Teasers (Additional)
    {
        name: "Mathematical Puzzles Collection",
        category: "All",
        company: "All",
        type: "E-book",
        difficulty: "Advanced",
        link: "https://www.mathpuzzle.com/"
    },
    {
        name: "Creative Problem Solving Techniques",
        category: "All",
        company: "All",
        type: "Video",
        difficulty: "Intermediate",
        link: "https://www.youtube.com/watch?v=dtvYKH9LEL0"
    }
    // Now we have over 30 resources
];

// Function to display resources
function displayResources(resourcesToDisplay) {
    const tableBody = document.querySelector('#resources-table tbody');
    tableBody.innerHTML = ''; // Clear existing rows

    if (resourcesToDisplay.length === 0) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td colspan="6" class="text-center">No resources found matching your criteria.</td>
        `;
        tableBody.appendChild(row);
        return;
    }

    resourcesToDisplay.forEach(resource => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${resource.name}</td>
            <td>${resource.category}</td>
            <td>${resource.company}</td>
            <td>${resource.type}</td>
            <td>${resource.difficulty}</td>
            <td><a href="${resource.link}" target="_blank">View</a></td>
        `;

        tableBody.appendChild(row);
    });
}

// Function to handle filter changes
function handleFilterChange() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();

    const categoryCheckboxes = document.querySelectorAll('#filter-form input[type="checkbox"][data-filter="category"]');
    const selectedCategories = Array.from(categoryCheckboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);

    const companyCheckboxes = document.querySelectorAll('#filter-form input[type="checkbox"][data-filter="company"]');
    const selectedCompanies = Array.from(companyCheckboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);

    const filteredResources = resources.filter(resource => {
        const matchesSearch = resource.name.toLowerCase().includes(searchTerm);

        const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(resource.category);

        const matchesCompany = selectedCompanies.length === 0 || selectedCompanies.includes(resource.company) || resource.company === "All";

        return matchesSearch && matchesCategory && matchesCompany;
    });

    displayResources(filteredResources);
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    displayResources(resources);

    // Add event listeners to checkboxes
    const checkboxes = document.querySelectorAll('#filter-form .form-check-input');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', handleFilterChange);
    });

    // Search functionality
    document.getElementById('search-button').addEventListener('click', handleFilterChange);
    document.getElementById('search-input').addEventListener('keyup', handleFilterChange);
});
