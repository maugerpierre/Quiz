import { TestBed } from '@angular/core/testing';

import { QuizzHttpService } from './quizz-http.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('QuizzHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: QuizzHttpService = TestBed.get(QuizzHttpService);
    expect(service).toBeTruthy();
  });
});
