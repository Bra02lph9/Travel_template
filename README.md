# SaharaTrip 
# Overview

The Main component is part of the SaharaTrip application, which features an array of popular desert destinations in Morocco. This component showcases these destinations with a dynamic card layout, including images, titles, locations, grades, fees, and descriptions. It enhances user interaction with animated scroll effects and iconography.
Features

    Destination Cards: Displays detailed information about each destination.
    Animated Scrolling: Smooth animations for elements as they scroll into view, powered by AOS.
    Responsive Design: Adapts to various screen sizes for a seamless user experience.
    Icons: Utilizes react-icons for location and details buttons, adding visual appeal and functionality.

Installation

To set up and run the SaharaTrip application locally, follow these steps:

    Clone the Repository

```bash
git clone <repository-url>
cd <repository-directory>
```

Install Dependencies

Make sure you have Node.js and npm installed, then run:

bash

npm install

Add Assets

Ensure that the following images are placed in the src/assets directory:
```bash 
    img1.jpg
    img2.jpg
    img3.jpg
    img4.jpg
    img5.jpg
    img6.jpg
    img7.jpg
    img8.jpg
    img9.jpg
    img10.jpg
    img11.jpg
    img12.jpg
```

# Run the Application

Start the development server with:

```bash

    npm start
```

Component Details
    
    Main
    Description: Displays a list of the most visited desert destinations with relevant details.
    Location: src/components/Main.js
    Styles: src/components/main.css
    Dependencies:
        React: JavaScript library for building the user interface.
        AOS: Library for adding scroll animations.
        react-icons: Set of icons for enhanced UI elements.

Data Structure

The Data array contains information about each destination:

```javascript

const Data = [
    { id: 1, imgSrc: img1, destTitle: 'Merzouga', location: 'Morocco', grade: 'DESERT EXPERIENCE', fees: '$500', description: 'Known for its stunning dunes and the gateway to Erg Chebbi, offering camel treks and mesmerizing sunsets.' },
    // Additional destinations...
];
```
CSS Variables

The component uses CSS variables for theming. You can update these variables in Main.css to customize the appearance:

```css
:root {
    --PrimaryColor: hsl(34, 90%, 50%); 
    --SecondaryColor: hsl(28, 80%, 60%); 
    --GradientColor: linear-gradient(to right, hsl(28, 80%, 60%), hsl(34, 90%, 50%));
    --AccentColor: hsl(34, 90%, 50%); 
    --WhiteColor: hsl(0, 0%, 100%);
    --BlackColor: hsl(30, 20%, 20%); 
    --TextColor: hsl(30, 20%, 40%); 
    --WhiteColorDim: hsl(0, 0%, 93%);
    --GreyText: rgb(180, 180, 180); 
    --InputColor: rgb(232, 232, 232); 
    --BodyColor: rgb(245, 245, 240); 
    --CardBG: rgb(235, 235, 225); 

```
Usage

To use the Main component in your application, import it and include it in your component tree:

```javascript

import React from "react";
import Main from "./components/Main";

function App() {
    return (
        <div className="App">
            <Main/>
        </div>
    );
}

export default App;
```



