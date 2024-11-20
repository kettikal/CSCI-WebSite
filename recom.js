// academic sources
// global scope variables
let recommended_literature_1 = [
    { title: "Social Science Crash Course", by: "CrashCourse", type: "Video", Fee: "Free", description: "For newbies who are not sure what Sociology is about.", link: "https://youtube.com/playlist?list=PL8dPuuaLjXtMJ-AfB_7J1538YKWkZAnGA&si=M0QgfLdB6uLnD3cM" },
    { title: "Capital", by: "Karl Marx", type: "Book", Fee: "$32", description: "The fundamental text that changed the course of history in 20C that every social science student must know.", link: "https://www.amazon.com/Karl-Marx-Capital/s?k=Karl+Marx+Capital" },
    { title: "Sociology and Anthropology courses", by: "Nazarbayev University", type: "Course", Fee: "Free to NU students", description: "Here are some syllabi of Sociology and Anthropology courses for you to get familiar with.", link: "https://drive.google.com/drive/folders/1r89_dTCWmc6e5Y8p-tScyZyogGsxjSj2?usp=drive_link" },
    { title: "Comparative Politics: Integrating Theories, Methods, and Cases", by: "Dickovick J. Tyler, and Jonathan Eastwood", type: "Book", Fee: "$60", description: "Offering a hybrid format, the text's unique structure offers the best of thematic and country-by-country approaches.", link: "https://global.oup.com/ushe/product/comparative-politics-9780197633304?cc=us&lang=en&" },
    { title: "Methods and Statistics in Social Sciences Specialization", by: "University of Amsterdam", type: "Online Course", Fee: "Free", description: "Critically Analyze Research and Results Using R. Learn to recognize sloppy science, perform solid research and do appropriate data analysis.", link: "https://www.coursera.org/specializations/social-science" }
  ];

 


function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// Data for hobby sources
const recommended_literature_2 = [
    {title: "Dance Club", by: "Nazarbayev University", type: "Club", Fee: "25,000 tenge per semester", description: "NUDC is one of the first clubs founded at NU that focuses on street dance, mainly hip-hop. They host workshops and dance competitions within NU, city-wide, and country-wide, giving students a lot of opportunities to grow their battle skills."},
    {title: "1Million Dance Studio", by: "YouTube channel", type: "Video", Fee: "Free", description: "1Million is a dance studio in South Korea with a YouTube channel showing their students' choreographies and tutorials for people to learn hip-hop worldwide."},
    {title: "Integrated Chinese. Level 1. Part 1", by: "Yuehua Liu and Tao-chung Yao, Nyan-Ping Bi, Liangyan Ge, Yaohua Shi", type: "Book", Fee: "Free", description: "Learn Chinese language and culture through ten engaging lessons per volume. Includes dialogues and narratives, culture notes, grammar explanations, and exercises."},
    {title: "Character Stroke Order", by: "Chinese hideout", type: "Website", Fee: "Free", description: "Click on a character below to see the correct stroke order sequence animation."},
    {title: "小舍得 A Love for Dilemma", by: "", type: "Video", Fee: "Free", description: "Chinese TV Play to listen, passively learn Chinese and Chinese culture."}
];

const pInfo = document.querySelector(".info");
recommended_literature_2.forEach(hobby => {
    let hobbyInfo = document.createElement("p");
    hobbyInfo.innerHTML = `<strong>${hobby.title}</strong> by ${hobby.by}, ${hobby.type}, Fee: ${hobby.Fee}. Description: ${hobby.description}`;
    pInfo.appendChild(hobbyInfo);
});

