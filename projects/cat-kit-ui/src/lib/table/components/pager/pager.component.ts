import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TableOptions } from '../../models/table.options';

@Component({
  selector: 'kit-pager',
  templateUrl: `./pager.component.html`,
  styleUrl: `./pager.component.scss`,
  standalone: false
})
export class KitPagerComponent<T = any> {
  @Input() totalItems!: number;
  @Input() pages: number = 1;
  @Input() pageSize: number = 10;
  @Input() pageSizes: number[] = [10, 15, 20]
  @Input() currentPage: number = 1;

  @Output() pageSizeChange = new EventEmitter<number>()
  @Output() currentPageChange = new EventEmitter<number>()

  @Output() pagerPropertiesChanged = new EventEmitter<TableOptions>()

  pageSizeChanged(pageSize: number){
    this.pageSize = pageSize;
    this.currentPage = 1;
    this.pagerPropertiesChanged.emit({ pageSize: this.pageSize, page: this.currentPage})
  }

  pageChanged(page: number){
    this.currentPage = page;
    this.pagerPropertiesChanged.emit({ pageSize: this.pageSize, page: this.currentPage});
  }
}