# 🎩 Hanging by a Thread - A Hangman Game for Reddit 🎮

**Hanging by a Thread** is a fun and interactive Hangman game built using [Devvit Playground](https://devvit.gg/docs). It runs as a **custom post type on Reddit**, making it a unique and engaging experience for Reddit communities.

🔥 **Built for the Reddit Hackathon!** 🔥

![Screenshot](https://via.placeholder.com/600x300?text=Hanging+by+a+Thread+Screenshot)

---

## 📌 Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Hackathon Submission](#hackathon-submission)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

---

## 🚀 Features

- **Reddit Integration** – Runs natively as a custom post type using Devvit.
- **Fully Responsive** – Automatically adjusts layout and font sizes for both desktop and mobile screens.
- **Animated Hangman** – Stick figure appears line by line for each incorrect guess.
- **QWERTY Keypad** – Clickable keyboard for guessing letters.
- **Game Over Conditions** – When the game is won or lost, the keypad is removed from the screen.
- **Easy Deployment** – Can be deployed to any subreddit in minutes.

---

## 🎮 Demo

🚀 **Try the game on Reddit:** [Live Demo Link (Add Your Link Here)]

*(Include a short GIF or video demo if available.)*

---

## 🛠 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/hanging-by-a-thread.git
cd hanging-by-a-thread
```


### 2. Install Dependencies

This project uses the **Devvit public API**. Make sure you have the **Devvit CLI** installed.  
Follow the [Devvit installation guide](https://docs.devvit.io/) if needed.

### 3. Run Locally

Use **Devvit Playground** to preview your app:

```bash
devvit start
```
Open the preview URL in your browser to test the Hangman game.

## Usage

### Game Play
- The player is presented with a **hidden word** and a **keyboard**.
- Clicking a letter **reveals** its occurrences in the word or **counts as a wrong guess**, gradually drawing the Hangman figure.
- When the player **correctly guesses** the word, they **win**.
- Too many wrong guesses result in a **loss**.

## Deployment

### Authenticate with Devvit

Log in to your **Devvit** account using your **Reddit credentials**:

```bash
devvit login
```
### Deploy to Your Subreddit
Use the following command to deploy:

```bash
devvit deploy --subreddit <yourSubredditName>
```
### Verify Deployment

Visit your **subreddit** and create a new post with your **custom post type** to see your Hangman game live on Reddit!

## Contributing

Contributions are welcome! If you have ideas for improvements, please follow these steps:

1. **Fork** the repository.
2. **Create a new branch** (`git checkout -b feature/YourFeature`).
3. **Commit your changes** (`git commit -am 'Add new feature'`).
4. **Push to the branch** (`git push origin feature/YourFeature`).
5. **Create a new Pull Request**.

For major changes, please open an **issue** first to discuss what you would like to change.

## License

This project is licensed under the **MIT License**.

## Acknowledgments

- Thanks to the **Devvit Playground** team for their amazing platform and documentation.
- Special thanks to **Reddit** for supporting innovative community projects.
- Inspired by **classic Hangman games** and modern **web development techniques**.
- **Developed by us during Hack Reddit 2025.**
