// ========== Cards =================


const stages = [
    {
        id: "1",
        stageTitle: "What is the complexity of the app you want to develop?",
        price: [1000, 2500, 4000, 6000],
        options: [
            { imgSrc: "../Docs/Images/image (2).png", text: "Basic - Simple functionality" },
            { imgSrc: "../Docs/Images/image (3).png", text: "Medium - Standard features" },
            { imgSrc: "../Docs/Images/image (5).png", text: "High - Advanced capabilities" },
            { imgSrc: "../Docs/Images/image (6).png", text: "Very High - Complex architecture" }
        ]
    },
    {
        id: "2",
        stageTitle: "Which platform will you use?",
        price: [2000, 1500, 3000, 2500],
        options: [
            { imgSrc: "../Docs/Images/image (7).png", text: "Mobile - iOS & Android" },
            { imgSrc: "../Docs/Images/image (3).png", text: "Desktop - Windows/Mac" },
            { imgSrc: "../Docs/Images/image (8).png", text: "Web - Browser access" },
            { imgSrc: "../Docs/Images/image (9).png", text: "Both - Web & Mobile" },
        ]
    },
    {
        id: "3",
        stageTitle: "What type of database do you need?",
        price: [1000, 1500, 2000, 2500],
        options: [
            { imgSrc: "../Docs/Images/image (6).png", text: "NoSQL - Flexible Schema" },
            { imgSrc: "../Docs/Images/image (3).png", text: "SQL - Structured Data" },
            { imgSrc: "../Docs/Images/image (5).png", text: "Hybrid - Combination of both" },
            { imgSrc: "../Docs/Images/image (7).png", text: "Custom - Tailored Data Model" }
        ]
    },
    {
        id: "4",
        stageTitle: "Do you need third-party integrations?",
        price: [0, 1000, 2000, 3000],
        options: [
            { imgSrc: "../Docs/Images/image (8).png", text: "None - No integration" },
            { imgSrc: "../Docs/Images/image (9).png", text: "Some - Basic integrations" },
            { imgSrc: "../Docs/Images/image (5).png", text: "Multiple - Standard integrations" },
            { imgSrc: "../Docs/Images/image (3).png", text: "Advanced - Full integration suite" }
        ]
    },
    {
        id: "5",
        stageTitle: "What level of security do you require?",
        price: [500, 1500, 2500, 4000],
        options: [
            { imgSrc: "../Docs/Images/image (7).png", text: "Advanced - Data protection" },
            { imgSrc: "../Docs/Images/image (5).png", text: "Basic - Essential security" },
            { imgSrc: "../Docs/Images/image (6).png", text: "Standard - Encrypted data" },
            { imgSrc: "../Docs/Images/image (8).png", text: "Maximum - Full security suite" }
        ]
    },
    {
        id: "6",
        stageTitle: "What user authentication method will you use?",
        price: [500, 1500, 2500, 3000],
        options: [
            { imgSrc: "../Docs/Images/image (6).png", text: "Basic Login - Username & Password" },
            { imgSrc: "../Docs/Images/image (2).png", text: "OAuth - Social login" },
            { imgSrc: "../Docs/Images/image (3).png", text: "MFA - Multi-Factor Authentication" },
            { imgSrc: "../Docs/Images/image (5).png", text: "Biometric - Fingerprint/FaceID" }
        ]
    },
    {
        id: "7",
        stageTitle: "What level of design customization do you need?",
        price: [2500, 1000, 3000, 4000],
        options: [
            { imgSrc: "../Docs/Images/image (6).png", text: "Custom Design - Unique style" },
            { imgSrc: "../Docs/Images/image (5).png", text: "Template-Based - Standard layout" },
            { imgSrc: "../Docs/Images/image (8).png", text: "Highly Customized - Tailored UX/UI" },
            { imgSrc: "../Docs/Images/image (9).png", text: "Premium - Full design freedom" }
        ]
    },
    {
        id: "8",
        stageTitle: "Do you need analytics integration?",
        price: [0, 500, 1500, 2000],
        options: [
            { imgSrc: "../Docs/Images/image (2).png", text: "No Analytics - No tracking" },
            { imgSrc: "../Docs/Images/image (3).png", text: "Basic Tracking - Simple metrics" },
            { imgSrc: "../Docs/Images/image (5).png", text: "Advanced Analytics - Full insights" },
            { imgSrc: "../Docs/Images/image (6).png", text: "Custom Reports - Detailed analysis" }
        ]
    },
    {
        id: "9",
        stageTitle: "What type of testing do you require?",
        price: [1000, 2000, 2500, 3000],
        options: [
            { imgSrc: "../Docs/Images/image (7).png", text: "Unit Testing - Code-level tests" },
            { imgSrc: "../Docs/Images/image (5).png", text: "Performance Testing - Load testing" },
            { imgSrc: "../Docs/Images/image (8).png", text: "Integration Testing - End-to-end" },
            { imgSrc: "../Docs/Images/image (2).png", text: "Automated Testing - Full coverage" }
        ]
    },
    {
        id: "10",
        stageTitle: "Do you need post-launch support?",
        price: [0, 500, 1500, 3000],
        options: [
            { imgSrc: "../Docs/Images/image (3).png", text: "No Support - Self-managed" },
            { imgSrc: "../Docs/Images/image (6).png", text: "Extended Support - Regular updates" },
            { imgSrc: "../Docs/Images/image (5).png", text: "Basic Support - Bug fixes" },
            { imgSrc: "../Docs/Images/image (7).png", text: "Premium Support - 24/7 Assistance" }
        ]
    }
];

