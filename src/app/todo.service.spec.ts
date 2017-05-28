import { TestBed, inject } from '@angular/core/testing';

import { todoService } from './todo.service';

describe('todoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [todoService]
    });
  });

  it('should be created', inject([todoService], (service: todoService) => {
    expect(service).toBeTruthy();
  }));
});
