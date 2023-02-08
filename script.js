const container = document.querySelector(".container")
fetch("./data.json")
  .then((response) => response.json())
  .then((json) => json.quotes.forEach(quote =>{
    // console.log(quote)
    // create a new div with a panel class
    const panel = document.createElement('div')
    panel.classList.add("panel")
    panel.innerHTML = `<h3>${quote.title}</h3>`
    container.appendChild(panel)   
    // 

    // after creating, keep the elements in panels variable.
    var panels = document.querySelectorAll(".panel");
    panels[0].classList.add('active')    
    //

    // add eventlistener to each and every panels
    panels.forEach((panel) =>{
      panel.addEventListener("click", () => {
        removeActiveClasses()
        panel.classList.add("active")
      })
    })
    //

    // remove active class from the panels.
    function removeActiveClasses() {
      panels.forEach((panel) => {
        panel.classList.remove("active");
      });
    }
    //

  }));