// UI Vars 
const postDiv3 = document.getElementById('thePosts');

//Load Every thing ....
document.addEventListener("DOMContentLoaded", () => {
    // load_fromPlaceHolder();
    loadDataNew();
});


//load post from fake api function 
// function load_fromPlaceHolder() {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(function (res) {
//             return res.json();
//         }).then(function (posts) {
//             let output = '';
//             posts.forEach(function (post) {
//                 output += `
//                 <div class="item">
//                     <div class="image"> <img src="${post.image}"> </div>
//                     <div class="content">
//                         <a class="header" href="#" id="bTitle"> ${post.userId} </a>
//                         <div class="meta">
//                             <span id="bDate">${post.id}</span>
//                             <span>By: <a href="#" id="bAuthor">${post.title}</a></span>
//                         </div>
//                         <div class="description"><p id="bDesc">${post.body}</p></div>
//                         <div class="extra"><a class="ui floated basic violet button" href="#">Read More</a></div>
//                     </div>
//                 </div>
//                 `
//             })
//             postDiv3.innerHTML = output;
//         }).catch(function (e) {
//             console.log(e);
//         })
// }

//async await
async function load_fromPlaceHolder_new() {
    let res = await fetch('https://jsonplaceholder.typicode.com/posts');

    let data = await res.json();

    return data;
}

function loadDataNew() {
    load_fromPlaceHolder_new()
        .then(function (posts) {
            let output = "";
            posts.forEach(post => {
                output += `
                    <div class="item">
                        <div class="image"> 
                            <img src="https://images.unsplash.com/photo-1499482125586-91609c0b5fd4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"> 
                        </div>
                        <div class="content">
                            <a class="header" href="#" id="bTitle">
                            ${post.title.toUpperCase()}
                            </a>
                            <div class="description">
                                <p id="bDesc">
                                    ${post.body}
                                </p>
                            </div>
                            <div class="extra">
                                <a class="ui floated basic violet button" href="#">Read Mores</a>
                            </div>
                        </div>
                    </div>    
                    `
            })
            setTimeout(function () {
                postDiv3.innerHTML = output;
            }, 500)
        })
}