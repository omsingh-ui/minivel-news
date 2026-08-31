export function calculateReadTime(article) {
  const content = [
    article.title,
    article.intro,
    article.openingPerspective,
    article.perspectiveInsight,
    article.editorialNote,
    article.focusCard?.title,
    article.workplaceLens?.title,
    article.workplaceLens?.text,

    ...(article.capabilityCards || []).flatMap((item) => [
      item.title,
      item.text,
    ]),

    ...(article.sections || []).flatMap((section) => [
      section.heading,
      section.text,
    ]),

    article.lookingAhead,
    article.takeaway,
  ]
    .filter(Boolean)
    .join(" ");

  const words = content.trim().split(/\s+/).length;

  const minutes = Math.max(1, Math.ceil(words / 200));

  return `${minutes} min read`;
}