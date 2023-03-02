using System.Collections.Generic;
using Statiq.Common;

namespace Verdoct
{
    /// <summary>
    /// This model is used for the _DocumentTable partial that renders documents, titles, headers, and summaries as a table.
    /// </summary>
    public class DocumentTable
    {
        public IList<IDocument> Documents { get; set; }
        public string Title { get; set; }
        public string Header { get; set; }
        public bool HasSummary { get; set; }
        public bool LinkTypeArguments { get; set; } = true;
    }
}