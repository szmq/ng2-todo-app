import { TestBed, inject } from '@angular/core/testing';

import { todoervice } from './todo.service';

describe('todoervice', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [todoervice]
    });
  });

  it('should be created', inject([todoervice], (service: todoervice) => {
    expect(service).toBeTruthy();
  }));
});
