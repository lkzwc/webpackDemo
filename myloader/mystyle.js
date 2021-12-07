//操作dom

module.exports = function (source) {
  return `
        const tag = document.createStyle("style")
        tag.innerHTML=${source};
        document.head.appendChild(tag)
    `;
};
