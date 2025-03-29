const eduUtils = require('./eduUtils.js');

console.log('All Subjects:', eduUtils.getAllSubjects());
console.log('Mathematics Categories:', eduUtils.getSubCategories('Mathematics'));
console.log('Physics Topics:', eduUtils.getTopics('Science', 'Physics'));
console.log('Search for "equations":', eduUtils.searchTopic('equations'));
