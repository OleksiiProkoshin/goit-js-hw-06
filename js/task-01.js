const categoriesList = document.getElementById('categories');
const categoryItems = categoriesList.querySelectorAll('.item');

const categoryCount = categoryItems.length;
console.log(`Number of categories: ${categoryCount}`);

categoryItems.forEach((item) => {
  const categoryTitle = item.querySelector('h2').textContent;
  const categoryElements = item.querySelectorAll('li').length;
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryElements}`);
});
