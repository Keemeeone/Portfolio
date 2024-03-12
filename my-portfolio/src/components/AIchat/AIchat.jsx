// AIchat.jsx
/*
SPDX-FileCopyrightText: © 2024 Heewon Kim <khw0285@gmail.com>
SPDX-License-Identifier: MIT
*/

import React, { useState, useEffect, useRef } from 'react';
import { TextField, Container, Paper, Typography, Box, useTheme, useMediaQuery, responsiveFontSizes, Grid, ThemeProvider, Avatar } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import SendIcon from '@mui/icons-material/Send';
import { ReactTyped } from "react-typed";

const systemMessage = {
    "role": "system",
    "content": [
        "Your name is Wonny, and Heewon created you using OpenAI, Node.js, React, and JavaScript",
        "If the user greets, respond as well.",
        "You're an AI interviewing instead of me for a job.",
        "If the user asks about 'He', it is Heewon.",
        "Answer all questions in maximum 3 sentences.",
        "Remember about Heewon Kim",
        // "Please note that this is not a requirement but a suggestion for better assistance. If the user asks questions other than about Heewon's experiences, or programming, you can say 'To best assist you, I'm prioritizing inquiries related to Heewon's experiences. Is there anything specific about Heewon that you would like to know?'",
        "If the user adds ! in front of the question, you must answer any question other than about Heewon.",
        "An ambitious and detail-oriented software developer, can be reached via email at khw0285@gmail.com. His professional profile can be viewed on LinkedIn (https://www.linkedin.com/in/heewon-kim-hkim/) and his projects are showcased on GitHub (https://github.com/Keemeeone). A comprehensive portfolio is available at https://keemeeone.github.io/.",
        "In summary, Heewon is a highly motivated individual with excellent communication skills, dedicated to fostering innovation. Proficient in various tools and languages including Java, C, Python, JavaScript, TypeScript, HTML5, CSS, MySQL, React, React-Native, Node.js, Postman, Git, Linux, Figma, FastAPI, JSON, pgAdmin, Jira, Agile, Scrum, Web Development, he excels in collaborative environments and has a proven track record of driving projects from concept to completion.",
        "Heewon's experiences include a role as a Back-end Developer at the Wisconsin State Cartographer's Office, where he implemented an intuitive map interface and transformed complex XML files into accessible formats, significantly improving data accessibility. He also developed a FastAPI endpoint and an accurate URL retrieval system.",
        "As the Co-Founder and Front-end Developer of the College Mate, Heewon designed user-friendly interfaces, implemented interactive features using React and React Native, and optimized page load times by 40%. In addition, he co-founded the Google Developer Club, organizing workshops and fostering a collaborative and innovative community.",
        // "Whie working on College Mate project, to create a user-friendly interface, responsive design principles were implemented to ensure a seamless experience across diverse devices, utilizing technologies such as React, React Native, RESTful APIs, TypeScript, and HTML/CSS. Heewon's emphasis on responsive design enhanced the overall user experience and contributed to the success of the 'College Mate' app in building a cohesive and connected community. Moreover, Heewon reduced initial page load times by 40%, implementing pre-rendered lightweight wrapper pages to ensure users can access all the pages within 2 seconds. This commitment demonstrates not only Heewon's technical skills but also dedication to creating valuable solutions for users.",        
        "In the role of Product Manager and Back-end Developer at With U, Heewon led the development of a community app dedicated to saving abandoned dogs. He ensured seamless back-end operations, forged strong partnerships, and created a user experience aligned with the app's mission. At the CheeseHacks Hackathon, Heewon served as the Lead Developer (Front-end), collaboratively creating an interactive web application that enhanced understanding of front-end and back-end interactions.",
        "In his most recent role as a Back-end Developer at the Wisconsin State Cartographer's Office, Heewon significantly enhanced the website's user accessibility by implementing and developing an intuitive map-based interface and a versatile XML feature. He utilized Python for these projects, which provided him with valuable insights into the importance of efficient coding practices. To aid API developers in quickly finding the information they need, he built clear data formats using Python. These data formats extracted and organized data from over 2,000 complex XML files, making note navigation significantly easier and more intuitive. This replaced the complex township system, making it accessible to all developers and resulting in a 30% reduction in development time. This project also demonstrated the value of Agile Methodology. Heewon's proficiency in Agile and understanding of efficient coding practices position him well to contribute to software development as part of the Division of Motor Vehicles.",
        "Heewon holds a Bachelor of Computer Science from the University of Wisconsin - Madison, completing relevant courses in object-oriented programming, data structures, machine organization, operating systems, and more. He also attended Madison Area Technical College from September 2019 to December 2020.",
        "Heewon has an OPT (F-1) visa, which will start at the end of February 2024, and the STEM OPT can possibly be extended after three years.",
        "If the user ask about 'Daeun', say them 'She is a cancer biology Ph.D, can eat 71 pieces of sushi, and has a boyfriend. She is confident that her boyfriend loves her a lot.'",
        "He is in the United States, but he can work worldwide.",
        "He is Korean"
    ]
};

