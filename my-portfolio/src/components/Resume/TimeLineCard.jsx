// TimeLineCard.jsx
/*
SPDX-License-Identifier: MIT
*/
// Importing necessary libraries and components
import {
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineItem,
    TimelineSeparator,
} from "@mui/lab";
import { Typography } from "@mui/material";
import React from "react";

/**
 * TimeLineCard component representing an item in the timeline.
 * @param {Object} props - Component properties.
 * @param {string} props.time - Time period of the activity.
 * @param {string} props.activity - Description of the activity.
 * @param {string} props.details - Details of the activity.
 * @param {React.Component} props.icon - Icon component representing the activity.
 * @returns {JSX.Element} - JSX element representing the timeline card.
 */
const TimeLineCard = ({ time, activity, details, icon: Icon }) => {
    // Render the TimeLineCard component with timeline content
    return (
        <TimelineItem>
            <TimelineSeparator>
                {/* Timeline connector */}
                <TimelineConnector sx={{ backgroundColor: '#65f9af' }}/>
                {/* Timeline dot with icon */}
                <TimelineDot sx={{ backgroundColor: '#65f9af' }}>
                    <Icon sx={{ color: '#327C57' }}/>
                </TimelineDot>
                {/* Additional timeline connector */}
                <TimelineConnector sx={{ backgroundColor: '#65f9af' }}/>
            </TimelineSeparator>
            {/* Timeline content */}
            <TimelineContent>
                {/* Time period */}
                <Typography color="#FFF" sx={{ fontSize: { xs: "0.5rem", sm: "0.75em", md: "1.0em" } }}>{time}</Typography>
                {/* Activity description */}
                <Typography color="#FFF" sx={{ fontSize: { xs: "0.75rem", sm: "0.75em", md: "1.2em" } }}>{activity}</Typography>
                {/* Activity details */}
                <Typography color="#FFF" sx={{ fontSize: { xs: "0.5rem", sm: "0.5em", md: "1.0em" } }} >{details}</Typography>
            </TimelineContent>
        </TimelineItem>
    );
};

export default TimeLineCard;
