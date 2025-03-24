import { Component, ElementRef, ViewChild } from '@angular/core'; // ✅ Import required Angular modules
import html2canvas from 'html2canvas'; // ✅ Import html2canvas
import jsPDF from 'jspdf'; // ✅ Import jsPDF


@Component({
  selector: 'app-birth-english',
  templateUrl: './birth-english.component.html',
  styleUrls: ['./birth-english.component.css']
})
export class BirthEnglishComponent {
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

  birthEnglishData = {
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
    nameandsurname: '',
    dateofbirth: '',
    placeofbirth: '',
    rank: '',
    ethi: '',
    infosign:'',
    regisign:'',

    nameandsurname2: '',
    dateofbirth2: '',
    placeofbirth2: '',
    rank2: '',
    ethi2: '',


    nameandsurname3: '',
    dateofbirth3: '',
    placeofbirth3: '',
    rank3: '',
    ethi3: '',


    nameandsurname4: '',
    dateofbirth4: '',
    placeofbirth4: '',
    rank4: '',
    ethi4: '',

    date:'',
    annotations:''
  };

  generatePDF() {
    const page1Element = document.getElementById('page1') as HTMLElement | null;
    const page2Element = document.getElementById('page2') as HTMLElement | null;
    const downloadButton = document.getElementById('downloadBtn');

    if (!page1Element || !page2Element) {
        console.error('One or both of the page elements are missing.');
        return;
    }

    if (downloadButton) {
        downloadButton.style.display = 'none'; // Hide button before capturing
    }

    const pdf = new jsPDF('p', 'mm', 'a4');
    const pageWidth = 210; // A4 width in mm
    const pageHeight = 297; // A4 height in mm
    const margin = 10; // Margin for spacing

    // **Define Fixed Image Size for Consistency**
    const imgMaxWidth = pageWidth - margin * 2; // Max width
    const imgMaxHeight = pageHeight - margin * 2; // Max height

    let firstImageWidth: number = imgMaxWidth;

    // **Function to Center & Scale Images in PDF**
    const addImageToPDF = (canvas: HTMLCanvasElement, pageNumber: number, forceWidth = false) => {
        const imgData = canvas.toDataURL('image/png');

        let imgWidth = imgMaxWidth;
        let imgHeight = (canvas.height * imgWidth) / canvas.width;

        if (imgHeight > imgMaxHeight) {
            imgHeight = imgMaxHeight;
            imgWidth = (canvas.width * imgHeight) / canvas.height;
        }

        // **Store the First Page's Image Width**
        if (pageNumber === 1) {
            firstImageWidth = imgWidth;
        }

        // **Force Second Page Image to Use the First Image's Width**
        if (forceWidth) {
            imgWidth = firstImageWidth;
            imgHeight = (canvas.height * imgWidth) / canvas.width; // Maintain aspect ratio
        }

        // **Calculate X to Center the Image**
        const x = (pageWidth - imgWidth) / 2; // Center horizontally
        
        // **Set Y to Start from the Top for Page 2**
        const y = pageNumber === 2 ? margin : (pageHeight - imgHeight) / 2; // Top margin for 2nd page, center for others

        if (pageNumber > 1) pdf.addPage();
        pdf.addImage(imgData, 'PNG', x, y, imgWidth, imgHeight);
    };

    // **Capture First Page**
    html2canvas(page1Element, {
        scale: 3,
        useCORS: true,
        scrollX: 0,
        scrollY: 0,
        windowWidth: document.documentElement.scrollWidth,
        windowHeight: document.documentElement.scrollHeight,
    }).then(canvas1 => {
        addImageToPDF(canvas1, 1);

        // **Capture Second Page**
        html2canvas(page2Element, {
            scale: 3,
            useCORS: true,
            scrollX: 0,
            scrollY: 0,
            windowWidth: document.documentElement.scrollWidth,
            windowHeight: document.documentElement.scrollHeight,
        }).then(canvas2 => {
            addImageToPDF(canvas2, 2, true); // Force second image to match first image width
            pdf.save('Birth_English_Certificate.pdf');

            if (downloadButton) {
                downloadButton.style.display = 'block';
            }
        });
    });
    
  }}

