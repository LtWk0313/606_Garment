const rollinggallery = document.getElementById('bottom1');

document.addEventListener('mousemove', (event) => {
    const mouseX = event.clientX;
    const windowCenterX = window.innerWidth / 2;
  
    // Calculate the rotation angle based on the mouse position
    const rotationAngle = (mouseX - windowCenterX) / 10;
  
    // Apply the rotation to the object
    rollinggallery.style.transform = `translate(-50%, -50%) rotate(${rotationAngle}deg)`;
});

