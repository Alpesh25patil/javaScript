const color=document.querySelectorAll('.color')
const body=document.querySelector('body')
color.forEach(function(ele){
    ele.addEventListener('click',function(e){
        if(e.target.id=='black')
        {
            body.style.backgroundColor=e.target.id
        }
        if(e.target.id=='blue')
        {
            body.style.backgroundColor=e.target.id
        }
        if(e.target.id=='white')
        {
            body.style.backgroundColor=e.target.id
        }
        if(e.target.id=='grey')
        {
            body.style.backgroundColor=e.target.id
        }
        if(e.target.id=='red')
        {
            body.style.backgroundColor=e.target.id
        }
    })
    
})