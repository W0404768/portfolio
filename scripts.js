
 const javascript = "javascript";

window.addEventListener('load', function () {

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
          e.preventDefault();
    
          document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
          });
        });
      });






    document.querySelector("#javascript").addEventListener('click', function(){
            hideAll();
            let selects = document.getElementsByClassName("javascript")
                for(let i =0, il = selects.length;i<il;i++){
                selects[i].style.display = " block";
                }
    } );

    document.querySelector("#java").addEventListener('click', function(){
        hideAll();
        let selects = document.getElementsByClassName("java")
        for(let i =0, il = selects.length;i<il;i++){
            selects[i].style.display = " block";
        }
    } );

    document.querySelector("#go").addEventListener('click', function(){
        hideAll();
        let selects = document.getElementsByClassName("go")
        for(let i =0, il = selects.length;i<il;i++){
            selects[i].style.display = " block";
        }
    } );

    document.querySelector("#react").addEventListener('click', function(){
        hideAll();
        let selects = document.getElementsByClassName("react")
        for(let i =0, il = selects.length;i<il;i++){
            selects[i].style.display = " block";
        }
    } );

    document.querySelector("#nodejs").addEventListener('click', function(){
        hideAll();
        let selects = document.getElementsByClassName("nodejs")
        for(let i =0, il = selects.length;i<il;i++){
            selects[i].style.display = " block";
        }
    } );

    document.querySelector("#restful").addEventListener('click', function(){
        hideAll();
        let selects = document.getElementsByClassName("restful")
        for(let i =0, il = selects.length;i<il;i++){
            selects[i].style.display = " block";
        }
    } );

    document.querySelector("#all").addEventListener('click', function(){
        let selects = document.getElementsByClassName("samples")
        for(let i =0, il = selects.length;i<il;i++){
            selects[i].style.display = " block";
        }
    } );


});


function hideAll() {

    let selects = document.getElementsByClassName("samples")
    for(let i =0, il = selects.length;i<il;i++){
        selects[i].style.display = "none";
    }
 }




