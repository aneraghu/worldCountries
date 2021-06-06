// search values from given dataset
export const searchValues=(needle, dataset)=> {
  var found = [];
  var regx = new RegExp(needle, 'i');
  dataset.forEach(function(item, ix) {
      if (typeof item['name'] !== 'string') return;
      if (item['name'].match(regx)) {
        if (found.indexOf(ix) === -1) { found.push(item); }
      }
  });
return found;
}
// Deboucing function for search api
export const debounce = (func, wait=1000) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};
