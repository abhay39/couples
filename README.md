# Dating App

## Overview

This project is a social media dating platform designed to help users find their matches based on preferences and interests. The application enables users to swipe right on profiles they like and left on those they don't. If two users swipe right on each other, they are matched and can start chatting, creating a seamless and enjoyable user experience.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [User Stories](#user-stories)
- [App Architecture](#app-architecture)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)
- [FAQ](#faq)

## Features

- **User Profiles**: Create and manage detailed user profiles.
- **Swipe Functionality**: Swipe right to like a profile and left to pass.
- **Matching System**: Mutual right swipes result in a match.
- **Chat Feature**: Real-time chat functionality with matched users.
- **Image Uploads**: Store user photos securely using Cloudinary.
- **User Preferences**: Set preferences for age, distance, and interests.
- **Notifications**: Receive notifications for matches and messages.
- **User Blocking**: Option to block users for a safer experience.

## Tech Stack

- **Frontend**: React Native with TypeScript
- **Backend**: Node.js with Express
- **Database**: MongoDB
- **Image Storage**: Cloudinary
- **Real-time Communication**: Socket.IO (for chat functionality)

## User Stories

- **As a user**, I want to create a profile with my information and photos so that I can present myself effectively.
- **As a user**, I want to swipe through profiles to find potential matches quickly.
- **As a user**, I want to see who has liked my profile so that I can match with them.
- **As a user**, I want to chat with my matches in real time to get to know them better.
- **As a user**, I want to set my preferences to find matches that suit my interests and values.

## App Architecture

The application is structured into two main parts:

### Frontend
- **Components**: Reusable UI components for consistency across the app.
- **Screens**: Dedicated screens for Login, Signup, Home, and Chat functionalities.
- **State Management**: Utilizes React Context or Redux for global state management (e.g., user authentication, matches).

### Backend
- **API Routes**: RESTful API endpoints for user authentication, profile management, and messaging.
- **Database Models**: Mongoose models for Users, Matches, and Messages in MongoDB.
- **Authentication**: JWT (JSON Web Tokens) for secure user sessions.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- MongoDB
- React Native CLI
- A code editor (like Visual Studio Code)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/dating-app.git
   cd dating-app
