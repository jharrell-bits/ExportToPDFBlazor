window.ExportToPDFBlazor = {
    ExportToPDF: (id, filename) => {
        var element = document.getElementById(id);

        if (element) {
            // temporarily add the .print class to the root element of the document
            document.documentElement.classList.add("print");

            var options = {
                image: { type: 'jpeg', quality: 0.95 },
                filename: filename,
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            };

            html2pdf()
                .set(options)
                .from(element)
                .toPdf()
                .save()
                .then(function () {
                    // remove the .print class from the root element of the document after export occurs
                    document.documentElement.classList.remove("print");
                });
        }
    }
}