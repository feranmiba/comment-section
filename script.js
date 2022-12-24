'use strict'
const replyThem = document.querySelectorAll('.reply');
const sendIt = document.querySelector('.comment__send');
const sendItMobile = document.querySelector('.mobilesend');
const howItWillBe = document.querySelector('.same');
const howItWillBeSecond = document.querySelector('.mobile');
const addAcomment = document.querySelector('.onit');
const commentsContainer = document.getElementById('allcomments')
const showReply= document.querySelectorAll('.reply--sec')
const insideReplies = document.querySelectorAll('.comment__reply')
const plus = document.querySelectorAll('.plus')
const minus = document.querySelectorAll('.minus')
const score = document.querySelectorAll('.score')
const deleted = document.querySelector('.delete')
//THE REPLIES SECTIONS
replyThem.forEach(function (re, i, arr) {
  re.addEventListener('click', (e) => {
    let parentContainer = e.target.closest('.section--1')
   let _id = parentContainer.id

   showReply.forEach(showit => {
    const amen =  showit.getAttribute('id')
    if (_id == amen) {
   showit.classList.toggle('hidden')
    }
    insideReplies.forEach(replies => {
        replies.addEventListener('click', (e) =>{
            let element = e.target.closest('.reply--sec')
            let __id = element.id
            console.log(__id);
            if(__id == amen) {
                 showit.classList.add('hidden')
             }
        })
    })
    })
   
  })
});
//DONE

const commentsArr = [...addAcomment.value]
console.log(commentsArr);



sendIt.addEventListener('click',  (e) =>{
    e.preventDefault();  
    // const date = timePassed()
   const text = addAcomment.value

    const html = `
    <section class="section--1 third same" >
        <main>
             <p>
        <ol class="list">
              <li class="plus lis"><img src="./images/icon-plus.svg"/></li> 
               <li class="score  lis"> <strong>0</strong></li> 
               <li class="minus  lis"> <img src="./images/icon-minus.svg"/></li>  
        </ol>
             </p>
        <nav class="space move">
             <p><img src="./images/avatars/image-juliusomo.png" class="picname"/> <p class="beat  real"><strong class="username">juliusomo</strong> <em class="you">you</em> <em class="createdAt">Now</em></p> </p> 
             <p class="deleted"><img src="./images/icon-delete.svg"/><em class="delete">Delete</em></p>
             <p><img src="./images/icon-edit.svg"/> <em class="edit">Edit</em></p>
         </nav>
        </main>
       <p class="content">${text}</p>
</section>    
        `
        howItWillBe.insertAdjacentHTML('afterend', html)
        // howItWillBe.appendChild(html)
 
                     
        addAcomment.value = ``

        commentsArr.push(html)
})
sendItMobile.addEventListener('click',  (e) =>{
  e.preventDefault();  
    // const date = timePassed()
   const text = addAcomment.value
 
      const mobileHtml = ` 
      <section class="section--1 third same mobile" >
              <main>
                
                  <nav class="space move">
                      <p><img src="./images/avatars/image-juliusomo.png" class="picname"/> <p class="beat  real"><strong class="username">juliusomo</strong> <em class="you">you</em> <em class="createdAt">Now</em></p> </p> 
                    
                  </nav>
              </main>
              <p class="content">${text}</p>
                  <div class="space shit">
                      <ol class="lists">
                          <li class="plus  nav__item lis"><img src="./images/icon-plus.svg"/></li>
                          <li class="score nav__item lis"> <strong>0</strong></li> 
                          <li class="minus nav__item lis"> <img src="./images/icon-minus.svg"/></li>  
                      </ol>
  
                      <p class="deleted"><img src="./images/icon-delete.svg"/><em class="delete">Delete</em></p>
                      <p><img src="./images/icon-edit.svg"/> <em class="edit">Edit</em></p>
                      
                  </div>
              </section>
      `
howItWillBeSecond.insertAdjacentHTML('afterend', mobileHtml)
      addAcomment.value = ``

      commentsArr.push(mobileHtml)
})

//help me with delete and edit this is all i can do 
//THANK YOU  








const future = new Date()
console.log(future.getTime());
console.log(Date.now());