module.exports = (text, bgColor, borderColor, link, isSubmit, id) => {
  if (isSubmit) {
    return `
      <div>
        <button id=${id} class="bg-${bgColor} text-lg font-medium uppercase py-2 px-4 border-2 border-${borderColor} rounded-lg">
          <span
            class=""
            >${text}</span>
          </button>
      </div>
    `;
  } else {
    return `
    <a href="${link}" class="inline-block">
      <span class="bg-${bgColor} text-lg inline-block font-medium uppercase py-2 px-4 border-2 border-${borderColor} rounded-lg">${text}</span>
    </a>
  `;
  }


};


