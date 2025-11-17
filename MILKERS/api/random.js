const fetch = require("node-fetch");

module.exports = async (req, res) => {
  try {
    // Replace with your raw text file URL (GitHub Gist, Pastebin raw, etc.)
    const response = await fetch("https://gist.githubusercontent.com/soliloquilic21/29ee7e0dea15c2aeb436ec42256c3d00/raw/e2705c79370e26c8a73db22c418da1803393e0c1/MILKERS.txt");
    const text = await response.text();
    const lines = text.split("\n").filter(l => l.trim() !== "");
    const randomLine = lines[Math.floor(Math.random() * lines.length)];
    res.status(200).send(randomLine);
  } catch (err) {
    res.status(500).send("Error fetching lines");
  }
};
