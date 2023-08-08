// Open lightbox with full-sized image
function openLightbox(imageSrc) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightboxImage");
    lightbox.style.display = "block";
    lightboxImage.src = imageSrc;
  }
  
  // Close lightbox
  function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none";
  }
  