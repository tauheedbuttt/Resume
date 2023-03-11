import ReactDOM from 'react-dom'
import React from 'react';
import html2pdf from 'html2pdf.js';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export const downloadPDF = (name, provider, component) => {
    // Create a DOM node to render the component into
    const componentNode = document.createElement('div');


    // Render the component into the DOM node
    ReactDOM.render(provider, componentNode);

    // Capture an image of the component with its styles using html2canvas
    setTimeout(() => {
        html2canvas(componentNode).then(canvas => {
            // Create a PDF using the image data
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF();
            pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);

            // Save the PDF to the user's device
            console.log('AOY')
            pdf.save(name);
        });
    }, 2000)
}
