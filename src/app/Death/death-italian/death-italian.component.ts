import { Component, ElementRef, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-death-italian',
  templateUrl: './death-italian.component.html',
  styleUrls: ['./death-italian.component.css']
})
export class DeathItalianComponent {
  @ViewChild('certificate') certificateElement!: ElementRef;
  stampUrl: string | ArrayBuffer | null = null;
  signatureUrl: string | ArrayBuffer | null = null;
  
  onFileSelected(event: any, type: 'stamp' | 'signature') {
      const file = event.target.files[0];
      if (file) {
          const reader = new FileReader();
          reader.onload = (e: ProgressEvent<FileReader>) => {
              if (type === 'stamp') {
                  this.stampUrl = e.target?.result as string | ArrayBuffer | null; // Assign stamp image
              } else if (type === 'signature') {
                  this.signatureUrl = e.target?.result as string | ArrayBuffer | null; // Assign signature image
              }
          };
          reader.readAsDataURL(file);
      }
  }


  deathData = {
    referenceNo: '',
    certificateNo: '',
    district: '',
    division: '',
    dateOfDeath: '',
    name: '',
    genderEthnicity: '',
    age: '',
    profession: '',
    father: '',
    mother: '',
    causeOfDeath: '',
    burialPlace: '',
    declarantName: '',
    declarantTitle: '',
    declarantSignature: '',
    registrationDate: '',
    officerSignature: '',
    issueDate: '',
    date:'',
    annotations:'',
  };

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
      textSpan.textContent = input.value; // Set input value as text
      textSpan.style.fontSize = getComputedStyle(input).fontSize;
      textSpan.style.fontFamily = getComputedStyle(input).fontFamily;
      textSpan.style.fontWeight = getComputedStyle(input).fontWeight;
      textSpan.style.marginLeft = input.style.marginLeft;
      textSpan.style.marginRight = input.style.marginRight;
      textSpan.style.display = 'inline-block';
      textSpan.style.width = input.style.width; // Preserve width
      textSpan.style.height = input.style.height;
      textSpan.style.marginLeft = getComputedStyle(input).marginLeft;
      textSpan.style.marginRight = getComputedStyle(input).marginRight;
      textSpan.style.padding = getComputedStyle(input).padding;
      textSpan.style.textAlign = getComputedStyle(input).textAlign;

      // ✅ Move "Father" field to the right by placing inside a block container
      if (input.id === 'father') {
        textSpan.style.display = 'block'; // Ensure full row usage
        textSpan.style.textAlign = 'right'; // Move text to the right
        textSpan.style.marginLeft = 'auto'; // Auto-margin for right alignment
        textSpan.style.width = '100%'; // Make sure it takes full space
      }

      input.parentNode?.replaceChild(textSpan, input);
      if (input.id === 'father') {
        textSpan.style.marginLeft = '200%'; // Move father data to the right
      }
    });

    html2canvas(element, {
      scale: 3, // High quality
      useCORS: true, // Fixes external asset issues
      scrollX: 0,
      scrollY: 0,
      windowWidth: document.documentElement.offsetWidth, // Ensures full width capture
      windowHeight: document.documentElement.offsetHeight // Ensures full height capture
    }).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');

      const pageWidth = pdf.internal.pageSize.getWidth(); // A4 page width in mm
      const imgWidth = 160; // Image width
      const imgHeight = (canvas.height * imgWidth) / canvas.width; // Maintain aspect ratio

      const xPos = (pageWidth - imgWidth) / 2; // Center the image horizontally

      pdf.addImage(imgData, 'PNG', xPos, 0, imgWidth, imgHeight, '', 'FAST');

      // Save the PDF
      pdf.save('Death_Italian_Certificate.pdf');

      // Restore input fields after capturing
      location.reload();
    });
}

  

}