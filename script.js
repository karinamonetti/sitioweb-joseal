const COLORS = ["#fff2", "#FFDF5B", "#fff7", "#fffC"];

const generateSpaceLayer = (size, selector, totalStars, duration) => {
  const layer = [];
  for (let i = 0; i < totalStars; i++) {
    const color = COLORS[Math.floor(Math.random() * COLORS.length)];
    const x = Math.floor(Math.random() * 100);
    const y = Math.floor(Math.random() * 100);
    layer.push(`${x}vw ${y}vh 0 ${color}, ${x}vw ${y + 100}vh 0 ${color}`);
  }

  const container = document.querySelector(selector);
  container.style.setProperty("--space-layer", layer.join(","));
  container.style.setProperty("--size", size);
  container.style.setProperty("--duration", duration);
};

generateSpaceLayer("1px", ".space-1", 200, "25s");
generateSpaceLayer("2px", ".space-2", 100, "40s");
generateSpaceLayer("4px", ".space-3", 25, "15s");
