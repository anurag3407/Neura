export function checkHeading(str) {
  return str.startsWith('**') || str.endsWith('*');
}

export function replaceHeadingStars(str) {
  return str.replace(/^\*{2}/, "").replace(/\*$/, "");
}