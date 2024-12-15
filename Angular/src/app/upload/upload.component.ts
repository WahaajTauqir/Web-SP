import { Component } from '@angular/core';
import { Console } from 'node:console';

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [],
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  file: File | null = null;

  onFileChange(event: any): void {
    const fileInput = event.target.files[0];
    if (fileInput) {
      this.file = fileInput;
    }
  }

  async onSubmit() {
    console.log('onSubmit');

    if (this.file) {
      const formData = new FormData();
      formData.append('webglFile', this.file);

      try {
        const response = await fetch('http://localhost:5000/webgl/upload', {
          method: 'POST',
          body: formData,
        });

        const result = await response.json(); // Read response JSON only once
        if (response.ok) {
          alert(`Success: ${result.message}`);
        } else {
          alert(`Error: ${result.message || 'Upload failed'}`);
        }
      } catch (error) {
        console.error('Error uploading file:', error);
        alert('Error uploading file!');
      }
    }
  }
}
