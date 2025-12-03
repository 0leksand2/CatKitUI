// custom-select.component.ts
import { Component, Input, Output, EventEmitter, forwardRef, OnInit, ElementRef, ViewChild, HostListener, viewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { fromEvent, debounce, map, debounceTime, distinctUntilChanged } from 'rxjs';

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
    @Input() visibleOptions: any[] = [];
    @Input() nameOption: string = 'name';
    @Input() valueOption: string = 'value';
    @Input() disabledOption: string = 'disabled';
    @Input() placeholder: string = 'Select an option';
    @Input() disabled: boolean = false;
    @Input() searchable: boolean = false;
    @Input() showClear: boolean = true;
    @Input() remoteLoading: boolean = false;
    @Input() pageSize: number = 20;
    @Input() totalOptions: number = 0
    @Input() selectedValue: any = null;
    @Input() searchPlaceholder: string = 'Search...';

    @Output() selectedValueChange = new EventEmitter<any | null>();

    @Input() width: string = '200px';
    
    @ViewChild('trigger') triggerRef!: ElementRef;
    @ViewChild('dropdown') dropdownRef!: ElementRef;
    @ViewChild('searchref') searchRef!: ElementRef;

    selectedOption: any | null = null;
    isOpen: boolean = false;

    // ControlValueAccessor implementation
    private onChange = (value: any) => { };
    private onTouched = () => { };

    ngOnInit() {
        this.visibleOptions = structuredClone(this.options)
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

        if(this.isOpen && this.searchable) {
            setTimeout(() => {
                this.searchRef.nativeElement.focus();
            }, 100);

            fromEvent(this.searchRef.nativeElement, 'input')
                .pipe(
                    map((event:any) => event.target.value),
                    debounceTime(250),
                    distinctUntilChanged()
                ).subscribe((value) => {
                    const searchOption = value.toLowerCase();
                    this.visibleOptions = this.options.filter(option => 
                        option[this.nameOption].toLowerCase().includes(searchOption)
                    );
                })
        }
    }

    clearSelection(): void {
        if(this.disabled) return;
        this.selectedOption = null;

        this.onChange(null);
        this.selectedValueChange.emit(null);
        this.isOpen = false;
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
