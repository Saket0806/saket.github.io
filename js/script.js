/*=============  typing animation ================*/ 
var typed = new Typed(".typing",{
    strings:["","Software Engineer","Software Developer","Java Developer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

/*=============  Aside ================*/ 
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length;
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;
    for(let i=0; i<totalNavList; i++)
    {
        const a = navList[i].querySelector("a");
        a.addEventListener("click", function()
        {
            removeBackSection();
            for(let j=0; j<totalNavList; j++)
            {
                if(navList[j].querySelector("a").classList.contains("active"))
                {
                    addBackSection(j);
                    // allSection[j].classList.add("back-section");
                }
                navList[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active")
            showSection(this);
            if(window.innerWidth < 1200)
            {
                asideSectionTogglerBtn();
            }
        })
    }
    function removeBackSection()
    {
        for(let i=0; i<totalSection; i++)
        {
            allSection[i].classList.remove("back-section");
        }
    } 
    function addBackSection(num)
    {
        allSection[num].classList.add("back-section");
    }
    function showSection(element)
    {
        for(let i=0; i<totalSection; i++)
        {
            allSection[i].classList.remove("active");
        }
        const target = element.getAttribute("href").split("#")[1];
        document.querySelector("#" + target).classList.add("active")
    }
    function updateNav(element)
    {
        for(let i=0; i<totalNavList; i++)
        {
            navList[i].querySelector("a").classList.remove("active");
            const target = element.getAttribute("href").split("#")[1];
            if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
            {
                navList[i].querySelector("a").classList.add("active");
            }
        }
    }
    document.querySelector(".hire-me").addEventListener("click", function()
    {
        const sectionIndex = this.getAttribute("data-section-index");
        // console.log(sectionIndex)
        showSection(this);
        updateNav(this);
        removeBackSection();
        addBackSection(sectionIndex);
    })

    const navToggletBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");
    navToggletBtn.addEventListener("click", () => {
        asideSectionTogglerBtn();
    })
    function asideSectionTogglerBtn()
    {
        aside.classList.toggle("open");
        navToggletBtn.classList.toggle("open");
        for(let i=0; i<totalSection; i++)
        {
            allSection[i].classList.toggle("open");
        }
    }



    function Maildata(event) {
        event.preventDefault();
        // var x = document.getElementById("name").value;
        // console.log('dsds')
        // return confirm('Hiya,'+ x);
        Email.send({
            Host : "smtp.gmail.com",
            Username : "vivekverion@gmail.com",
            Password : "vivek@123",
            To : 'vivekverion@gmail.com',
            From : document.getElementById("email").value,
            Subject : "This is the subject",
            Body : "And this is the body"
        }).then(
          message => alert(message)
        );
}
