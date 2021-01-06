export default function generateExcerpt(content: string, wordLimit = 30) {
  return content.split(" ").slice(0, wordLimit).join(" ") + "...";
}
