const jobList =  document.getElementsByClassName("job-contents")[0];
window.onload = () => {
    const ITHeight =  document.getElementById("job-IT").scrollHeight;
    jobList.style.height = `${ITHeight}px`;
}

// Só consegui fazer funcionar guardando o valor da height em uma const, se pego direto
// o valor sofre mutação.
function fitContent(anchor, targetDiv, elementOneID, elementOneHeight, elementTwoHeight){
    let sameID = anchor.getAttribute("href").includes(elementOneID);
    let elementHeight =  sameID ? elementOneHeight : elementTwoHeight;
    
    targetDiv.style.height = `${elementHeight}px`
}

const projectOptions = document.querySelectorAll(".project-menu > a")
projectOptions.forEach(a => {
    const projectList = document.getElementsByClassName("project-list")[0];
    
    const personalID = document.getElementById("project-perso-list").getAttribute("id");
    const personalHei = document.getElementById("project-perso-list").scrollHeight;
    const workHei = document.getElementById("project-work-list").scrollHeight;
    

    a.addEventListener('click', function() {
        fitContent(
            a,
            projectList,  
            personalID, personalHei ,
            workHei
        )
      }
    );
})

const jobHistoryOptions = document.querySelectorAll(".job-nav > a")
jobHistoryOptions.forEach(a => {
    const jobList =  document.getElementsByClassName("job-contents")[0];

    const ITID = document.getElementById("job-IT").getAttribute("id");
    const ITHeight =  document.getElementById("job-IT").scrollHeight;
    const recHeight = document.getElementById("job-REC").scrollHeight;

    a.addEventListener('click', function() {
        fitContent(
            a,
            jobList,
            ITID, ITHeight,
            recHeight
        )
    })
})

