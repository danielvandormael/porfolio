window.addEventListener('scroll', scrollNavBar);

function scrollNavBar() 
{
    //navbar
    if ( (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) && document.documentElement.clientWidth <= 600) {
        document.getElementById("navbar").style.backgroundColor = "rgba(var(--black), 0.7)";
    } else {
        document.getElementById("navbar").style.backgroundColor = "rgb(var(--black))";
    }

}

document.addEventListener("DOMContentLoaded", () => {

    const observerStatic = new IntersectionObserver(
        entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle("show", entry.isIntersecting);
            if(entry.isIntersecting) observerStatic.unobserve(entry.target);
        })
        },
        {
            threshold: 0.5,
        }
    )

    const cells = document.querySelectorAll(".cell");


    cells.forEach(cell => {
        observerStatic.observe(cell)
    });

    const resumes = document.querySelectorAll(".entry-wrapper");

    resumes.forEach(resume => {
        observerStatic.observe(resume)
    });

    const observerDynamic = new IntersectionObserver(
        entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle("show", entry.isIntersecting);
        })
        },
        {
            threshold: 0.5,
        }
    )
});

