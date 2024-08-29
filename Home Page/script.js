var a =document.getElementById("con1")

a.innerHTML+=`<div class="post m-5">
            <div class="post-header">
                <img src="6.jpeg" alt="Profile Picture" height="20px" >
                <span class="ms-5">Sample_Post</span>
                <span style="margin-left:auto;">5h</span>
            </div>
            <div class="post-image m-3">
          <video id="postVideo" src="vid.mp4"  width="100%"></video>


                
            </div>
            
                <div class="post footer">
                    <div class="icon1">
                <i class="fa-regular fa-heart"data-bs-target="#demo3" data-bs-toggle="offcanvas"></i>
                <i class="fa-regular fa-comment ms-3"data-bs-target="#demo4" data-bs-toggle="offcanvas"></i>
                <i class="fa-solid fa-paper-plane ms-3"></i></div>
                <div class="likes">
                    <span>Liked by shree.2309 and others</span>
                </div>
                <div class="caption">
                    <span><strong>sample_post</strong></span>
                    <span>Sample Post Description</span>
                </div>
            </div>
        </div>
        `
    
    document.addEventListener('DOMContentLoaded', function() {
        const video = document.getElementById('postVideo');

        function checkVideoVisibility() {
            const rect = video.getBoundingClientRect();
            const isVisible = (rect.top >= 0 && rect.bottom <= window.innerHeight);

            if (isVisible) {
                if (video.paused) {
                    video.play();
                }
            } else {
                if (!video.paused) {
                    video.pause();
                }
            }
        }

        document.addEventListener('scroll', checkVideoVisibility);
        window.addEventListener('resize', checkVideoVisibility);


        checkVideoVisibility();
    });

