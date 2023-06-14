const categoriesList = document.getElementById('categories');
const categoryItems = categoriesList.querySelectorAll('.item');

// Number of categories
const categoryCount = categoryItems.length;
console.log(`Number of categories: ${categoryCount}`);

// Categories and Elements
categoryItems.forEach((item) => {
  const categoryTitle = item.querySelector('h2').textContent;
  const categoryElements = item.querySelectorAll('li').length;
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryElements}`);
});
