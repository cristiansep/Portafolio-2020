import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ResumeService } from './resume.service';
import * as jsPDF from 'jspdf';


@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  // @ViewChild('htmlData') htmlData:ElementRef;
 


  constructor(
    public resumeService: ResumeService
  ) { }

  ngOnInit(): void {
  }


  cerrarResume() {
    this.resumeService.ocultarResume();
  }


  // public openPDF():void {
  //   let DATA = this.htmlData.nativeElement;
  //   let doc = new jsPDF('p', 'pt', 'a4');
  //   doc.fromHTML(DATA.innerHTML,15,15);
  //   doc.output('dataurlnewwindow');
  // }

  // public downloadPDF(): void {
  //   let DATA = this.htmlData.nativeElement;
  //   let doc = new jsPDF('p', 'pt', 'a4');

  //   let handleElement = {
  //     '#editor': function (element, renderer) {
  //       return true;
  //     }
  //   };
    // doc.fromHTML(DATA.innerHTML, 15, 15, {
    //   'width': 100,
    //   'elementHandlers': handleElement
    // });

    // doc.save('angular-demo.pdf');

  //   doc.fromHTML(DATA.innerHTML, 0, 0, {
  //     'width': 100, // max width of content on PDF
  //     'elementHandlers': handleElement
  //   },
  //     function (bla) { doc.save('saveInCallback.pdf'); },
  //     0);
  // }


}
