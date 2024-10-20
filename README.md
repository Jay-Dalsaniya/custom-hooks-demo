# React Custom Hook with Advanced CSS

This project demonstrates how to create a custom hook for managing `localStorage` in React and apply advanced CSS styling to enhance the user interface. The project uses `useLocalStorage` to persist the state in `localStorage` and implements smooth animations, transitions, and a responsive design using modern CSS techniques.

## Features

- **Custom React Hook**: Manages `localStorage` for easy state persistence.
- **Advanced CSS**: Utilizes gradient backgrounds, hover effects, and button animations.
- **Responsive Design**: Implements Flexbox for a modern layout.
- **Example Usage**: Demonstrates the `useLocalStorage` hook to store and retrieve user names.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **CSS**: Advanced styling with Flexbox, transitions, and animations.

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/Jay-Dalsaniya/custom-hooks-demo.git
   ```

2. **Navigate into the project directory**
   ```bash
   cd custom-hooks-demo
   ```

3. **Install the required dependencies**
   ```bash
   npm install
   ```

4. **Start the application**
   ```bash
   npm start
   ```

5. **Open your browser and go to** `http://localhost:3000` to see the app in action.

## How It Works

### `useLocalStorage` Hook

- The `useLocalStorage` hook retrieves the initial value from `localStorage` if available or sets the provided initial value.
- It returns the stored value and a setter function to update both the state and `localStorage`.

### Component Behavior

- Clicking the buttons changes the name in `localStorage`, and the updated value is reflected in the UI.
- The value persists after refreshing the page, as it's stored in `localStorage`.

### CSS Features

- The gradient background creates a smooth transition between two colors.
- The container is centered using Flexbox, with shadows and rounded corners to create a card-like effect.
- Buttons feature hover and click effects using CSS transitions and transform properties.

## Screenshots

**Change Name to Jay**  
![Click on Change Name to Jay](image.png)

**Reset Name to Jayu**  
![Click on Reset Name to Jayu](image-1.png)
