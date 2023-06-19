const categoriesList = document.getElementById('categories');
const categoryItems = categoriesList.querySelectorAll('.item');

const categoryCount = categoryItems.length;
console.log(`Number of categories: ${categoryCount}`);

categoryItems.forEach((item) => {
  const categoryTitle = item.children[0].textContent;
  const categoryElements = item.children[1].children.length;
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryElements}`);
});
