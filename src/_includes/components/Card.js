const {html} = require('common-tags');

function Card({title, img, imgAlt, stack, desc, url, gitUrl}) {
    stack.map(el => `<li>${el}</li>`).join('')

    return html`
        <div>
            <img src="${img}" alt="${imgAlt}">
            <span class="block font-semibold text-xl py-4">${title}</span>
            <ul class="uppercase font-serif flex gap-2">
                    ${stack}
            </ul>
            <p class="py-4">${desc}</p>
            <div class="flex gap-4 uppercase font-serif underline underline-offset-8 decoration-olive">
                <span><a href="${url}" target="_blank">View Project</a></span>
                <span><a href="${gitUrl}" target="_blank">View Code</a></span>
            </div>

        </div>
    `;
}

module.exports = Card;