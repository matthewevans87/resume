import { TestBed } from '@angular/core/testing';

import { StaticStoreService } from './static-store.service';
import { HttpClientModule } from '@angular/common/http';

describe('StaticStoreService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [
            HttpClientModule
        ]
    }));

    it('should be created', () => {
        const service: StaticStoreService = TestBed.get(StaticStoreService);
        expect(service).toBeTruthy();
    });
});
