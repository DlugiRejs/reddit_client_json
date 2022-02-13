import React from 'react';
import { convertHtml } from '../../utils/general-purpose.js';
import { postStyles } from '../../styles/styles.js';
import PropTypes from 'prop-types';

export function Posts({ data, hobby, searchTerm }) {

    let posts = [];

    if (data.length > 0) {
        posts = data.map((d, index) => {

            let secure_media = false;
            let secure_media_url = "";

            if (d.data.secure_media) {
                if (d.data.secure_media.reddit_video) {
                    secure_media = true;
                    secure_media_url = d.data.secure_media.reddit_video.fallback_url;
                }
            }


            return {
                jsx: (<div data-testid={hobby} className="post" key={index} style={postStyles(hobby)}>
                    {!!d.data.title && <h2 className="postTitle">{d.data.title}</h2>}
                    {!!d.data.selftext_html && <div className="postText" dangerouslySetInnerHTML={{ __html: convertHtml(d.data.selftext_html) }} />}
                    {!!d.data.media_embed.content && <div className="postMedia" dangerouslySetInnerHTML={{ __html: convertHtml(d.data.media_embed.content) }} />}
                    {secure_media && <video className="postMedia" controls><source src={secure_media_url} /></video>}
                    {(!!d.data.thumbnail_width && !d.data.media_embed.content && !secure_media) && <img className="postIMG" src={d.data.thumbnail} alt="post_img" />}
                </div>),
                text: `${!!d.data.title ? d.data.title : ''}${!!d.data.selftext_html ? !!d.data.selftext_html : ''}`.toLowerCase()
            };
        }).filter(post => post.text.includes(searchTerm.toLowerCase()));
    } else {
        posts[0] = { jsx: <h2 key="0" className="post" style={postStyles(hobby)}>Waiting for data</h2> };
    }

    return (
        <section className="posts">
            {posts.map(post => post.jsx)}
        </section>
    );
}

Posts.propTypes = {
    data: PropTypes.array.isRequired,
    hobby: PropTypes.string.isRequired
}