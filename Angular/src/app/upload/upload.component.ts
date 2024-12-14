import { Component } from '@angular/core';

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [],
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  file: File | null = null;

  // This method is triggered when a file is selected
  onFileChange(event: any): void {
    const fileInput = event.target.files[0];
    if (fileInput) {
      this.file = fileInput;
    }
  }

  // This method is triggered when the form is submitted
  async onSubmit() {
    if (this.file) {
      const formData = new FormData();
      formData.append('webglFile', this.file);

      try {
        const response = await fetch('http://localhost:5000/webgl/upload', {
          method: 'POST',
          body: formData,
        });

        const result = await response.json();
        alert(result.message);
      } catch (error) {
        console.error('Error uploading file:', error);
        alert('Error uploading file!');
      }
    }
  }
}
