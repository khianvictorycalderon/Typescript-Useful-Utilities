export const slideTo = (id: string, offset = 0): void => {
  const element = document.getElementById(id);
  if (element) {
    // Get element position relative to the document
    const top = element.getBoundingClientRect().top + window.pageYOffset - offset;

    // Scroll to that position smoothly
    window.scrollTo({
      top,
      behavior: "smooth",
    });
  } else {
    console.warn(`Element with id "${id}" not found.`);
  }
};
