import React, { useState, useEffect, useRef } from 'react';
import { TextField, Container, Paper, Typography, Box, useTheme, useMediaQuery, responsiveFontSizes, Grid, ThemeProvider } from '@mui/material';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import PersonIcon from '@mui/icons-material/Person';
import SendIcon from '@mui/icons-material/Send';

const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

const systemMessage = {
    "role": "system",
    "content": [
        "If the user greets, respond as well.",
        "You're an AI interviewing instead of me for a job.",
        "If the user asks about 'He', it is Heewon.",
        "Answer all questions in maximum 3 sentences.",
        "Remember about Heewon Kim",
        "If the user asks questions other than about Heewon Heewon's experiences, or programming say, 'To best assist you, I'm prioritizing inquiries related to Heewon's experiences. Is there anything specific about Heewon that you would like to know?'",
        "If the user adds ! in front of the question, you must answer any question other than about Heewon.",
        "An ambitious and detail-oriented software developer, can be reached via email at khw0285@gmail.com. His professional profile can be viewed on LinkedIn (https://www.linkedin.com/in/heewon-kim-hkim/) and his projects are showcased on GitHub (https://github.com/Keemeeone). A comprehensive portfolio is available at https://keemeeone.github.io/.",
        "In summary, Heewon is a highly motivated individual with excellent communication skills, dedicated to fostering innovation. Proficient in various tools and languages including Java, C, Python, JavaScript, TypeScript, HTML5, CSS, MySQL, React, React-Native, Node.js, Postman, Git, Linux, Figma, FastAPI, JSON, pgAdmin, Jira, Agile, Scrum, Web Development, he excels in collaborative environments and has a proven track record of driving projects from concept to completion.",
        "Heewon's experiences include a role as a Back-end Developer at the Wisconsin State Cartographer's Office, where he implemented an intuitive map interface and transformed complex XML files into accessible formats, significantly improving data accessibility. He also developed a FastAPI endpoint and an accurate URL retrieval system.",
        "As the Co-Founder and Front-end Developer of the College Mate App, Heewon designed user-friendly interfaces, implemented interactive features using React and React Native, and optimized page load times by 40%. In addition, he co-founded the Google Developer Club, organizing workshops and fostering a collaborative and innovative community.",
        "In the role of Product Manager and Back-end Developer at With U, Heewon led the development of a community app dedicated to saving abandoned dogs. He ensured seamless back-end operations, forged strong partnerships, and created a user experience aligned with the app's mission. At the CheeseHacks Hackathon, Heewon served as the Lead Developer (Front-end), collaboratively creating an interactive web application that enhanced understanding of front-end and back-end interactions.",
        "Heewon holds a Bachelor of Computer Science from the University of Wisconsin - Madison, completing relevant courses in object-oriented programming, data structures, machine organization, operating systems, and more. He also attended Madison Area Technical College from September 2019 to December 2020.",
        "Heewon has an OPT (F-1) visa, which will start at the end of February 2024, and the STEM OPT can possibly be extended after three years.",
    ]
};

function AIChat() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const responsiveTheme = responsiveFontSizes(theme);
    const [messages, setMessages] = useState([
        {
            message: "Hello, feel free to ask me anything about Heewon!",
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

        setIsTyping(true);
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
                    "Authorization": "Bearer " + API_KEY,
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

    return (
        <ThemeProvider theme={responsiveTheme}>
            <Container sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Typography color={'#FFF'} fontWeight={"bold"} variant="h2" mb={5} style={{ fontSize: isSmallScreen ? "1.5em" : "3em", textAlign: "center" }}>
                    CHAT WITH AI
                </Typography>
                <Paper style={{ width: '80%', scrollSnapType: 'y' }}>
                    <Paper elevation={0} style={{ marginTop: '2vh', padding: "20px", height: '40vh', overflowY: 'scroll', backgroundColor: '#FFF' }} ref={chatContainerRef}>
                        <Box sx={{ height: '100%' }}>
                            {messages.map((message, i) => (
                                <Box key={i}>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            flexDirection: message.sender === 'user' ? 'row-reverse' : 'row',
                                        }}
                                    >
                                        <Typography style={{ margin: '8px', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                            {message.sender === 'user' ? <PersonIcon sx={{ color: '#236a46' }} /> : <SmartToyIcon sx={{ color: '#236a46' }} />}
                                        </Typography>
                                        <Paper
                                            elevation={5}
                                            sx={{
                                                maxWidth: '70%',
                                                marginBottom: '8px',
                                                backgroundColor: '#C7ECDA'
                                            }}
                                        >
                                            <Typography style={{ margin: '8px', overflow: 'hidden', textOverflow: 'ellipsis', fontSize: isSmallScreen ? "0.5em" : "1em", color: '#0a1811' }}>
                                                {message.message}
                                            </Typography>
                                        </Paper>
                                    </Box>
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
                                        fontSize: isSmallScreen ? "0.5em" : "1em"
                                    }}
                                />
                            </Grid>
                            <Grid item xs={1} sm={1}>
                                <SendIcon onClick={handleSend} sx={{ margin: "4px", color: '#236a46', cursor: 'pointer', fontSize: isSmallScreen ? "1em" : "1.5em" }} />
                            </Grid>
                        </Grid>
                    </Box>
                    {isTyping && <Typography style={{ margin: "8px", color: '#236a46', fontWeight: 'bold' }}>AI is typing...</Typography>}
                </Paper>
                <Typography color={'#FFF'} style={{ fontSize: isSmallScreen ? ".5em" : "0.5em", textAlign: 'right' }}>
                    E
                </Typography>
            </Container>
        </ThemeProvider>
    );
}

export default AIChat;
