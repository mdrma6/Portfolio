// Paste hosted links here (Google Drive, GitHub, etc.). Empty = shows "link coming soon".
var LINKS={github:""};
var IMG={
  "oracle": "assets/certificates/oracle.jpg",
  "sc900": "assets/certificates/sc900.jpg",
  "gcloud": "assets/certificates/gcloud.jpg",
  "iitm": "assets/certificates/iitm.jpg",
  "fractal": "assets/certificates/fractal.jpg",
  "aws": "assets/certificates/aws.jpg",
  "deloitte": "assets/certificates/deloitte.jpg",
  "tataviz": "assets/certificates/tataviz.jpg",
  "walmart": "assets/certificates/walmart.jpg",
  "hpe": "assets/certificates/hpe.jpg",
  "jpm": "assets/certificates/jpm.jpg",
  "tatagenai": "assets/certificates/tatagenai.jpg",
  "resume": "assets/resume-page1.jpg"
};
var P=[
["CodeArena — Online Coding Judge","Java · Spring Boot · React",["Built a full-stack coding platform where users browse problems, submit solutions, and receive results based on test cases.","Developed the Spring Boot backend for user accounts, problems, submissions, and test cases.","Built the React frontend with problem search, difficulty filters, submission history, and a leaderboard."]],
["CareerMatch AI — Resume & Job Matching","Python · NLP · React",["Developed a platform that compares resumes with job descriptions, highlighting matching skills, missing skills, and overall job fit.","Applied NLP to extract skills, education, experience, and keywords from resumes and job descriptions.","Created a React dashboard showing match scores, skill gaps, and profile improvement suggestions."]],
["Healthcare Platform for Rural Communities","HTML · Tailwind CSS · AI Days 2025 Finalist",["Developed a web platform to improve medical accessibility for remote and rural communities.","Built the frontend with HTML and Tailwind CSS, simplifying access to healthcare information and services.","Presented at AI Days 2025 (Tech Mahindra), where the team reached the finalist stage."]],
["Hand Gesture-Based Virtual Mouse","Python · OpenCV · MediaPipe",["Developed a gesture-controlled virtual mouse using real-time hand tracking and gesture recognition.","Enabled cursor movement and basic mouse operations through a touch-free interaction system."]],
["Heart Disease Prediction","Machine Learning · Classification",["Built a model to predict the likelihood of heart disease from health-related input features.","Applied data preprocessing, feature analysis, and classification techniques."]],
["Internship Fit Predictor","Machine Learning · Predictive Modeling",["Estimated how well a candidate's profile matches internship opportunities.","Worked on data preprocessing, feature analysis, and predictive modeling."]],
["MPG Prediction","Machine Learning · Regression",["Developed a regression model to predict vehicle fuel efficiency (miles per gallon).","Used EDA and regression to analyze relationships between vehicle attributes and fuel efficiency."]],
["Customer Segmentation","Machine Learning · Clustering",["Grouped customers by shared characteristics and behavioral patterns using clustering and EDA.","Explored how segments can support business insights and targeted marketing."]],
["Cat and Dog Image Classification","SVM · Image Preprocessing",["Developed an image classification model to distinguish cats from dogs using a Support Vector Machine.","Handled image preprocessing and model training."]]];
var S={"Languages":["Java","Python","C","SQL","JavaScript"],"Web / Development":["HTML","CSS","React","REST APIs"],"Tools":["Git","Playwright","Jupyter Notebook"],"Data Science / ML":["Pandas","NumPy","Scikit-learn","Matplotlib","Seaborn"],"Core CS":["Data Structures & Algorithms","OOP","DBMS","Operating Systems","SDLC"],"Cloud":["AWS Academy Cloud","Oracle Cloud Infrastructure","Microsoft Azure"],"Professional":["Communication","Leadership","Teamwork","Collaboration","Presentation"]};
var C=[
["Oracle Cloud Infrastructure 2025 Certified Generative AI Professional","Oracle University · Sep 2025","oracle"],
["Microsoft Certified: Security, Compliance, and Identity Fundamentals","Microsoft · Feb 2024","sc900"],
["Introduction to Generative AI Studio","Google Cloud × Simplilearn SkillUP · Apr 2026","gcloud"],
["Cyber Security and Ethical Hacking","E-Cell IIT Madras × Coincent · Jan 2024","iitm"],
["Solutions Architecture Job Simulation","AWS × Forage · Jun 2025","aws"],
["Data Analytics Job Simulation","Deloitte × Forage · Jun 2025","deloitte"],
["Data Visualisation: Empowering Business with Effective Insights","Tata × Forage · Jun 2025","tataviz"],
["Advanced Software Engineering Job Simulation","Walmart Global Tech × Forage · Jun 2025","walmart"],
["Software Engineering Job Simulation","Hewlett Packard Enterprise × Forage · Jun 2025","hpe"],
["Software Engineering Job Simulation","JPMorgan Chase & Co. × Forage · Aug 2025","jpm"],
["GenAI Powered Data Analytics Job Simulation","Tata × Forage · Apr 2026","tatagenai"]];
var pg=document.getElementById("pg");
P.forEach(function(p){var d=document.createElement("div");d.className="c";d.innerHTML="<h3>"+p[0]+"</h3><div class='m'>"+p[1]+"</div><ul>"+p[2].map(function(b){return"<li>"+b+"</li>"}).join("")+"</ul>";pg.appendChild(d)});
var sk=document.getElementById("sk");
for(var k in S){var d=document.createElement("div");d.innerHTML="<h3>"+k+"</h3>"+S[k].map(function(s){return"<span class='chip'>"+s+"</span>"}).join("");sk.appendChild(d)}
var cg=document.getElementById("cg");
var lb=document.createElement("div");lb.id="lb";document.body.appendChild(lb);
lb.onclick=function(){lb.className="";lb.innerHTML=""};
function show(k){var a=[].concat(IMG[k]);lb.innerHTML="<span>&times;</span>"+a.map(function(s){return"<img alt='' src='"+s+"'>"}).join("");lb.className="on";lb.scrollTop=0}
C.forEach(function(c){var d=document.createElement("div");d.className="c cert";d.innerHTML="<img class='th' alt='"+c[0]+"' src='"+IMG[c[2]]+"'><div class='bd'><div><h3>"+c[0]+"</h3><div class='m'>"+c[1]+"</div></div><button>View full certificate ↗</button></div>";cg.appendChild(d);d.querySelector(".th").onclick=d.querySelector("button").onclick=function(){show(c[2])}});
var R=document.getElementById("resume");R.href="#";R.onclick=function(e){e.preventDefault();show("resume")};
var F=document.getElementById("fractal");F.href="#";F.onclick=function(e){e.preventDefault();show("fractal")};
var G=document.getElementById("gh");if(LINKS.github){G.href=LINKS.github;G.target="_blank";G.rel="noopener"}else G.style.display="none";
document.addEventListener("keydown",function(e){if(e.key==="Escape")lb.onclick()});
