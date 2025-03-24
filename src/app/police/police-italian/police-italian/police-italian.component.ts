

import { Component, ElementRef, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
@Component({
  selector: 'app-police-italian',
  templateUrl: './police-italian.component.html',
  styleUrls: ['./police-italian.component.css']
})
export class PoliceItalianComponent {
  @ViewChild('certificate') certificateElement!: ElementRef;

  policedata = {
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
    email:'',
    passportnum:'',
    add:'',
    fullname:'',
    telephoneno:'',
  };
  // generatePDF() {
  //   const element = this.certificateElement.nativeElement;
  //   const downloadButton = document.getElementById('downloadBtn'); // Get the button by ID

  //   if (downloadButton) {
  //     downloadButton.style.display = 'none'; // Hide button before capturing
  //   }
    
  //   // Convert all input fields to plain text before capturing
  //   const inputs = element.querySelectorAll('input');
  //   inputs.forEach((input: HTMLInputElement) => {
  //     const textSpan = document.createElement('span');
  //     textSpan.textContent = input.value; // Set input value as text
  //     textSpan.style.fontSize = getComputedStyle(input).fontSize;
  //     textSpan.style.fontFamily = getComputedStyle(input).fontFamily;
  //     textSpan.style.fontWeight = getComputedStyle(input).fontWeight;
  //     textSpan.style.marginLeft = input.style.marginLeft;
  //     textSpan.style.marginRight = input.style.marginRight;
      
  //     input.parentNode?.replaceChild(textSpan, input);
  //   });
  
  //   html2canvas(element, {
  //     scale: 3, // High quality
  //     useCORS: true, // Fixes external asset issues
  //     scrollX: 0,
  //     scrollY: 0,
  //     windowWidth: document.documentElement.offsetWidth, // Ensures full width capture
  //     windowHeight: document.documentElement.offsetHeight // Ensures full height capture
  //   }).then(canvas => {
  //     const imgData = canvas.toDataURL('image/png');
  //     const pdf = new jsPDF('p', 'mm', 'a4');
      
  //     // Calculate height dynamically to ensure full content
  //     const imgWidth = 210; // A4 width in mm
  //     const imgHeight = (canvas.height * imgWidth) / canvas.width;
  
  //     pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight, '', 'FAST');
  
  //     // Save the PDF
  //     pdf.save('Police_Certificate.pdf');
      
  //     // Restore input fields after capturing
  //     location.reload(); 
  //   });
  // }
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
      
      input.parentNode?.replaceChild(textSpan, input);
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
      
      // Calculate height dynamically to ensure full content
      const imgWidth = 210; // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
  
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight, '', 'FAST');
  
      // Save the PDF
      pdf.save('Police_Italian_Certificate.pdf');
      
      // Restore input fields after capturing
      location.reload(); 
    });
  }
  

}






