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
