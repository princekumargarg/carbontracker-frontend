# CarbonTracker Frontend

## Overview

CarbonTracker is a minimal proof-of-concept web application that allows users to track their carbon footprint based on travel emissions and provides AI-generated recommendations for reducing their environmental impact.

## Features

- **Carbon Footprint Calculator**: Users can input basic travel details to estimate their carbon footprint.
- **AI Integration**: Uses AI to generate recommendations for reducing carbon emissions.
- **State Management**: Utilizes Zustand for persistent local storage.
- **REST API**: Communicates with a Node.js + Express backend for data processing.

## Tech Stack

- **Frontend**: React, Vite, Shadcn, Zustand
- **Backend**: Node.js, Express
- **Deployment**: Vercel (Frontend), Railway/Free-tier hosting (Backend)

## Installation

### Prerequisites

- Node.js (v16+)
- npm or yarn

### Setup Instructions

1. Clone the repository:

   ```sh
   git clone https://github.com/princekumargarg/carbontracker-frontend.git
   cd carbontracker-frontend
   ```
2. Install dependencies:

   ```sh
   npm install
   # or
   yarn install
   ```
3. backend API URL:

```sh
   https://bnz-green-test-backend-production.up.railway.app
```

4. Start the development server:

   ```sh
   npm run dev
   # or
   yarn dev
   ```

## Deployment

1. Build the project:
   ```sh
   npm run build
   ```
2. Deploy to Vercel:
   ```sh
   vercel
   ```

## Usage

1. Enter travel details in the form (distance, transport type, etc.).
2. Click "Calculate" to compute the carbon footprint.
3. View AI-generated recommendations for reducing emissions.
4. Data is stored persistently using Zustand.

## Repository

[GitHub Repository](https://github.com/princekumargarg/carbontracker-frontend.git)

## Live Demo

[Deployed Application](https://carbontracker-bnz.vercel.app/)

## License

This project is licensed under the MIT License.
