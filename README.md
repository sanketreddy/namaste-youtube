# YouTube Clone App

## Overview

This is a YouTube clone application built using React.js. The app demonstrates various functionalities such as routing, search suggestions, and dynamic content fetching using the YouTube API. The application mimics key features of the YouTube platform, including video search and display.

## Features

- **Video Search:** Allows users to search for videos using keywords.
- **Search Suggestions:** Provides search suggestions based on user input.
- **Video Display:** Displays a list of video thumbnails and titles based on search results.
- **Routing:** Utilizes React Router for navigation between different views.

## Technologies Used

- **React.js:** For building the user interface.
- **React Router:** For handling routing and navigation.
- **YouTube Data API v3:** For fetching video data.
- **CSS/Tailwind CSS:** For styling the components.

## Setup

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/sanketreddy/namaste-youtube.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd youtube-clone-app
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Set up environment variables:**

   Create a `.env` file in the root directory and add your YouTube API key:

   ```env
   REACT_APP_YOUTUBE_API_KEY=your_youtube_api_key
   ```

5. **Start the development server:**

   ```bash
   npm start
   ```

   The app will be available at `http://localhost:3000`.

## Usage

- **Search for Videos:** Enter keywords into the search bar to find videos. The app will display search suggestions as you type.
- **View Video Details:** Click on a video thumbnail to view more details.