let currentStage = 0;
let totalPrice = 0;

function startSurvey() {
    document.getElementById("introSection").classList.add("hidden");
    document.getElementById("secondIntroSection").classList.remove("hidden");
}

function startSurveySercond() {
    document.getElementById("stageContainer").classList.remove("hidden");
    document.getElementById("secondIntroSection").classList.add("hidden");
    updateStage();
}

function bookCall() {
    document.getElementById("finalPrice").classList.add("hidden");
    document.getElementById("form").classList.remove("hidden");
}

document.getElementById("startButton").addEventListener("click", startSurvey);
document.getElementById("bookCall").addEventListener("click", bookCall);

const buttons = document.getElementsByClassName("secondIntroSectionBtn");
Array.from(buttons).forEach(button => {
    button.addEventListener("click", startSurveySercond);
});

function updateStage() {
    const stageData = stages[currentStage];
    const stageContainer = document.getElementById("stageContainer");

    stageContainer.innerHTML = `
    <p class="text-white text-xl w-full text-center pb-8">${stageData.id} / ${stages.length}</p>
    <h2 class="text-2xl font-semibold text-center">${stageData.stageTitle}</h2>
    <div class="grid md:grid-cols-4 grid-cols-2 md:gap-3 gap-1.5 mt-4">
        ${stageData.options.map((option, index) => `
            <div onclick="selectOption(${index})" class="md:p-5 p-2 fadeIn hover:-translate-y-3 mt-10 duration-300 cursor-pointer rounded-lg hover:bg-[#16062f] hover:border-zinc-500 border border-[#0e041e] transition-all">
                <img src="${option.imgSrc}" class="w-full mx-auto md:px-10 md:py-5" alt="${option.text}">
                <p class="text-center pt-3 text-sm md:text-[16px]">${option.text}</p>
            </div>`).join('')}
    </div>
`;
}

function selectOption(index) {
    totalPrice += stages[currentStage].price[index];
    if (currentStage < stages.length - 1) {
        currentStage++;
        updateStage();
    } else {
        displayFinalPrice();
    }
}

function goBack() {
    if (currentStage > 0) {
        currentStage--;
        updateStage();
    }
}

function displayFinalPrice() {
    document.getElementById("stageContainer").classList.add("hidden");
    document.getElementById("finalPrice").classList.remove("hidden");
    document.getElementById("priceDisplay").innerText = `€ ${totalPrice}`;
}


// ========== Cards =================

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        640: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 3
        },
        1024: {
            slidesPerView: 4
        }
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
    },
    autoplay: {
        delay: 3000,
    },
    loop: true,
});

const lenis = new Lenis();
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina",
    "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados",
    "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana",
    "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon",
    "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)",
    "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia (Czech Republic)", "Denmark", "Djibouti", "Dominica",
    "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia",
    "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti",
    "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy",
    "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos",
    "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg",
    "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania",
    "Mauritius", "Mexico", "Micronesia (Federated States of)", "Moldova (Republic of)", "Monaco", "Mongolia",
    "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands",
    "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", "Norway", "Oman", "Pakistan",
    "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland",
    "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia",
    "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia",
    "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands",
    "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname",
    "Sweden", "Switzerland", "Syria", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo",
    "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine",
    "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan",
    "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];

const countrySelect = document.getElementById('country');

countries.forEach(country => {
    const option = document.createElement('option');
    option.value = country;
    option.textContent = country;
    option.classList.add("text-black");
    countrySelect.appendChild(option);
});


const languages = [
    "English", "Spanish", "French", "German", "Chinese", "Japanese", "Korean",
    "Russian", "Portuguese", "Italian", "Arabic", "Hindi", "Bengali", "Punjabi",
    "Urdu", "Indonesian", "Turkish", "Vietnamese", "Thai", "Persian", "Swedish",
    "Dutch", "Greek", "Czech", "Danish", "Finnish", "Norwegian", "Polish", "Romanian",
    "Hungarian", "Hebrew", "Malay", "Filipino", "Swahili", "Zulu", "Afrikaans"
];

const languageSelect = document.getElementById('language');

languages.forEach(language => {
    const option = document.createElement('option');
    option.value = language;
    option.textContent = language;
    option.classList.add("text-black");
    languageSelect.appendChild(option);
});