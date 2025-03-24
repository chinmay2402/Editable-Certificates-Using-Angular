import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  signatureUrl: SafeResourceUrl | null = null;

  constructor(private sanitizer: DomSanitizer) {}

  onFileSelected(event: Event, type: string) {
    const file = (event.target as HTMLInputElement).files?.[0];

    if (file && type === 'signature') {
      const blobUrl = URL.createObjectURL(file);
      this.signatureUrl = this.sanitizer.bypassSecurityTrustResourceUrl(blobUrl); // Fix XSS issue
    }
  }
}
