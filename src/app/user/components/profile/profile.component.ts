import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  profileForm: FormGroup;
  profileCardVisible = false;
  isLocalStorageAvailable = false;
  router: any;

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {
    this.isLocalStorageAvailable = this.checkLocalStorage();

    this.profileForm = this.fb.group({
      name: ['', [Validators.required]],
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{11}$')]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit() {
    if (this.isLocalStorageAvailable) {
      this.loadProfileData();
    }
  }

  checkLocalStorage(): boolean {
    try {
      const test = 'test';
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch (e) {
      return false;
    }
  }

  toggleProfileCard() {
    this.profileCardVisible = !this.profileCardVisible;
  }

  onSubmit() {
    if (this.profileForm.valid && this.isLocalStorageAvailable) {
      localStorage.setItem('profileName', this.profileForm.get('name')?.value);
      localStorage.setItem('profileAddress', this.profileForm.get('address')?.value);
      localStorage.setItem('profileCity', this.profileForm.get('city')?.value);
      localStorage.setItem('profilePhone', this.profileForm.get('phone')?.value);
      localStorage.setItem('profileEmail', this.profileForm.get('email')?.value);

      this.snackBar.open('Your profile has been updated!', 'Close', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'center',
        panelClass: ['custom-snackbar']
      });

      console.log('Profile updated and saved:', this.profileForm.value);
    }
  }

  loadProfileData() {
    this.profileForm.patchValue({
      name: localStorage.getItem('profileName') || '',
      address: localStorage.getItem('profileAddress') || '',
      city: localStorage.getItem('profileCity') || '',
      phone: localStorage.getItem('profilePhone') || '',
      email: localStorage.getItem('profileEmail') || ''
    });
  }
}
