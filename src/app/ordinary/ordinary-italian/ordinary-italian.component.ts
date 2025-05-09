import { Component, ElementRef, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-ordinary-italian',
  templateUrl: './ordinary-italian.component.html',
  styleUrls: ['./ordinary-italian.component.css']
})
export class OrdinaryItalianComponent  {
    @ViewChild('certificate') certificateElement!: ElementRef;

    odianryItalianData = {
      referenceNo: '',
      myrefrenceNo: '',
      name: '',
      examYear: '',
      indexNo: ''
    }

    generatePDF() {
      const element = this.certificateElement.nativeElement;
      const downloadButton = document.getElementById('downloadBtn'); // Get the button by ID
  
      if (downloadButton) {
        downloadButton.style.display = 'none'; // Hide button before capturing
      }
      
      // Convert all input fields to plain text before capturing
      const inputs = element.querySelectorAll('input');
      inputs.forEach((input: HTMLInputElement) => {
        const textSpan = document.createElement('span');
        textSpan.textContent = input.value;
        const styles = window.getComputedStyle(input);
      
        // Preserve input styles
        textSpan.style.cssText = styles.cssText;
        textSpan.style.border = 'none'; // Remove input box styling
        textSpan.style.padding = styles.padding;
        textSpan.style.margin = styles.margin;
        textSpan.style.width = styles.width;
        textSpan.style.display = 'inline-block';
      
        input.parentNode?.replaceChild(textSpan, input);
      });
  
      html2canvas(element, {
        scale: 3, // High-quality output
        useCORS: true,
        allowTaint: true, // Allows cross-origin images
        scrollX: 0,
        scrollY: 0,
        width: element.scrollWidth, // Ensures full width is captured
        height: element.scrollHeight // Ensures full height is captured
      }).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
  
        const margin = 10; // 10mm margin
        const pageWidth = 210 - 2 * margin; // A4 width (210mm) - left & right margins
        const pageHeight = 297 - 2 * margin; // A4 height (297mm) - top & bottom margins
        
        // Calculate image width and height while maintaining aspect ratio
        let imgWidth = pageWidth;
        let imgHeight = (canvas.height * imgWidth) / canvas.width;
        
        // If image height exceeds page height, adjust to fit
        if (imgHeight > pageHeight) {
          imgHeight = pageHeight;
          imgWidth = (canvas.width * imgHeight) / canvas.height;
        }
  
        // Center the image on the page
        const xPos = (210 - imgWidth) / 2; // Center horizontally
        const yPos = margin; // Start at margin from top
        
        pdf.addImage(imgData, 'PNG', xPos, yPos, imgWidth, imgHeight, '', 'FAST');
        pdf.save('Oridinary_Italian_Certificate.pdf');
  
        // Restore input fields after capturing
        location.reload();
      });
  }
  

}
