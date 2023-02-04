if (document.readyState !== 'loading') {
    setupSearch();
} else {
    document.addEventListener('DOMContentLoaded', setupSearch);
}

function runSearch(query) {
    const resultsEl = document.getElementById("search-results");
    // Clear previous search results
    resultsEl.innerHTML = "";

    // If the search term is less than 2 characters, wait until the user types some more stuff
    if (query.length < 2)
    {
        return;
    }

    // Update the URL so that the user can come back to these results
    var url = new URL(window.location.href);
    url.searchParams.set("query", query);
    window.history.replaceState(url.href, "", url.href);

    // Tell Lunr to run the search
    search.search(query, function(results)
    {
        // Set up for scroll to text fragment on results links
        // https://github.com/WICG/scroll-to-text-fragment
        var highlight = "#:~:" + query.split(" ").map(term => {
            if(term.includes("^"))
                term = term.slice(0, term.indexOf("^"));
            if(term.includes("~"))
                term = term.slice(0, term.indexOf("~"));
            if(term.includes(":"))
                term = term.slice(term.indexOf(":")+1);
            return "text=" + term.replace("*", "").replace("+", "").replace("-", "");
        }).join("&");

        // Prepare output formatting
        var listHtml = "<ul>";
        if (results.length === 0)
        {
            listHtml += "<li>No results found</li>";
        }
        else
        {
            for (var i = 0; i < results.length; ++i)
            {
                var res = results[i];
                listHtml += `
<div class="search-result page-box">
    <h4><a href="${res.link}${highlight}">${res.title}</a></h4>
    <div class="excerpt">${res.excerpt ?? ""}</div>
</div>
`;
            }
        }
        listHtml += "</ul>";
        resultsEl.innerHTML = listHtml;
    });
}

function setupSearch() {
    const searchBox = document.getElementById("search");
    if (searchBox === null) {
        return;
    }

    // Hook into changes on the search box
    searchBox.addEventListener("input", () => runSearch(searchBox.value));
    searchBox.addEventListener("propertychange", () => runSearch(searchBox.value));
    searchBox.addEventListener("paste", () => runSearch(searchBox.value));

    // If the URL contains a search parameter, do that search now
    const urlParams = new URLSearchParams(window.location.search);
    const queryParam = urlParams.get('query');
    if (queryParam) {
        searchBox.value = queryParam;
        runSearch(searchBox.value);
    }
}
