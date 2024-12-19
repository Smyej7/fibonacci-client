import { Component } from '@angular/core';
import { Fibonacci } from 'src/app/models/Fibonacci';
import { FibonacciService } from 'src/app/services/fibonacci.service';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.css']
})
export class FibonacciComponent {
  number: number | null = null;
  response: Fibonacci | null = null;

  constructor(private service: FibonacciService) {}

  getData(): void {
    if (this.number !== null) {
      this.service.getData(this.number).subscribe({
        next: (response: Fibonacci) => {
          this.response = response;
        }
      });
    }
  }
}
