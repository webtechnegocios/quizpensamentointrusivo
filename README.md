# Project Overview

This is a Next.js web application that functions as a quiz to assess the impact of intrusive thoughts on a user's life. The application is built with Next.js, React, and TypeScript. It presents a series of questions to the user and, upon completion, directs them to a video and a call to action.

The application is structured as a single-page application, with the main logic contained within the `app/page.tsx` file. Styling is handled globally through the `app/globals.css` file. The project uses `lucide-react` for icons.

## Building and Running

To get the project up and running, use the following commands:

*   **`npm run dev`**: Starts the development server.
*   **`npm run build`**: Builds the application for production.
*   **`npm run start`**: Starts the production server.
*   **`npm run lint`**: Lints the codebase for errors.

## Development Conventions

*   The project uses functional components with React Hooks.
*   Styling is done using global CSS in the `app/globals.css` file.
*   The project uses `lucide-react` for SVG icons.
*   The application state is managed using the `useState`, `useEffect`, and `useMemo` hooks.
