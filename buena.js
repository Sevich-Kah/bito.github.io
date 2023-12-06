function openFaq () {
    document.getElementById('faq').style.height = "100%"
}
function closeFaq () {
    document.getElementById('faq').style.height = "0%"
}
function toggleAnswer(question) {
    var answer = question.querySelector('.answer');
    answer.classList.toggle('show');
}