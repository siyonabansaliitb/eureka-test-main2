import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  entrycount:number = 14978;
  entrycountstop:any = setInterval(()=>{
    if(window.scrollY>1050){
      this.entrycount++;
    if(this.entrycount==15000){
      clearInterval(this.entrycountstop)

    }
  
  }
  
  }, 2);
  mentorcount:number = 178;
    mentorcountstop:any = setInterval(()=>{
      if(window.scrollY>1050){
        this.mentorcount++;
      if(this.mentorcount==200){
        clearInterval(this.mentorcountstop)
  }

      }
    
  }, 2);
  prizescount:number = 58;
    prizescountstop:any = setInterval(()=>{
      if(window.scrollY>1050){
        this.prizescount++;
      if(this.prizescount==80){
        clearInterval(this.prizescountstop)
      }
    }
    
  }, 2);
  yearcount:number = 0;
    yearcountstop:any = setInterval(()=>{
      if(window.scrollY>1050){
        this.yearcount++;
      if(this.yearcount==22){
        clearInterval(this.yearcountstop)
      }
    }
    
  }, 2);
}
