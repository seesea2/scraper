import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material';

import { SendMessageComponent } from './send-message.component';

describe('SendMessageComponent', () => {
	let component: SendMessageComponent;
	let fixture: ComponentFixture<SendMessageComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [ SendMessageComponent ],
				imports: [ MatFormFieldModule ]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(SendMessageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
