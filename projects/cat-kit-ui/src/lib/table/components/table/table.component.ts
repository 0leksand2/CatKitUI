import { Component, ContentChildren, Input, OnInit, QueryList } from "@angular/core";
import { TableOptions } from "../../models/table.options";
import { KitColumnComponent } from "../column/column.component";

@Component({
    selector: 'kit-table',
    standalone: false,
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
})
export class KitTableComponent<T = any> implements OnInit {
    @Input() totalCount: number = 0;
    @Input() pageSize!: number;
    @Input() showPager: boolean = false;
    @Input() pageSizes: number[] = [10, 15, 20]

    @Input() dataSource: any[] = []
    @Input() visibleItems: any[] = [];

    @Input() remoteOperations: boolean = false;
    @Input() loadData!: any;

    @Input() key!: string;
    pages: number = 1;
    currentPage: number = 1;
    @ContentChildren(KitColumnComponent) columns!: QueryList<KitColumnComponent<T>>;

    constructor() {

    }

    ngOnInit(): void {
        this.paramsChanged({page: this.currentPage, pageSize: this.pageSize});
    }

    protected async paramsChanged(properties: TableOptions) {
        if (this.remoteOperations) {
            const res = await this.loadData(properties.page, properties.pageSize)
            this.dataSource = res.data;
            this.visibleItems = this.dataSource;
            this.totalCount = res.totalCount;
            this.pageSize = properties.pageSize;
            this.currentPage = properties.page;
            this.pages = Math.ceil(res.totalCount / properties.pageSize);
        }else{
            this.pages = Math.ceil(this.dataSource.length / properties.pageSize);
            this.currentPage = properties.page;
            this.pageSize = properties.pageSize;
            const startIndex = (properties.page - 1) * properties.pageSize;
            this.visibleItems = this.dataSource.slice(startIndex, startIndex + properties.pageSize);
        }
    }

    public refresh(){
        this.paramsChanged({page: this.currentPage, pageSize: this.pageSize})
    }
}