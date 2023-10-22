function component(options) {
    const {tableClass, imageUrl, videoUrl, titleUrl, title, github, width, height,
        jobTitle, duration, description, imgWidth, imgHeight} = options

    let trId = title.toLowerCase().replace(/ /g, "_")
    let videoId = trId + "_video";

    let githubLink = 
        !github || github.length == 0 
        ? "" 
        : `<br><i class="fa fa-github"></i><a href="${github}">code</a>`

    let mediaHtml = 
        !videoUrl || videoUrl.length == 0 
        ? 
        `<img src='${imageUrl}' video width="${imgWidth}" height="${imgHeight}">`
        :
        `
        <div class="sublevel" id='${videoId}' style="height: ${imgHeight}px">
            <video width="${width}" height="${height}" muted loop>
                <source src="${videoUrl}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
        <img src='${imageUrl}' video width="${imgWidth}" height="${imgHeight}">
        `

    let titleHtml = 
        !titleUrl || titleUrl.length == 0
        ? `<generalTitle>${title}</generalTitle>`
        : `<a href="${titleUrl}"><generalTitle>${title}</generalTitle></a>`

    let trHtml =
        !videoUrl || videoUrl.length == 0
        ? `<tr id="${trId}"></tr>`
        : `<tr onmouseover="handleVideoMouseOver('${videoId}')" onmouseout="handleVideoMouseOut('${videoId}')"  id="${trId}">`

    

    const tableHTML = `
    <table class="${tableClass}">
        <tbody>
            ${trHtml}
                <td class="td1">
                    <div class="level">
                        <div class="midlevel">
                            ${mediaHtml}
                        </div>
                    </div>
                </td>
                <td class="td2">
                    ${titleHtml}
                    <br>
                        ${duration}
                    ${githubLink}
                    <p>
                        ${description}
                    </p>
                </td>
            </tr>
        </tbody>
    </table>
    `
    return tableHTML
}

// attach the even handlers sepearately
function handleVideoMouseOver(videoId) {
    const videoElem = document.getElementById(videoId).querySelector('video');
    videoElem.play();
    console.log("play")
    document.getElementById(videoId).style.opacity = "1";
}

function handleVideoMouseOut(videoId) {
    const videoElem = document.getElementById(videoId).querySelector('video');
    videoElem.pause();
    document.getElementById(videoId).style.opacity = "0";
}


function headerComponent(options) {

    const {header, subheader} = options;

    const headerHTML = `<h1>${header}</h1>`;
    const subheaderHTML = 
        !subheader || subheader.length == 0 
        ? ``
        : `<h7>${subheader}</h7>`

    const html =
    `
        <table class="tableDefault">
        <tbody>
        <tr>
            <td class="tdHeader">
            ${headerHTML}
            ${subheaderHTML}
            </td>
        </tr>
        </tbody>
    </table>
    `
    return html;
}