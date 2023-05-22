// Tạo slider quảng cáo động
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000); // Đổi ảnh sau 5 giây
}

// Tạo chức năng tìm kiếm
function search() {
    let input = document.getElementById("search-input").value.toLowerCase();
    let articles = document.getElementsByClassName("article-container")[0].getElementsByTagName("article");
    let news = document.getElementsByClassName("news-container")[0].getElementsByTagName("article");
    let i;
    for (i = 0; i < articles.length; i++) {
        let title = articles[i].getElementsByTagName("h3")[0].textContent.toLowerCase();
        if (title.includes(input)) {
            articles[i].style.display = "flex";
        } else {
            articles[i].style.display = "none";
        }
    }
    for (i = 0; i < news.length; i++) {
        let title = news[i].getElementsByTagName("h3")[0].textContent.toLowerCase();
        if (title.includes(input)) {
            news[i].style.display = "flex";
        } else {
            news[i].style.display = "none";
        }
    }
}