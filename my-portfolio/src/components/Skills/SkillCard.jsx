import React from "react";
import { Card, CardContent, Typography, useTheme, responsiveFontSizes, ThemeProvider } from "@mui/material";

const SkillCard = ({ skill }) => {
    const theme = useTheme();
    const responsiveTheme = responsiveFontSizes(theme);

    const getRandomColor = () => {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    const randomColor = getRandomColor();

    return (
        <ThemeProvider theme={responsiveTheme}>
            <Card variant="outlined" sx={{ backgroundColor: randomColor }}>
                <CardContent>
                    <Typography
                        fontWeight={"bold"}
                        textAlign="center"
                        sx={{
                            fontSize: { xs: "8px", sm: "8px", md: "16px" },
                            color: "#fff"
                        }}
                    >
                        {skill}
                    </Typography>
                </CardContent>
            </Card>
        </ThemeProvider>
    );
};

export default SkillCard;
