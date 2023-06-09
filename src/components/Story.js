import { useEffect, useState, memo } from "react";
import { getStory } from "../services/hnAPIs";
import { mapTime } from "../mappers/mapTime";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";

export const Story = memo(function Story({storyId}) {
    const [story, setStory] = useState({});

    useEffect(() => {
        getStory(storyId).then(data => data && data.url && setStory(data))
    }, []);

    return story && story.url ? (
        <>
            <a href={story.url}>
                <p>
                    {story.title}
                </p>
            </a>
            By: <p>{story.by}</p>
            Posted: <p>{mapTime(story.time)}</p>
        </>
    )
    : null
})