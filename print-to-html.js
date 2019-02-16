const snippets = {
    render(htmlStr){
        document.body.appendChild(document.createRange().createContextualFragment(htmlStr));
    }
};
