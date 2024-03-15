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
import data from '../../data/data';

const systemMessage = data.systemMessage;

function AIChat() {
    // Get theme and screen size information
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const responsiveTheme = responsiveFontSizes(theme);
    const [api, setApi] = useState('');

    // Manage chat messages and user input
    const [messages, setMessages] = useState([
        {
            message: "Hello, I'm Wonny! Feel free to ask me anything about Heewon!",
            sentTime: "just now",
            sender: "AI"
        }
    ]);
    const [isTyping, setIsTyping] = useState(false);
    const [userInput, setUserInput] = useState('');

    // Send message when user clicks send button
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

    // Send message when user presses Enter key
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();  // Prevent the default behavior of Enter key (form submission)
            handleSend();
            setUserInput('');
        }
    };

    // Ref to manage scrolling to bottom of chat container
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
                });

                if (!response.ok) {
                    throw new Error(`Error: ${response.status} - ${response.statusText}`);
                }
                const data = await response.json();
                setApi(data);
            } catch (error) {
                console.error('Error fetching API key:', error.message);
            }
        };

        fetchData();
    }, [messages]);

    // Function to send chat messages to the GPT-3.5 model
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

        await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": "Bearer " + api.apiKey,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(apiRequestBody)
        }).then((data) => data.json())
            .then((data) => {
                setMessages([...chatMessages, {
                    message: data.choices[0].message.content,
                    sender: "AI"
                }]);
                setIsTyping(false);
            });
    }

    // Handle completion of string typing animation
    const handleStringTyped = () => {
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    };

    return (

        <ThemeProvider theme={responsiveTheme}>
            {/* Container for the AI chat interface */}
            <Container sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                {/* Chat interface paper */}
                <Paper elevation={20} style={{ width: '90%', scrollSnapType: 'y', backgroundColor: '#0a1811' }}>
                    {/* Chat message container */}
                    <Paper elevation={0} style={{ marginTop: '2vh', padding: "20px", height: isSmallScreen ? '30vh' : '45vh', overflowY: 'scroll', backgroundColor: 'transparent', }} ref={chatContainerRef}>
                        {/* Render each message in the chat */}
                        <Box>
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
                                        {/* Display user icon or developer avatar */}
                                        {message.sender === 'user' ? <PersonIcon sx={{ color: '#FFF' }} /> : <Avatar src={'./developerIcon.png'} sx={{ width: isSmallScreen ? 30 : 45, height: isSmallScreen ? 30 : 45, backgroundColor: '' }} />}
                                    </Box>
                                    {/* Chat message bubble */}
                                    <Paper
                                        elevation={5}
                                        sx={{
                                            maxWidth: '70%',
                                            marginBottom: '8px',
                                            backgroundColor: '#C7ECDA'
                                        }}
                                    >
                                        {/* Render the message using ReactTyped */}
                                        <Typography style={{ margin: '8px', overflow: 'hidden', textOverflow: 'ellipsis', fontSize: isSmallScreen ? "0.5em" : "1em", color: '#0a1811', textAlign: 'left' }} >
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
                    {/* Input message box */}
                    <Box mb={1} sx={{ marginTop: 'auto', textAlign: 'center', }}>
                        <Grid container spacing={1} display={'flex'} justifyContent="center" alignItems="center">
                            <Grid item xs={10} sm={10}>
                                {/* Text field for user input */}
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
                            {/* Send button */}
                            <Grid item xs={1} sm={1}>
                                <SendIcon onClick={handleSend} sx={{ color: 'mediumseagreen', cursor: 'pointer', fontSize: isSmallScreen ? "1em" : "1.5em", }} />
                            </Grid>
                        </Grid>
                        {/* Typing indicator */}
                        {isTyping && <Typography style={{ color: '#FFF', fontWeight: 'bold', fontSize: isSmallScreen ? "0.5em" : "1em", }}>AI is typing...</Typography>}
                    </Box>
                </Paper>
            </Container>
        </ThemeProvider>
    );
}

export default AIChat;
