import {
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineItem,
    TimelineSeparator,
} from "@mui/lab";
import { Typography } from "@mui/material";
import React from "react";

const TimeLineCard = ({ time, activity, details, icon: Icon }) => {
    return (
        <TimelineItem>
            <TimelineSeparator>
                <TimelineConnector sx={{ backgroundColor: '#65f9af' }}/>
                    <TimelineDot sx={{ backgroundColor: '#65f9af' }}>
                        <Icon />
                    </TimelineDot>
                <TimelineConnector sx={{ backgroundColor: '#65f9af' }}/>
            </TimelineSeparator>
            <TimelineContent>
                <Typography color="text.secondary" sx={{ fontSize: { xs: "0.5rem", sm: "0.75em", md: "1.0em" } }}>{time}</Typography>
                <Typography sx={{ fontSize: { xs: "0.75rem", sm: "0.75em", md: "1.2em" } }}>{activity}</Typography>
                <Typography color="text.secondary" sx={{ fontSize: { xs: "0.5rem", sm: "0.5em", md: "1.0em" } }} >{details}</Typography>
            </TimelineContent>
        </TimelineItem>
    );
};

export default TimeLineCard;