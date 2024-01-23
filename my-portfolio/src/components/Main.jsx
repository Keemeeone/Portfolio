import React from "react";

const Main = ({ children }) => {
    const mainStyle = {
        maxHeight:'100%',
        marginTop: '50px', // Add your desired margin-top value
    };

    return (
        <main id="main" role="main" style={mainStyle}>
            {children}
        </main>
    );
};

export default Main;
