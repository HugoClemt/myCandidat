import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enseignant',
  templateUrl: './enseignant.page.html',
  styleUrls: ['./enseignant.page.scss'],
})
export class EnseignantPage implements OnInit {
  dataUser = {
    email: '',
    password:''
  };

  connected: boolean;

  constructor(
    public afAuth: AngularFireAuth,
    public router: Router,
  ) { 
    this.afAuth.authState.subscribe(auth => {
      if ( !auth){
        console.log('non connecté');
        this.connected = false;
        this.router.navigateByUrl('/login');
      } else {
        console.log('connecté');
        this.connected = true;
        
      }
    })
  }

  logout(){
    this.afAuth.signOut();
  }

  ngOnInit() {
  }

}
