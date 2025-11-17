const fetch = require("node-fetch");

module.exports = async (req, res) => {
  try {
    // Replace with your raw text file URL (GitHub Gist, Pastebin raw, etc.)
    const response = await fetch("https://pastebin.com/raw/abcd1234");
    const text = await response.text();
    const lines = text.split("\n").filter(l => l.trim() !== "");
    const randomLine = lines[Math.floor(Math.random() * lines.length)];
    res.status(200).send(randomLine);
  } catch (err) {
    res.status(500).send("Error fetching lines");
  }
};
