function showThumbnail(sectionId) {
    var thumbnailContainer = document.getElementById('thumbnail-container');
    var section = document.getElementById(sectionId);
    if (section) {
        var clonedSection = section.cloneNode(true);
        clonedSection.className = 'thumbnail-content';
        thumbnailContainer.innerHTML = '';
        thumbnailContainer.appendChild(clonedSection);
        thumbnailContainer.style.display = 'block';
    }
}

function hideThumbnail() {
    var thumbnailContainer = document.getElementById('thumbnail-container');
    thumbnailContainer.style.display = 'none';
}

function showContent(tab) {
    var contents = document.getElementsByClassName('tab-content');
    for (var i = 0; i < contents.length; i++) {
        contents[i].style.display = 'none';
    }
    document.getElementById(tab).style.display = 'block';
}
document.addEventListener('DOMContentLoaded', function() {
    var blocks = document.querySelectorAll('.image-text-block');
    blocks.forEach(function(block) {
        block.addEventListener('mouseover', function() {
            block.classList.add('expanded');
        });
        block.addEventListener('mouseout', function() {
            block.classList.remove('expanded');
        });
    });
});