$(document).ready(function() {
    quicklink.listen();

    // Bootstrap tooltips
    $('[data-toggle="tooltip"]').tooltip();

    // Mermaid diagrams
    mermaid.initialize(
        {
            flowchart:
                {
                    useMaxWidth: false
                },
            startOnLoad: false,
            cloneCssStyles: false
        });
    mermaid.init(undefined, ".mermaid");

    // Make it scrollable
    var target = document.querySelector(".mermaid svg");
    if(target !== null)
    {
        var panZoom = window.panZoom = svgPanZoom(target, {
            zoomEnabled: true,
            controlIconsEnabled: true,
            fit: true,
            center: true,
            maxZoom: 20,
            zoomScaleSensitivity: 0.6
        });

        // Do the reset once right away to fit the diagram
        panZoom.resize();
        panZoom.fit();
        panZoom.center();

        $(window).resize(function(){
            panZoom.resize();
            panZoom.fit();
            panZoom.center();
        });
    }
});
