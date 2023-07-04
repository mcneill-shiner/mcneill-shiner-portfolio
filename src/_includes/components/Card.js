const {html} = require('common-tags');

function Card({title, img, imgAlt, stack, desc, url, gitUrl}) {
    let stackList = '';
    for (i = 0; i < stack.length; i++) {
        stackList += `<li>${stack[i]}</li>`;
    };

    return html`
        <div>
            <img src="${img}" alt="${imgAlt}">
            <span class="block font-semibold text-xl py-4">${title}</span>
            <ul class="uppercase font-serif flex gap-2">
                    ${stackList}
                    <li>Liquid</li>
                    <li>HTML/CSS</li>
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