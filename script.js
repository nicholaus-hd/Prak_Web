let stories = [
  "hohoho (Adventure - Lucu): My friend and I ate shrooms, and then hitchhiked back to our campus, which was three hours away. Ahh, and if you're wondering why i use english, it's because it isn't a foreign language.",
  "Anonymous (Adventure - Sedih): Entahlah bro, dah ga tau lagi gua",
  "seseorang (Parody - Sedih): Flashdisk kalau hilang disebut apa? … Kehilangan memory."
];  

function submitStory(event) {
  event.preventDefault();

  const authorName = document.getElementById("authorName").value.trim() || "Guest";
  const storyText = document.getElementById("storyInput").value.trim();
  const category = document.querySelector('input[name="category"]:checked')?.value || "Uncategorized";
  const mood = document.getElementById("mood").value || "Neutral";
  const anonymous = document.getElementById("anonymous").checked;

  if (storyText) {
    const finalAuthor = anonymous ? "Anonymous" : authorName;
    const fullStory = `${finalAuthor} (${category} - ${mood}): ${storyText}`;

    window.location.href = "thankyou.html";
  } else {
    alert("⚠️ Tolong tulis ceritamu terlebih dahulu.");
  }
}

function showRandomStory() {
  if (!stories.length) {
    document.getElementById("storyDisplay").innerText = "Masih belum ada cerita. Tulis ceritamu di sini.";
    return;
  }
  const randomIndex = Math.floor(Math.random() * stories.length);
  document.getElementById("storyDisplay").innerText = stories[randomIndex];
}

function displayAllStories() {
  const allStoriesList = document.getElementById("allStories");
  if (!allStoriesList) return; 
  allStoriesList.innerHTML = "";
  stories.forEach((story) => {
    const li = document.createElement("li");
    li.innerText = story;
    allStoriesList.appendChild(li);
  });
}

window.onload = () => {
  displayAllStories();
};
