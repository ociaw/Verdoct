if (document.readyState !== 'loading') {
    setupDocable();
} else {
    document.addEventListener('DOMContentLoaded', setupDocable);
}

function setupDocable() {
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
    let target = document.querySelector(".mermaid svg");
    if (target === null) {
        return;
    }

    window.panZoom = svgPanZoom(target, {
        zoomEnabled: true,
        controlIconsEnabled: true,
        fit: true,
        center: true,
        maxZoom: 20,
        zoomScaleSensitivity: 0.6
    });

    // Do the reset once right away to fit the diagram
    resetSvgPanZoom();
    // Also reset whenever the window is resized
    window.addEventListener("resize", resetSvgPanZoom);
}

function resetSvgPanZoom() {
    window.panZoom.resize();
    window.panZoom.fit();
    window.panZoom.center();
}
