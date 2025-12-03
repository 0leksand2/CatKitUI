// custom-select.component.ts
import { Component, Input, Output, EventEmitter, forwardRef, OnInit, ElementRef, ViewChild, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'kit-select-list',
    standalone: false,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => KitSelectListComponent),
            multi: true
        }
    ],
    templateUrl: './select.list.component.html',
    styleUrls: ['./select.list.component.scss']
})
export class KitSelectListComponent implements ControlValueAccessor, OnInit {
    @Input() options: any[] = [];
    @Input() nameOption: string = 'name';
    @Input() valueOption: string = 'value';
    @Input() disabledOption: string = 'disabled';
    @Input() placeholder: string = 'Select an option';
    @Input() disabled: boolean = false;
    @Input() searchable: boolean = false;

    @Input() selectedValue: any = null;
    @Output() selectedValueChange = new EventEmitter<any | null>();

    @Input() width: string = '200px';
    
    @ViewChild('trigger') triggerRef!: ElementRef;
    @ViewChild('dropdown') dropdownRef!: ElementRef;

    selectedOption: any | null = null;
    isOpen: boolean = false;

    // ControlValueAccessor implementation
    private onChange = (value: any) => { };
    private onTouched = () => { };

    ngOnInit() {
        this.updateSelectedOption();
    }

    // ControlValueAccessor methods
    writeValue(value: any): void {
        this.selectedValue = value;
        this.updateSelectedOption();
    }

    registerOnChange(fn: (value: any) => void): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }

    setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }

    toggleDropdown(): void {
        if (this.disabled) return;

        this.isOpen = !this.isOpen;
    }

    selectOption(option: any): void {
        if (option.disabled) return;

        this.selectedValue = option[this.valueOption];
        this.selectedOption = option;
        this.isOpen = false;
        this.onChange(option[this.valueOption]);
        this.onTouched();
        this.selectedValueChange.emit(option);
    }

    private updateSelectedOption(): void {
        this.selectedOption = this.options.find(option => option[this.valueOption] === this.selectedValue) || null;
    }

    @HostListener('document:click', ['$event'])
    onDocumentClick(event: Event): void {
        if (!this.triggerRef?.nativeElement.contains(event.target) &&
            !this.dropdownRef?.nativeElement.contains(event.target)) {
            this.isOpen = false;
        }
    }

    trackByFn(index: number, option: any): any {
        return option[this.valueOption];
    }
}