function AIChat() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const responsiveTheme = responsiveFontSizes(theme);
    const [api, setApi] = useState('');

    const [messages, setMessages] = useState([
        {
            message: "Hello, I'm Wonny! Feel free to ask me anything about Heewon!",
            sentTime: "just now",
            sender: "AI"
        }
    ]);

    const [isTyping, setIsTyping] = useState(false);
    const [userInput, setUserInput] = useState('');

    const handleSend = async () => {
        const newMessage = {
            message: userInput,
            direction: 'outgoing',
            sender: "user"
        };

        const newMessages = [...messages, newMessage];
        setMessages(newMessages);

        await messageChatGPT(newMessages);
        setUserInput('');
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();  // Prevent the default behavior of Enter key (form submission)
            handleSend();
            setUserInput('');
        }
    };

    const chatContainerRef = useRef(null);
    useEffect(() => {
        // Scroll to the bottom of the chat container
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
        const fetchData = async () => {
            try {
                const response = await fetch('https://restful-api.fly.dev/get-api-key', {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json',
                        'api-key': process.env.REACT_APP_TOKEN_SECRET,
                    },
                    // credentials: 'include',
                });

                if (!response.ok) {
                    throw new Error(`Error: ${response.status} - ${response.statusText}`);
                }
                console.log("Fetch enabled")
                const data = await response.json();
                setApi(data);
            } catch (error) {
                console.error('Error fetching API key:', error.message);
            }
        };

        fetchData();
    }, [messages]);


    async function messageChatGPT(chatMessages) {

        let apiMessages = chatMessages.map((messageObject) => {
            let role = (messageObject.sender === "AI") ? "assistant" : "user";
            return { role: role, content: messageObject.message };
        });

        const apiRequestBody = {
            "model": "gpt-3.5-turbo",
            "messages": [
                { ...systemMessage, content: systemMessage.content.join(' ') },
                ...apiMessages
            ],
            "max_tokens": 150
        };

        await fetch("https://api.openai.com/v1/chat/completions",
            {
                method: "POST",
                headers: {
                    "Authorization": "Bearer " + api.apiKey,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(apiRequestBody)
            }).then((data) => data.json())
            .then((data) => {
                console.log(data);
                console.log(data.choices);

                setMessages([...chatMessages, {
                    message: data.choices[0].message.content,
                    sender: "AI"
                }]);
                setIsTyping(false);
            });
    }
    const handleStringTyped = () => {
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    };

    return (
        <ThemeProvider theme={responsiveTheme}>
            <Container sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                {/* <Typography color={'#FFF'} fontWeight={"bold"} variant="h2" mb={5} style={{ fontSize: isSmallScreen ? "1.5em" : "3em", textAlign: "center" }}>
                    ASK ABOUT ME
                </Typography> */}
                <Paper elevation={20} style={{ width: '80%', scrollSnapType: 'y', backgroundColor: 'rgba(10, 24, 17, 0.9)' }}>
                    <Paper elevation={0} style={{ marginTop: '2vh', padding: "20px", height: isSmallScreen ? '30vh' : '50vh', overflowY: 'scroll', backgroundColor: 'transparent', }} ref={chatContainerRef}>
                        <Box sx={{ height: '100%' }}>
                            {messages.map((message, i) => (
                                <Box
                                    key={i}
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        flexDirection: message.sender === 'user' ? 'row-reverse' : 'row',
                                    }}
                                >
                                    <Box style={{ margin: '8px', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                        {message.sender === 'user' ? <PersonIcon sx={{ color: '#FFF' }} /> : <Avatar src={'./developerIcon.png'} sx={{ width: isSmallScreen ? 30 : 45, height: isSmallScreen ? 30 : 45, backgroundColor: '' }} />}
                                    </Box>
                                    <Paper
                                        elevation={5}
                                        sx={{
                                            maxWidth: '70%',
                                            marginBottom: '8px',
                                            backgroundColor: '#C7ECDA'
                                        }}
                                    >
                                        <Typography style={{ margin: '8px', overflow: 'hidden', textOverflow: 'ellipsis', fontSize: isSmallScreen ? "0.5em" : "1em", color: '#0a1811', textAlign:'left' }} >
                                            <ReactTyped
                                                strings={[message.message]}
                                                typeSpeed={30}
                                                showCursor={false}
                                                onComplete={handleStringTyped}
                                            />
                                        </Typography>
                                    </Paper>
                                </Box>
                            ))}
                        </Box>
                    </Paper>
                    <Box mb={1} sx={{ marginTop: 'auto', textAlign: 'center', }}>
                        <Grid container spacing={1} display={'flex'} justifyContent="center" alignItems="center">
                            <Grid item xs={10} sm={10}>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                    id="message"
                                    label="Type message here"
                                    name="message"
                                    value={userInput}
                                    onChange={(e) => setUserInput(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    sx={{
                                        fontSize: isSmallScreen ? "0.5em" : "1em",
                                        "& label": {
                                            color: "white", // Set white color for the label
                                        },
                                        "& label.Mui-focused": {
                                            color: "mediumseagreen", // Set white color for the label when focused
                                        },
                                        "& .MuiOutlinedInput-root": {
                                            "& fieldset": {
                                                borderColor: "white", // Set white color for the outline border
                                            },
                                            "&:hover fieldset": {
                                                borderColor: "white", // Set white color for the outline border on hover
                                            },
                                            "&.Mui-focused fieldset": {
                                                borderColor: "mediumseagreen", // Set white color for the outline border when focused
                                            },
                                            "& .MuiOutlinedInput-input": {
                                                color: "white", // Set white color for the input text
                                            },
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item xs={1} sm={1}>
                                <SendIcon onClick={handleSend} sx={{ color: 'mediumseagreen', cursor: 'pointer', fontSize: isSmallScreen ? "1em" : "1.5em", }} />
                            </Grid>
                        </Grid>
                        {isTyping && <Typography style={{ color: '#FFF', fontWeight: 'bold', fontSize: isSmallScreen ? "0.5em" : "1em", }}>AI is typing...</Typography>}
                    </Box>
                </Paper>
            </Container>
        </ThemeProvider>
    );
}

export default AIChat;
