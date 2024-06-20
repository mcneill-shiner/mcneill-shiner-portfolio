module.exports = (text, color, link, isSubmit, id) => {
  if (isSubmit) {
    return `
      <div>
        <button id=${id} class="bg-${color} text-lg font-medium uppercase p-2 border-2 border-black rounded-lg">
          <span
            class=""
            >${text}</span>
          </button>
      </div>
    `;
  } else {
    return `
    <a href="${link}" class="inline-block">
      <span class="bg-${color} text-lg inline-block font-medium uppercase p-2 border-2 border-black rounded-lg">${text}</span>
    </a>
  `;
  }


};


