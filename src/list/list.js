import React from "react";
// import Video from "./elements/video";
// import Article from "./elements/article";
import {ArticleHL, VideoHL} from "./elements/highlight-wrapper";

function List(props) {
    return props.list.map(item => {
        switch (item.type) {
            case 'video':
                return (
                    <VideoHL {...item} />
                );

            case 'article':
                return (
                    <ArticleHL {...item} />
                );
            default:
                return (<></>);
        }
    });
}

export default List;
