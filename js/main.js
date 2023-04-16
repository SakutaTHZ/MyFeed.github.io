window.onload = () =>{
    for (let index = 0; index < 3; index++) {
        generatePosts()
    }
}

$(document).ready(function () { $(".post-image").click(function () { this.requestFullscreen() }) });

// Generate random Posts
function generatePosts() {
	let postOwner = generator();
	let commentOwner = generator();
	let postedTime = Math.floor(Math.random() * 60);
    let parent = document.querySelector('.post-section');
    let child = document.createElement('div');
	observer.observe(child);
    child.className='post';
	// child.classList.add('show');
    child.innerHTML = `
            <div class="post-head">
				<div class="post-user-info">
					<img class="profile" src="https://api.dicebear.com/6.x/notionists/svg?seed=${postOwner}" alt="profile">
					<span class="active no"></span>
					<div class="post-username-box">
						<p>${postOwner}</p>
						<p>${postedTime} mins ago</p>
					</div>
				</div>
				<div class="post-option">
					<span class="material-symbols-outlined">
						more_horiz
					</span>

					<div class="post-option-box">
						<p>
							<span class="material-symbols-outlined">
								star
							</span>
							Star
						</p>
						<p>
							<span class="material-symbols-outlined">
								download
							</span>
							Download
						</p>
						<p>
							<span class="material-symbols-outlined">
								report
							</span>
							Report
						</p>
					</div>
				</div>
			</div>

			<div class="post-body">
				<p>${generateComment()}</p>
				<img style="--iColor:${getRandomColor()};" class="post-image" src="https://api.dicebear.com/6.x/notionists/svg?seed=${postOwner}" alt="profile">
			</div>

			<div class="post-foot">
				<button>
					<span class="material-symbols-outlined">
						favorite
					</span>
					<span class="like-count">
						${Math.floor(Math.random() * 101)}
					</span>
				</button>
				<div class="comment-button">
					<div class="comment-box">
						<textarea name="" id="" cols="46" rows="2" placeholder="Comment Here"></textarea>
						<button>
							<span class="material-symbols-outlined">
								send
							</span>
						</button>
					</div>
					<span class="material-symbols-outlined">
						chat_bubble
					</span>
					<span class="comment-count">
						${Math.floor(Math.random() * 50)}
					</span>
				</div>
				<button>
					<span class="material-symbols-outlined">
						share
					</span>
					<span class="share-count">
						${Math.floor(Math.random() * 10)}
					</span>
				</button>
			</div>

			<div class="comments">
				<div class="comment">
					<div class="comment-username-box">
						<img class="profile" src="https://api.dicebear.com/6.x/notionists/svg?seed=${commentOwner}" alt="profile">
						<div class="post-username-box">
							<p>${commentOwner}</p>
							<p>${Math.floor(Math.random() * postedTime)} mins ago</p>
						</div>
					</div>
					<p class="comment-content">${generateComment()}</p>
				</div>
				<button class="seemore">See more ...</button>
			</div>
    `
    parent?.append(child);

	posts = document.querySelectorAll(".post");
}

let posts = document.querySelectorAll(".post");

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle("show", entry.isIntersecting)
            // if (entry.isIntersecting) observer.unobserve(entry.target)
        })
    },
    {
        rootMargin: "-40px"
    }
)

const lastPostObserver = new IntersectionObserver(
	entries => {
		const lastPost = entries[0]
		if(!lastPost.isIntersecting) return 
		loadNewPosts()
		lastPostObserver.unobserve(lastPost.target)
		lastPostObserver.observe(document.querySelector(".post:last-child"))
	},{}
)

setTimeout(() => {
	if(document.querySelector(".post:last-child")) lastPostObserver.observe(document.querySelector(".post:last-child"))
}, 2000);

function loadNewPosts(){
	for (let index = 0; index < 5; index++) {
		generatePosts();
	}
}

posts.forEach(post => {
	observer.observe(post);
})

document.querySelector('.setting-button')?.addEventListener(
	"click",
	() => {
		document.querySelector('.setting-box').classList.toggle('show');
	},
	false
)