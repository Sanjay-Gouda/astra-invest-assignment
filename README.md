# astrainvest-task
This project is built using **Next.js** and **TypeScript**, with **React Query** for data fetching and state management. It leverages **MUI 6** for UI components and styling, supporting both light and dark themes with MUI’s inbuilt theme pattern.

# Project Name

A [Next.js] and [TypeScript] based web application designed for efficient data management, state handling, and user experience. This project utilizes the latest web technologies to ensure high performance, a rich design, and smooth user interactions.

## Tech Stack

- **Framework**: Next.js
- **Language**: TypeScript
- **Package Manager**: Yarn
- **State Management & Data Fetching**: React Query
- **Design Library**: MUI 6
- **Theming**: MUI inbuilt support for dark and light modes
- **Context Store**: Custom context store to manage theme toggling

## Features

- **Dynamic Data Management**: Leveraging [React Query](https://tanstack.com/query/latest) for optimized data fetching and state management.
- **Custom Theming**: Built-in dark and light themes using MUI's inbuilt theme pattern, with a context store to track theme changes.
- **UI/UX**: Styled with MUI 6 for a responsive, consistent, and modern design.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Sanjay-Gouda/astrainvest-task.git
    cd astrainvest-task
    ```

2. Install dependencies:
    ```bash
    yarn install
    ```

3. Start the development server:
    ```bash
    yarn dev
    ```

The application should now be running at [http://localhost:3000](http://localhost:3000).

## Project Structure

- **`/src`**: Contains the main application source code.
- **`/components`**: Reusable UI components.
- **`/context`**: Context provider for global theme management.
- **`/pages`**: Next.js page components, corresponding to application routes.
- **`/styles`**: Global and component-specific styles.

## Theming

The application supports dark and light themes powered by MUI's inbuilt theme configuration. A context store tracks theme preference and allows users to toggle between themes, preserving their choice across sessions.

## API Integration

Data is fetched via React Query, enabling efficient data retrieval and caching for a seamless user experience. React Query handles all API calls, reducing network requests and managing application state effectively.

## Scripts

- **`yarn dev`**: Start the development server.
- **`yarn build`**: Build the application for production.


