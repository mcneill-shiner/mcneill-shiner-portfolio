const {html} = require('common-tags');

function Card({title, img, imgAlt, stack, desc, url, gitUrl}) {
    const stackList = stack.map(el => `<li>${el}</li>`).join('')

    return html`
        <div class="py-2">
            <a href="${url}" target="_blank"><img src="${img}" alt="${imgAlt}"></a>
            <a href="${url}" target="_blank">
                <h3 class="block font-serif tracking-wider text-xl py-2">${title}</h3>
            </a>
            <p class="">${desc}</p>
            <div class="py-6">
                <span class="bg-kraft text-xl font-medium uppercase p-2 border-2 border-oxblood rounded-lg my-4"><a href="${url}" target="_blank">View Project</a></span>
                ${gitUrl ? `<span><a href="${gitUrl}" target="_blank">View Code</a></span>` : ``}
            </div>

        </div>
    `;
}

module.exports = Card;