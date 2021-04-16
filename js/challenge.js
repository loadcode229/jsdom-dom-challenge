document.addEventListener("DOMContentLoaded", function() {
    const counter = document.getElementById('counter')
    const plus = document.getElementById('plus')
    const minus = document.getElementById('minus')
    const like = document.getElementById('heart')
    const pause = document.getElementById('pause')
    const submit = document.getElementById('submit')
    const likes = document.getElementsByClassName('likes')[0]
    const comments = document.getElementById('list')
    const commentForm = document.getElementsByTagName('input')[0]

    let timer = setInterval(numCounter, 1000)
    let counting = true

    function numCounter() {
        if (counting === true) {
            counter.innerHTML++
        }
    };

    plus.addEventListener("click", function() {
        counter.innerHTML++
    });

    minus.addEventListener("click", function() {
        counter.innerHTML--
    });

    like.addEventListener("click", function() {
        const likesList = document.createElement("li");
        let likeCounter = document.createTextNode(`${counter.innerHTML} has been liked 1 times.`);
        likesList.appendChild(likeCounter);
        likes.appendChild(likesList);
    });

    submit.addEventListener("click", function() {
        event.preventDefault();
        const newComment = document.createElement("p");
        let commentInput = document.createTextNode(`${commentForm.value}`);
        newComment.appendChild(commentInput);
        comments.appendChild(newComment);
        commentForm.value ='';
    });

    pause.addEventListener("click", function() {
        if (counting === true) {
            counting = false
            pause.innerHTML = "resume";
            plus.disabled = true;
            minus.disabled = true;
            like.disabled = true;
            submit.disabled = true;
            commentForm.disabled = true;
        } else {
            counting = true;
            pause.innerHTML = "pause"
            plus.disabled = false;
            minus.disabled = false;
            like.disabled = false;
            submit.disabled = false;
            commentForm.disabled = false;
        };
    });
});