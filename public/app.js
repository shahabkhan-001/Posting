let timelinepost = document.getElementById("timelinepost")
let postSection = document.getElementById("post-section")
function postSelector() {
    timelinepost.style.display = "none"
    postSection.style.display = "block"
}
let allName = [];
let allTitle = [];
let allPosts = [];

function submitPost() {
    let postName = document.getElementById("post-name")
    let postTitle = document.getElementById("post-title")
    let val = document.getElementById("post-value");
    let timeline = document.getElementById("timeline");
    allName.unshift(postName.value);
    allTitle.unshift(postTitle.value);
    allPosts.unshift(val.value);

    timeline.innerHTML = "";
     for(var i = 0; i < allName.length; i++){
        for(var i = 0; i < allTitle.length; i++){
            for(var i = 0; i < allPosts.length; i++){
                
                timeline.innerHTML += `
                <section class="border my-5" style="box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;">
                <div class="post border border-bottom-0 p-3" style="background-color :#F8F9FA;">
                <h3>${allName[i]}</h3>
                </div>
                <div class="post post border border-top-0 p-2" style="background-color :#F8F9FA;">
                <h5>${allTitle[i]}</h5>
                </div>
                <div class="post p-3" style="border : 1px 0 solid">
                <h1>${allPosts[i]}</h1>
                <div class="like-button d-flex justify-content-around">
                <button onclick="likePost()" id="like-btn"><i class="fa-regular fa-thumbs-up"></i> Like</button>
                <button id="comment-btn"><i class="fa-regular fa-comment-dots"></i> Comment</button>
                <button id="share-btn"><i class="fa-solid fa-share"></i> Share</button>
                </div>
                </div>
                </section>
                `;
            }
        }
    }
    postName.value = "";
    postTitle.value = "";
    val.value = "";
    postSection.style.display = "none"
    timelinepost.style.display = "block"   
}
function likePost() {
    let likeBtn = document.getElementById("like-btn")
    likeBtn.style.color = "#1877F2"
}