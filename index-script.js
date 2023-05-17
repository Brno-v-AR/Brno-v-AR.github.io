// --------------- APPLYING ROLLING FUNCTIONALITY TO ITEMS -------------------
// 1. get all the item titles and their descriptions
let titles = document.querySelectorAll('.item-title');

// 2. go through all items
for (let i = 0; i < titles.length; i++) {
  // bound action to clicking
  titles[i].addEventListener('click', function() {
    this.classList.toggle('active');
    let itemDescription = this.nextElementSibling;
    itemDescription.classList.toggle('open');

    // 3. change visibility of description via maxHeight
    if (itemDescription.classList.contains('open')) {
      itemDescription.style.maxHeight = itemDescription.scrollHeight + 'px';
    } else {
      itemDescription.style.maxHeight = 0;
    }
  });
}

// ----------------------- COPY LINK TO CLIPBOARD ----------------------------
function copyToClipboard() {
    navigator.clipboard.writeText('https://brno-v-ar.github.io/app');
    alert("Odkaz byl zkopírován do schránky");
} 
