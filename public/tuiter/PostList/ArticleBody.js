const ArticleBody = (post) => {
    return(`
    <div class="wd-post-body-margin">
        <div class="wd-post-article-format p-3">
            <div class="text-white">${post.article_title}</div>
            <div class="text-secondary">${post.article_body}</div>
            <div class="text-secondary">
                <span class="fas fa-link fa-1x"></span>
                <span>${post.article_site}</span>
            </div>
        </div>
    </div>
    `);
}
export default ArticleBody;