/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


// Global variables 
// This method 'finds' an HTML elements 
   const myStudentsList = document.getElementsByClassName("student-item cf");
   // Displays 10 students per page
   const studentsPerPage  = 10;

// Create the `showPage` function to hide all of the items in the list exept for the ten items we want to show 
   const showPage = (list,page) => {
    const startIndex = (page * studentsPerPage)-studentsPerPage;
    const endIndex =(page * studentsPerPage);
    for 
    (let i = 0; i < list.length; i++) {
    if (i >= startIndex && i < endIndex) {
    list[i].style.display ="block";
      }
      else { 
      list[i].style.display = "none";  
      } 
      }
   }
   //Calls the function to show 10 students per page
   showPage(myStudentsList, 1);

   //Function that creates pagination buttond,adds them to DOM, and adds their functionality
    const appendPageLinks = (list) => {
      const totalPages = Math.ceil(list.length / studentsPerPage);
      let div = document.createElement("div");
      //Assing class to div
      div.className = "pagination";

    //Append div to page div
      document.querySelector(".page").appendChild(div);
      //Variable to create ul
      let ul = document.createElement("ul");
      div.appendChild(ul);
    // Create a for loop
      for(let i = 1; i <= totalPages; i++) {

      let li = document.createElement("li");
      let a = document.createElement("a");
      //Setting variable to value of i 
      a.textContent = `${i}`;     //Variable inside Templet Literal requiers ${}
      a.herf= `#`;
      if (i == 1) {
        //Add the active class name to first pagination
        a.className = "active";
      }
      ul.appendChild(li);
      li.appendChild(a);
    }

    ul.addEventListener("click", (event) => {
      const btn = event.target;
      let number = event.target.textContent;

      showPage(myStudentsList, number);

    // to 'hear' the behavior of the end user's choice
      let btns = document.querySelectorAll("a");
      for (let i = 0; i, btns.length; i++) {
        btns[i].className = "none";
      }
    
    btn.className = "active";
  
});
    }
    appendPageLinks(myStudentsList);