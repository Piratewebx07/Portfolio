// Function to open the image in a modal (80% fullscreen)
function openFullscreen(imageId) {
    var img = document.getElementById(imageId);
    var src = img.src;

    var modal = document.createElement('div');
    modal.classList.add('fullscreen-container');
    modal.onclick = function() {
        modal.remove();  // Close on clicking anywhere
    };

    var fullscreenImage = document.createElement('img');
    fullscreenImage.src = src;
    fullscreenImage.classList.add('fullscreen-image');

    var closeButton = document.createElement('button');
    closeButton.classList.add('fullscreen-close');
    closeButton.innerHTML = '&times;';
    closeButton.onclick = function() {
        modal.remove();
    };

    modal.appendChild(closeButton);
    modal.appendChild(fullscreenImage);
    document.body.appendChild(modal);
}




function showVideo(container) {
    const videoSource = container.querySelector("video source").src;

    // Check if it's a YouTube URL
    let videoId = "";
    if (videoSource.includes("youtube.com")) {
        const urlParams = new URLSearchParams(new URL(videoSource).search);
        videoId = urlParams.get("v"); // Extract video ID
    } else if (videoSource.includes("youtu.be")) {
        videoId = videoSource.split("/").pop(); // Extract video ID
    }

    if (videoId) {
        // Replace container content with YouTube iframe
        container.innerHTML = `
            <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/${videoId}?autoplay=1" 
                frameborder="0" 
                allow="autoplay; encrypted-media" 
                allowfullscreen>
            </iframe>`;
    } else {
        alert("Invalid video source. Please check the URL.");
    }
}




