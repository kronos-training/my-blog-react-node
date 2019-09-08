import React from 'react';
import ArticlesList from '../components/ArticlesList';
import NotFoundPage from './NotFoundPage';
import articleContent from './article-content';

const ArticlePage = ({ match }) => {
    const name = match.params.name;
    const article = articleContent.find(a => a.name === name);

    if (!article) {
        return <NotFoundPage />
    }

    const otherArticles = articleContent.filter(a => a.name !== name);

    return (
        <>
            <h1>Article {article.title}</h1>
            {article.content.map((paragraph, key) => (
                <p key={key}>{paragraph}</p>
            ))}
            
            <h3>Other Article</h3>
            <ArticlesList articles={otherArticles} />
        </>
    )
};

export default ArticlePage;