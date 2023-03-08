//SCROLLER IMAGES
document.getElementById("library").innerHTML =
    "<h1>Library Poster</h1><p>This poster was created for a fictional library, targed towards a younger audience. The center book was constructed using a clipping mask over a raster photo optimized for 300ppi. Various vector graphics surrounding the book represent the different generes one could find in a library.</p><p>The bright colours match the colours of the library logo to maintain consistency in branding while still catching the eyes of kids and teens.</p><p>Tools used: Adobe Illustrator, Photoshop</p><p>Sources: <a href='https://stock.adobe.com/ca/images/bookshelf-full-with-books/65707740?prev_url=detail' target='_blank'><u>bookshelf image</a></p>"
    ;

document.getElementById("backpack").innerHTML = "<h1>Backpack Ad</h1><p>This magazine ad was created for a fictional company that sells hiking backpacks. The headline targets loyal customers who wanted the company's most popular product in multiple colours.</p><p>This magazine cover utilizes a minimalist design approach, showcasing the product and recognizable brand. The backpack's colour was altered using a layer masks and colour balance . Levels were used to reduce highlights and increase shadows in the background.</p><p>Tools used: Adobe Photoshop</p><p>Sources: <a href='https://unsplash.com/photos/MzTTVl_trFw' target='_blank'><u>backpack image</a></p>"
    ;

document.getElementById("cat").innerHTML = "<h1>Magazine Cover</h1><p>This Halloween-themed magazine cover was created for a fictional cat care magazine called 'Cat's Cradle'.</p><p>Four raster images are superimposed in this composition using differing levels in opacity and curves, in addition to destructive retouching techniques such as cloning, dodge and burn, and spot healing. Text layers hidden behind/in front of other layers are used to create depth in the image.</p><p>Tools used: Adobe Photoshop</p><p>Sources: <a href='https://unsplash.com/photos/3FFEdm8TOek' target='_blank'><u>forest image</a>, <a href='https://unsplash.com/photos/B9_l8G03aLA' target='_blank'><u>pumpkin image</a>, <a href='https://unsplash.com/photos/wnF27F85ZKw' target='_blank'><u>fire image</a></p>"
    ;

//GRID IMAGES
document.getElementById("coffee").innerHTML = "<h2>Espresso Machine</h2><p>This vector recreation of an espresso machine was the result of an exercise in applying learned Adobe Illustrator techniques in a realistic manner based on a reference photo.</p><p>The pathfinder tool was used to faithfully recreate the various odd shapes. Shadows were created using shape paths with a gaussian blur effect and metalic pieces utilized multiple gradient layers to mimic shine, while the wood grain texture was achieved with the graphic pen effect sandwiched between brown fill layers of varying opacity </p><p>Tools used: Adobe Illustrator</p><p>Sources: <a href='https://cdn.create-store.com/uk/wk/1873401/thera-matt-retro-espress-coffee-maker.jpg?cf-resize=gallery' target='_blank'><u>reference image</a></p>"
    ;

document.getElementById("dog").innerHTML = "<h2>Dog Graphic</h2><p>Cute dogs never go out of style! </p><p>Tools used: Adobe Illustrator</p>";

document.getElementById("lover").innerHTML = "<h2><i>Lover</i> Logo</h2><p>A vector graphic of Taylor Swift's <i>Lover</i> album</p><p>Tools used: Adobe Illustrator</p>"
    ;

document.getElementById("train").innerHTML = "<h2><i>SkyDine</i> Logos</h2><p>This fictional company provides gourmet healthy snacks and beverages on Vancouver Skytrains and Canadaline trains. </p><p>This logo was designed to be versatile so that it could be used on various marketing products (e.g., poster, menu, food wrapers, cups), yet also simple so that it is easy to understand and identify at a glance. These two logo samples utilize a pocketscarf and a chef hat to express the high-quality, delicious aspects of the company, while the modern subway train shape reflects train cars seen in Vancouver.</p><p>Tools used: Adobe Illustrator</p>"
    ;

document.getElementById("world").innerHTML = "<h2>My World</h2><p>In an ideal world, Patricia would be surrounded by cats and plants while sleeping in a room with floor-to-ceiling windows.</p><p>This introductory exercise was intended to build on new skills largely using the pathfinder and gradient tools, and to execute proper layer practices (e.g., proper groups, layer and group names, logical hierarchical structuring).</p><p>Tools used: Adobe Illustrator</p>"
    ;

document.getElementById("colorized").innerHTML = "<h2>Colorized Family Photo</h2><p>This black and white family photo was retouched and edited to add colour. The clone stamp tool was used to recreate areas in the photo where details were lost due to physical damage. The 'colorize' function converted the greyscale colours to RGB, after which colour correction to the entire picture, in addition to selected areas, were corrected.</p><p>Tools used: Adobe Photoshop</p>";

//VIDEO
document.getElementById("plantText").innerHTML = "<p>This short tutorial was created to engage and inform viewers on how to care for indoor houseplants.</p><p>Vector graphics of various plants and a lightbulb were created in Adobe Illustrator and imported into Adobe After Effects using proper layering structures. In After Effects, these graphics were animated by using the 'wiggle()' and 'loopout()' functions on the rotation and position elements. Editing the speed graph values was a critical part of creating natural-looking movements and animations.</p><p>Tools used: Adobe After Effects, Illustrator</p><p>Substrate images from <a href='https://unsplash.com/' target='_blank'><u>Unsplash</u></a>. <a href='https://studio.youtube.com/channel/UClwALtd-1cOOEEdVC-RUNRA/music' target='_blank'><u>Music from Youtube Audio Library</u></a>.</p><p>All Vector and video content created by Patricia Jiang.</p>"
    ;

//FUNCTIONS


function toggle() {
    var div = document.getElementById("plantText");

    if (window.getComputedStyle(div).display === "none") {
        div.style.display = "block";
    } else {
        div.style.display = "none";
    }
}